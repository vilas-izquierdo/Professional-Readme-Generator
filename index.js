const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./Develop/utils/generateMarkdown")

const init = () => {
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the Title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What is the installation process for this project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use this project?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What is the license for this project?',
            name: 'license',
            choices: [
                "Apache", 
                "MIT", 
                "GNU-General-Public",
                "None"
            ]
        },
        {
            type: 'input',
            message: 'How can someone contribute to this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'How do you test this project?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Enter your GitHub username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email',
        },
    ])
.then((answers) => {
    const readMeContent = generateMarkdown(answers);

    fs.writeFile('README2.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your ReadMe file!')
    );
  });
}

init();
