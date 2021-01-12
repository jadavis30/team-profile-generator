function generateHTML(userResponses) {

    let licenseObject = licenseArray.find(license => license.name === userResponses.license);
    
     //createMarkdown creates all headers and pulls info from index
     let createMarkdown = 
     `# ${userResponses.title}  
     ${renderLicenseBadge(userResponses.license)}
  
     ## Description
     *A brief description of the use and scope of the project:*    
     ${userResponses.description}
  
     ## Table of Contents
     - [Description](#description)
     - [Installation](#installation)
     - [Usage](#usage)
     - [License](#license)
     - [Contributing](#contributing)
     - [Questions](#questions-for-the-developer)
  
     ## Installation
     *Steps on how to install:*  
     ${userResponses.installation}
  
     ## Usage
     *Instructions for use with examples:*  
     ${userResponses.usage}
  
     ## License
     *[${licenseObject.name}](${licenseObject.url})*
  
     ## Contributing
     *The ins and outs of how to contribute.*  
     ${userResponses.contributing}
  
     ## Tests
     *Run these tests to showcase the application.*  
     ${userResponses.test}
  
     ## Questions for the Developer
     *Have a question? Contact me below and see what else I'm working on!*  
     [${userResponses.gituser}](https://www.github.com/${userResponses.gituser})  
     ${userResponses.email}`
     
    //return markdown information 
    return createMarkdown;
  }
  
  module.exports = generateMarkdown;