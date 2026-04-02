// INSTRUCTOR COURSE PAGE SCRIPTS

let courseId;
let instructorId;

// GET SESSION INFO AND LOAD PAGE
async function getSession() {
    const response = await fetch('/api/instructor/session');
    const session = await response.json();
    
    const params = new URLSearchParams(window.location.search);
    courseId = params.get('courseId');
    
    if (!courseId) {
        console.log('No courseId in URL');
        return;
    }

    if (!session.loggedIn) {
        window.location.href = '/instructor/sign-in';
        return;
    }

    instructorId = session.userId;
    loadAssignments();
    loadCourseName();
}

// LOAD COURSE NAME
async function loadCourseName() {
    const response = await fetch(`/api/instructor/get-course-from-id/${courseId}`);
    const courses = await response.json();
    const course = courses[0]; // 
    document.querySelector('.center-title').textContent = course.code;
    document.querySelector('.current-course-count').textContent = course.title;
}

// LOAD ASSIGNMENTS OF THE COURSE
async function loadAssignments() {
    const response = await fetch(`/api/instructor/get-assignments/${courseId}`);
    const assignments = await response.json();
    displayAssignments(assignments);
}

// DISPLAY ASSIGNMENTS IN THE TABLE
function displayAssignments(assignments) {
    const tbody = document.querySelector('.assessments-table tbody');
    tbody.innerHTML = '';

    assignments.forEach(assignment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${assignment.title}</td>
            <td>${assignment.description}</td>
            <td>${new Date(assignment.dueDate).toLocaleDateString()}</td>
            <td>${assignment.weight}%</td>
        `;
        tbody.appendChild(row);
    });
}

getSession();