// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license == ""){
return ``;
}
if(license == "MIT"){
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

}else if(license == "ISC"){
  return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;

}else if(license == "Apache 2.0"){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == ""){
    return ``;
  }
  if(license == "MIT"){
  return `[MIT license](https://opensource.org/license/mit/)`;
  }else if(license == "ISC"){
  return `[ISC license](https://opensource.org/license/isc-license-txt/)`;
    
  }else if(license == "Apache 2.0"){
  return`[Apache 2.0 license](https://opensource.org/license/apache-2-0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == ""){
    return ``;
  }
  if(license == "MIT"){
    return ``;
  
  }else if(license == "ISC"){
    return ``;
    
  }else if(license == "Apache 2.0"){
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents


  ## Description
  ${data.description}

  ## Installation 
  ${data.installInst}

  ## Usage
  ${data.usageInfo}

  ## Contributing
  ${data.contriGuide}

  ## License
  ${data.renderLicenseBadge(license)}${data.renderLicenseLink(license)}
  
  Copyright 2023 ${data.github}
  ${data.renderLicenseSection(license)}

  ## Tests
  ${data.testInstr}


  ## Questions
  For any questions related to the repository, reach me at the following email

  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
