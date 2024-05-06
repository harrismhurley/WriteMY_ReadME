
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
      break;
    case 'GNU AGPLv3':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
      break;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
      break;
    case 'None':
      return '';
      break;
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'GNU AGPLv3':
      return 'https://www.gnu.org/licenses/agpl-3.0.html';
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'None':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  } else {
    return `## License
    
  N/A`;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Deployed Application URL
${data.link}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Features](#features)
* [Dependencies](#dependencies)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.credits}

## Features
${data.features}

## Dependencies
${data.require}

## How to Contribute
${data.contribution}

## Tests
${data.tests}

## License 
${renderLicenseSection(data.license)}

## Questions
Please send your questions [Via Email](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
