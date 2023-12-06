const inquirer = require('inquirer');
const fs = require('fs');

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
        //generate readme
        const newReadMe = `
# ${answers.title}
    
    
## Description
${answers.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}

## License
This application is covered under the LICENSE HERE license. For more information, see LICENSELINK HERE.
    
## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
Feel free to reach out to me with questions, comments, concerns, and sarcastic remarks through my GitHub: [${answers.github}](https://github.com/${answers.github}) Or my email: [${answers.email}]
`;

        // Writes ReadMe and console logs result
        fs.writeFile('README.md', newReadMe, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file generated successfully!');
            }
        });
    });

