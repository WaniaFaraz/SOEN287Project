console.log('scripts loaded');
//document.addEventListener('DOMContentLoaded', getSession); //do getSession when the document loads
console.log("reached scripts");

const PORT = 8080;

let userId;

//MODAL FOR ADDING COURSES:
const addCoursesModalButton = document.getElementById("add-courses-modal-button");

addCoursesModalButton.addEventListener('click', function() {
    const modal = document.getElementById('add-course-modal');
    modal.showModal();
})

//CLOSE THE MODAL
const closeModalButton = document.getElementById("close-modal");
closeModalButton.addEventListener('click', function() {
    const modal = document.getElementById('add-course-modal');
    modal.close();
})

/** TECHNICALLY FOR STUDENTS...MOVE THERE
//GENERATE DROPDOWN OPTIONS FOR THE COURSE SECTION IN THE MODAL FOR WHEN A COURSE IS ADDED
const courseCodeInput = document.getElementById("ask-code");
courseCodeInput.addEventListener('keyup', async function() {
    console.log("reached event listener");
    console.log(courseCodeInput.value);
    if(courseCodeInput.value.length == 8) { //a valid course code should have 8 characters: 'AAAA 111'
        //fetch the route to get course sections from ids
        //remove spaces from the course code - to avoid errors
        const courseCode = courseCodeInput.value.slice(0,4) + courseCodeInput.value.slice(5);
        const response = await fetch(`/api/instructor/get-sections-from-course-code/${courseCode}`);
        const sections = await response.json(response);
        console.log("possible sections:",sections);
        const element = document.getElementById("course-select-section");
        generateSectionsDropDown(sections, element);
    }
})

async function generateSectionsDropDown(sections, element) {
    //sections is an array of sections
    //element is the html element where the dropdown needs to be inserted
    if(sections.length == 0) { //invalid course, i.e. has no sections
        element.innerHTML += `<option >Invalid</option>`;
    }
    sections.forEach((value, index, array) => {
        element.innerHTML += `<option value=${value}>${value}</option>`;
    })
}
*/





/**
//WAITING FOR INSTRUCTOR SESSION AND SIGN IN IS DEFINED
async function getSession() {
    const session = await fetch();
    userId = session.userId;
    loadHomePage();
}
    

async function loadHomePage() {
    await loadCourses();
}

async function loadCourses() {
    //temmporarily hardcode instructor id
    const instructorId = 2001;
    const response = await fetch(`${URL}/api/instructor/get-courses/${instructorId}`);
    const courseIds = await response.json();
    const courses = courseIds.forEach( async (value, index, array) => {
        response = await fetch(`${URL}/api/instructor`)
    })
    
}
    */