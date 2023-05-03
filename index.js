// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
    //let answers= [];
inquirer.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installInst',
    },
    {
    type: 'input',
    message: questions[3],
    name: 'usageInfo',

    },
    {
    type: 'input',
    message: questions[4],
    name: 'contriGuide',
    
    },
    {
    type: 'checkbox',
    message: questions[5],
    name: 'license',
    choices:['MIT', 'ISC', 'Apache 2.0']
        
    },
    {
    type: 'input',
    message: questions[6],
    name: 'testInstr',
            
    },
    {
    type: 'input',
    message: questions[7],
    name: 'github',
                
    },
    {
    type: 'input',
    message: questions[8],
    name: 'email',
        
    },
  ]).then((response) =>{
const fileName = "README.md"; 

//console.log(writeREADME(response));
console.log("File Made!")
writeToFile(fileName, writeREADME(response));

});

}

// Function call to initialize app
init();
