// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Table of Contents
   
  1. [Description]
  2. [Installation]
  3. [Languages]
  4. [Usage]
  5. [Contributors]
  6. [License]
  7. [Name of Creator]
  8. [GitHub]
  9. [Email]
  10. [Questions]

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Languages

  ${data.languages}

  ## Usage

  ${data.usage}

  ## Contributers

  ${data.contributors}

  ## License

  ${data.license}

  ## Name of Creator

  ${data.name}

  ## GitHub

  ${data.github}

  ## Email

  ${data.email}

  ## Questions

  ${data.questions}

`;
}

module.exports = generateMarkdown;
