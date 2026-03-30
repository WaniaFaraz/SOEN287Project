console.log('scripts loaded');
document.addEventListener('DOMContentLoaded', loadHomePage); //do loadHomePage when the document loads

async function loadHomePage() {
    //GET ALL COURSES FOR STUDENT AND ADD THEM TO THE MAIN COURSE PAGE
    //TO BE FIXED: ADD COURSE BACKGROUND AND ADD COURSE TITLE - FIX DATABASE
    const response = await fetch('/api/student/get-courses/1000');
    const coursesOfStudent = await response.json();
    
    //iterate over each course
    coursesOfStudent.forEach((value, index, array) => {
        console.log(value);
        const courseTitle = value.title;
        const courseCode = value.course_code;
        const courseSection = value.course_section;

        console.log("code:", courseCode);
        console.log("section:", courseSection);

        //insert data into html elements
        const courseArea = document.getElementById("course-area");
        courseArea.innerHTML += `<div class="course">
                            <div class="course-image course-img-${index+1}"></div>
                            <a class="course-info-text" href="course-page">
                                <p class="course-code">${courseCode}</p>
                                <p class="course-name">Web Programming</p>
                                <p class="course-section">Section ${courseSection}</p>
                            </a>
                        </div>`;
    })

}
    
