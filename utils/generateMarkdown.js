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
    return `
    Permission is hereby granted, free of charge, to any person obtaining a copy of this 
    software and associated documentation files (the “Software”), to deal in the 
    Software without restriction, including without limitation the rights to use, copy, 
    modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject to the 
    following conditions:

    The above copyright notice and this permission notice shall be included in all 
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, 
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
    THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  
  }else if(license == "ISC"){
    return `
    Permission to use, copy, modify, and/or distribute this software for any 
    purpose with or without fee is hereby granted, provided that the above 
    copyright notice and this permission notice appear in all copies.
    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR 
    DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE 
    INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. 
    IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, 
    OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
    WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, 
    ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
    
  }else if(license == "Apache 2.0"){
    return ` 
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  [Description](##Description)
  [Installation](##Installation)
  [Usage](##Usage)
  [Contributing](##Contributing)
  [License](##License)
  [Tests](##Tests)
  [Questions](##Questions)

  ## Description
  ${data.description}

  ## Installation 
  ${data.installInst}

  ## Usage
  ${data.usageInfo}

  ## Contributing
  ${data.contriGuide}

  ## License
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}
  
  Copyright 2023 ${data.github}
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.testInstr}


  ## Questions
  For any questions related to the repository, reach me at the following email

  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
