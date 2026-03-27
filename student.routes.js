const express = require("express");
const router = express.Router();
const dir = __dirname;
//Student routes
//STUDENT SIGN IN
router.get("/sign-in", (request, response) => {
    response.sendFile(dir + "/SignIn.html");
})
//STUDENT CREATE ACCOUNT
router.get("/create-account", (request, response) => {
    response.sendFile(dir + "/SignUp.html");
})
//HOME PAGE
router.get("/home", (request, response) => {
    response.sendFile(dir + "/HomePage.html");
})
//COURSE HOME PAGE
router.get("/course-page", (request, response) => {
    response.sendFile(dir + "/coursePage.html");
})
//ASSIGNMENTS FOR STUDENTS
router.get("/assignments", (request, response) => {
    response.sendFile(dir + "/ManageAssessments_Page.html");
})
//COURSE TEMPLATES FOR STUDENTS (MADE BY PROFESSORS)
router.get("/course-templates", (request, response) => {
    response.sendFile(dir + "/Student_templates.html");
})
//STUDENT ACCOUNT SETTINGS
router.get("/account-settings", (request, response) => {
    response.sendFile(dir + "/ManageAccount.html");
})
//STUDENT LOG OUT PAGE
router.get("/log-out", (request, response) => {
    response.sendFile(dir + "/LogOut.html");
})

//export routes.js file
module.exports = router;