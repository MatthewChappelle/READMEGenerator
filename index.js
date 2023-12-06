const inquirer = require('inquirer');
const fs = require('fs');
//import license functions from generateMarkdown.js
const { generateReadme } = require('./utils/generateMarkdown');

// User Input
inquirer
    .prompt([

        //Title
        {
            type: 'input',
            name: 'title',
            message: 'Enter title:',
        },
        //Description
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description:',
        },
        //Installations
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        //Usage
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        //Contribution 
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines:',
        },
        //Tests
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        //License 
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            //can add more options as needed
            choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None'],
        },
        //Github Username
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ])

    //Fill in templage with user input
    .then((answers) => {
        const newReadme = generateReadme(answers);
        readmeContent = newReadme

        // Writes ReadMe and console logs result
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file generated successfully!');
            }
        });
    });

