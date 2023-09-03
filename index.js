const fs = require(`fs`);
const path = require("path");
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "Can you provide a short description of your project?",
  },
  {
    name: "installation",
    message:
      "Please can you provide information on how to install your application?",
  },
  {
    name: "languages",
    messages:
      "Please can yuo list all languages/technologies used within this project",
  },
  {
    name: "usage",
    message: "Please can you describe the intended usage for this project?",
  },
  {
    name: "contributors",
    message: "Please list anyone who contributed to this project",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you wish to use?",
    choices: [
      "MIT",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
    ],
  },
  {
    name: "name",
    message: "Please list your full name",
  },
  {
    name: "github",
    message: "Please list your github username",
  },
  { name: "email", message: "Please list your email address" },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Creating README.md File...");
    writeToFile("./read/README.md", generateMarkdown({ ...answers }));
  });
}

init();
