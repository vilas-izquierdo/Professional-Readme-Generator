const generateMarkdown = ({ title, description, installation, usage,
  license, contribute, tests, github, email}) =>

  ` 
  # ${title} ![License](https://img.shields.io/badge/license-${license}-blue)

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How To Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
 
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
 ${usage}
  
  ## License
  
${license}
  
  ## How to Contribute
  
  ${contribute}
  
  ## Tests
  
  ${tests}

  ## Questions

  If you have any questions you can reach me either through ${github}, or by email at ${email}.
`;

module.exports = generateMarkdown;
