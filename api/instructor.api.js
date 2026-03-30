//Fetches and adds data to and from the database
//Returns JSON objects when fetching data from the database - will be used by html files
//professor table queries

const express = require("express");
const router = express.Router();

const {getInstructors, getInstructorById} = require("../database");
router.get('/get-instructors', async (request, response) => {
    const instructors = await getInstructors();
    response.json(instructors);
})
router.get('/get-instructors/:id', async (request, response) => {
    const instructor = await getInstructorById(id);
    response.json(instructor);
})

//ADD AN INSTRUCTOR
//add code here for adding instructors after collecting the account info
//note: there is an addInstructor(id, firstName, lastName, emailAddress) function
//      in the database file that will add the student to the database that can be used

module.exports = router;