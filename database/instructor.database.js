//GOAL OF FILE:
//  Contains all the functions to retrieve data from and store data in the database related to instructors
//  (In other words: this file contains the functions that query the database)

//INSTRUCTIONS TO USE DATABASE
//  The database used is a mySQL database
//  (From slides on databases) Install xampp - this has mySQL, apache,...
//  Open the xampp control panel and start apache and mySQL
//  Go to the browser and type: "localhost" - this should lead to the xampp dashboard
//  Click on phpmyadmin
//  **INSTRUCTIONS TO GET DATABASE COMING SOON**

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


//Get all instructors
async function getInstructors() {
    const [instructors] = await pool.query('SELECT * FROM `professors`');
    return instructors;
}

//Get instructors from id
async function getInstructorById(id) {
    const [rows] = await pool.query('SELECT * FROM `professors` WHERE `professorID` = ?', [id]);
    return rows;
}

//add an instructor
async function addInstructor(instructorId, firstName, lastName, emailAddress) {
    const queryString = "INSERT INTO `professors` (`professorID`, `firstName`, `lastName`, `emailAddress`, `password`) VALUES (?, ?, ?, ?)";
    await pool.query(queryString, [instructorId, firstName, lastName, emailAddress]);
    console.log("Instructor added with ID: ", professorID);
}

//Export all functions
module.exports = { 
    getInstructors,
    getInstructorById,
    addInstructor
};

