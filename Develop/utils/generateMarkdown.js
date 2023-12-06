
// returns a license badge based on which license is passed in.If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses';
  }
};

// Returns the license link.f there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
};

function generateReadme(answers) {

  //setup variables for license link and badge
  const licenseLink = renderLicenseLink(answers.license);
  const licenseBadge = renderLicenseBadge(answers.license);

  //generate readme
  const newReadme = `
# ${answers.title}  ${licenseBadge}


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
This application is covered under the ${answers.license} license. For more information, see [${licenseLink}](${licenseLink}).

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
Feel free to reach out to me with questions, comments, concerns, and sarcastic remarks through my GitHub: [${answers.github}](https://github.com/${answers.github}) Or my email: [${answers.email}]
`;
  return newReadme;
}

module.exports = { generateReadme };