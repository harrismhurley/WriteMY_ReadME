// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please name your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What is the installation process for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Were there any other collaborators for your project?',
    },
    {
        type: 'checkbox',
        name: 'license',
        choices: ['NONE', 'Apache 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'MIT', 'Mozilla Public License 2.0',],
    },
    {
        type: 'input',
        name: 'require',
        message: "What are your project's dependencies?",
    },
    {
        type: 'input',
        name: 'features',
        message: 'What sort of features are included in your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are employed within the project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email would you like users to send their questions to?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Copy and paste the link to your deployed project',
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`File ${fileName} has been created successfully.`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Generating your ReadMe");
        writeToFile(`${responses.title}_README.md`, generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
