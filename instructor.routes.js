const express = require("express");
const router = express.Router();
const dir = __dirname;

//INSTRUCTOR ROUTES
//INSTRUCTOR SIGN-IN
router.get("/sign-in", (request, response) => {
    response.sendFile(dir + "/SignIn.html");
})
//INSTRUCTOR CREATE ACCOUNT
router.get("/create-account", (request, response) => {
    response.sendFile(dir + "/SignUp.html");
})
//INSTRUCTOR HOME PAGE
router.get("/home", (request, response) => {
    response.sendFile(dir + "/Instructor_HomePage.html");
})
//INSTRUCTOR COURSE PAGE
router.get("/course-page", (request, response) => {
    response.sendFile(dir + "/Instructor_CoursePage.html");
})
//INSTRUCTOR ACCOUNT SETTINGS
router.get("/account-settings", (request, response) => {
    response.sendFile(dir + "/Manage_Account.html");
})
//INSTRUCTOR COURSE TEMPLATES
router.get("/course-templates", (request, response) => {
    response.sendFile(dir + "/Instructor_templates.html");
})
//STUDENT TEMPLATE PREVIEW
router.get("/course-template-preview", (request, response) => {
    response.sendFile(dir + "/Student_templates.html");
})

//export routers
module.exports = router;