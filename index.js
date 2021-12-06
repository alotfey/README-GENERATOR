// TODO: Include packages needed for this application
// Question package
const inquirer = require('inquirer');
// create file package
const fs = require("fs");
// import class generateMarkdown 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the repository name:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Enter usage informations:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
        validate(answer) {
            if(!answer) {
                return 'cannot Enter Empty value'
            }
            return true
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose a license badge:',
        choices: [
            'apache',
            'boost',
            'bsd',
        ],

        


    },
    {
        type: 'input',
        name: 'github',
        message: 'enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your Email address:',
        validate: (answer) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(answer)) {
            return "You have to provide a valid email address!"
          }
          return true
        }
    }


    
    

];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err)
        console.log(err);
        else {
            console.log('File written successfully\n');
        }
    })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown(data))
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log("error happen")
        } else {
          console.log(error)
        }
    })

    
}

// Function call to initialize app
init();
