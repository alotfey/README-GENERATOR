// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
      return  `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
  } else if (license === 'boost') {
      return `https://img.shields.io/badge/License-Boost_1.0-lightblue.svg`;
  } else if (license === 'bsd') {
      return `https://img.shields.io/badge/License-BSD_3--Clause-blue.svg`;
  } else {
      return ''
  }
 
  

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license === 'boost') {
    return `https://www.boost.org/LICENSE_1_0.txt`
  } else if (license === 'bsd') {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'apache') {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else if (license === 'boost') {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else if (license === 'bsd') {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#contribution)
  * [test instructions](#Tests)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.useage}
  ## contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Badges
  ${renderLicenseSection(data.license)}

  ## README entitled Questions
  [Github Account](https://github.com/${data.github})
  Email: ${data.email}

  

`;
}

module.exports = generateMarkdown;
