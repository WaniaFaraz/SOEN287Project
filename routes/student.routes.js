//GOAL OF FILE:
//  Contains all the routes to navigate between pages for students
//  Most likely should not require any additional routes - ask 

//import necessary modules
const express = require("express"); //for css and js files
const router = express.Router();
const dir = __dirname.slice(0,-7); //remove the "/routes" part from the directory. (Since using ../ causes a "forbidden" message to appear)
//Student routes
//STUDENT SIGN IN
router.get("/sign-in", (request, response) => {
    response.sendFile(dir + "/html/SignIn.html");
})
//STUDENT CREATE ACCOUNT
router.get("/create-account", (request, response) => {
    response.sendFile(dir + "/html/SignUp.html");
})
//HOME PAGE
router.get("/home", (request, response) => {
    console.log(dir);
    response.sendFile(dir + "/html/HomePage.html");
})
//COURSE HOME PAGE
router.get("/course-page", (request, response) => {
    response.sendFile(dir + "/html/coursePage.html");
})
//ASSIGNMENTS FOR STUDENTS
router.get("/assignments", (request, response) => {
    response.sendFile(dir + "/html/ManageAssessments_Page.html");
})
//COURSE TEMPLATES FOR STUDENTS (MADE BY PROFESSORS)
router.get("/course-templates", (request, response) => {
    response.sendFile(dir + "/html/Student_templates.html");
})
//STUDENT ACCOUNT SETTINGS
router.get("/account-settings", (request, response) => {
    response.sendFile(dir + "/html/ManageAccount.html");
})
//STUDENT LOG OUT PAGE
router.get("/log-out", (request, response) => {
    response.sendFile(dir + "/html/LogOut.html");
})


//export routes.js file
module.exports = router;