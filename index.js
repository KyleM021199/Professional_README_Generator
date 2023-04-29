// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is your Repo name?", 
"Enter your description", 
"Enter install instructions",
"Enter Usage information", 
"Enter contribution guidelines", 
"Choose a repo license",
"Enter test instructions",
"Enter Github name",
"Enter email address"];

inquirer.prompt([

    {
      type: 'input',
      message: questions[0],
      name: 'name',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'location',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'github',
    },
    {
    type: 'input',
    message: questions[3],
    name: 'linkedIn',

    },
  ]).then((response) =>{
const fileName = "README.md"
const writeREADME = require('./generateMarkdown.js') 

    writeToFile(fileName, writeREADME)

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data)
}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
