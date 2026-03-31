//GOAL OF FILE:
//  Contains all the functions to retrieve data from and store data in the database related to students
//  (In other words: this file contains the functions that query the database)

//INSTRUCTIONS TO USE DATABASE
//  The database used is a mySQL database
//  (From slides on databases) Install xampp - this has mySQL, apache,...
//  Open the xampp control panel and start apache and mySQL
//  Go to the browser and type: "localhost" - this should lead to the xampp dashboard
//  Click on phpmyadmin

//INSTRUCTIONS TO GET DATABASE:
//I will upload a .sql file to github
//once you open phpMyAdmin in xampp, create a database and import the .sql file
//Our databases will not be synced, we will each have a copy of the database and can add/delete data
//**Do not change the structure of any tables so that our querying functions work correctly**

//QUERY FUNCTIONS
//  Most of the querying functions required can be found here
//  If any more are needed, here is the template: (things within <> are what you need to replace)
/**     async function <function name> () {
 *         const [rows] = await pool.query(<queryString>);
 *          return rows;
 *      }
 *   Note: the queryString is a mySQL command. You can get it by copy and pasting commands from mySQL in phpMyAdmin
*/
// After creating a function, make sure to include it in the exports at the very bottom of the file


const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "lms_info" //name of the database
}).promise() //use pool whenever accessing the database


//Get all students
async function getStudents() {
    const [rows] = await pool.query('SELECT * FROM `students`');
    return rows;
    //rows: array of json objects containing studentId, firstName, lastName, emailAddress, password
}

//Get a student by ID
async function getStudentById(id) {
    const [rows] = await pool.query('SELECT * FROM `students` WHERE `studentID` = ?', [id]);
    return rows;
    //rows: array of json objects containing studentId, firstName, lastName, emailAddress, password
}

//add a student
async function addStudent(studentID, firstName, lastName, emailAddress) {
    const queryString = "INSERT INTO `students` (`studentID`, `firstName`, `lastName`, `emailAddress`, `password`) VALUES (?, ?, ?, ?)";
    await pool.query(queryString, [studentID, firstName, lastName, emailAddress]);
    console.log("Student added with ID: ", studentID);
    //adds a student into the student database RETURNS????????????
}


//get all students for an instructor - see instructor.database.js
//get all grades for a student - see assignments.database.js

//Export all functions
module.exports = { 
    getStudents,
    getStudentById,
    addStudent,
    
};