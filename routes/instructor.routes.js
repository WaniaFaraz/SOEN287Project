//GOAL OF FILE:
//  Contains all the routes to navigate between pages for instructors
//  Most likely should not require any additional routes - ask 

const express = require("express");
const router = express.Router();
const dir = __dirname;

//INSTRUCTOR ROUTES
//INSTRUCTOR SIGN-IN
router.get("/sign-in", (request, response) => {
    response.sendFile(dir + "/html/SignIn.html");
})
//INSTRUCTOR CREATE ACCOUNT
router.get("/create-account", (request, response) => {
    response.sendFile(dir + "/html/SignUp.html");
})
//INSTRUCTOR HOME PAGE
router.get("/home", (request, response) => {
    response.sendFile(dir + "/html/Instructor_HomePage.html");
})
//INSTRUCTOR COURSE PAGE
router.get("/course-page", (request, response) => {
    response.sendFile(dir + "/html/Instructor_CoursePage.html");
})
//INSTRUCTOR ACCOUNT SETTINGS
router.get("/account-settings", (request, response) => {
    response.sendFile(dir + "/html/Manage_Account.html");
})
//INSTRUCTOR COURSE TEMPLATES
router.get("/course-templates", (request, response) => {
    response.sendFile(dir + "/html/Instructor_templates.html");
})
//STUDENT TEMPLATE PREVIEW
router.get("/course-template-preview", (request, response) => {
    response.sendFile(dir + "/html/Student_templates.html");
})
//INSTRUCTOR MANAGE COURSES
router.get("/manage-courses", (request, response) => {
    response.sendFile(dir + "/html/Instructor_Manage_Courses.html");
})

//export routers
module.exports = router;