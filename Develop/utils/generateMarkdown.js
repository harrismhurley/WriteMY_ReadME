// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
* [Dependencies](#require)
* [How to Contribute](#HowtoContribute)
* [Testing](#testing)
* [License](#License)
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
${data.license}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.username}](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
