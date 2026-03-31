//See student.database or instructor.database for details
//Queries the database for data related to courses


const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "lms_info" //name of the database
}).promise() //use pool whenever accessing the database

//Get courses of a specific instructor
async function getCoursesOfInstructor(instructorId) {
    const queryString = "SELECT * FROM `courses` WHERE `Code` = ?"; //TO BE EDITED
}


//Get courses of a specific student
async function getCoursesOfStudent(studentid) {
    const queryString = "SELECT * FROM `student_courses` WHERE `studentID` = ?";
    const [rows] = await pool.query(queryString, [studentid]);
    return rows;
}

//Get course name from the course code
async function getCourseFromCode(courseCode) {
    const queryString = "SELECT * FROM `courses` WHERE `Code` = ?";
    const fixedCode = courseCode.slice(0,4) + " " + courseCode.slice(4); //add back the whitespace that was removed in the scripts file
    const [rows] = await pool.query(queryString, [fixedCode]);
    if(rows && rows.length > 0) {
        return rows[0];
    }
    else {
        console.log("Course not found");
    }
}

//Export all functions
module.exports = { 
    getCoursesOfInstructor,
    getCoursesOfStudent,
    getCourseFromCode
};