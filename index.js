// TODO: Include packages needed for this application
//file system
const fs = require('fs');
//inquirer 
const inquirer = require('inquirer');
//exported generateMarkdown
const writeREADME = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ["What is your Repo name?", 
"Enter your description:", 
"Enter install instructions:",
"Enter Usage information:", 
"Enter contribution guidelines:", 
"Choose a repo license:",
"Enter test instructions:",
"Enter Github name:",
"Enter email address:"];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
          
    fs.writeFile(fileName,data, err =>{});

    
}

// TODO: Create a function to initialize app
function init() {

// inquirer prompts answers
inquirer.prompt([
    {
    //Title
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
    //Description
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
        //Installation
      type: 'input',
      message: questions[2],
      name: 'installInst',
    },
    {
        //Usage
    type: 'input',
    message: questions[3],
    name: 'usageInfo',

    },
    {
        //Contributing
    type: 'input',
    message: questions[4],
    name: 'contriGuide',
    
    },
    {
        //License checkbox
    type: 'checkbox',
    message: questions[5],
    name: 'license',
    choices:['MIT', 'ISC', 'Apache 2.0']
        
    },
    {
        //Tests
    type: 'input',
    message: questions[6],
    name: 'testInstr',
            
    },
    {
        //Github
    type: 'input',
    message: questions[7],
    name: 'github',
                
    },
    {
        //Email
    type: 'input',
    message: questions[8],
    name: 'email',
        
    },
  ]).then((response) =>{
const fileName = "README.md"; 

//console.log(writeREADME(response));
console.log("File Made!")
// writes the README file with the provided responses via the inquirer
writeToFile(fileName, writeREADME(response));

});

}

// Function call to initialize app
init();
