//all student queries and functions...
const express = require("express");
const router = express.Router();

//DATABASE QUERIES
//Temporary - to be modified for other use if necessary - can be used as an example for using the querying functions
const {
    getStudents,
    getStudentById,
    getCoursesOfStudent
} = require("../database"); //import querying functions from the database file

//GET ALL STUDENTS - RETURNS AN ARRAY OF STUDENT JSON OBJECTS
router.get('/get-students', async (request, response) => {
    const students = await getStudents();
    response.json(students);
});
//GET A STUDENT FROM THE ID
router.get('/get-students/:id', async (request, response) => {
    const id = request.params.id;
    const student = await getStudentById(id);
    response.json(student);
})
//ADD A STUDENT
//add code here for adding students after creating the account info
//note: there is an addstudent(id, firstName, lastName, emailAddress) function
//      in the database file that will add the student to the database that can be used

//GET COURSES OF A SPECIFIC STUDENT
router.get('/get-courses/:studentid', async (request, response) => {
    const studentid = request.params.studentid;
    const courses = await getCoursesOfStudent(studentid);
    response.json(courses);
})
module.exports = router;