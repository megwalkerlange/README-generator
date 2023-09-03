const fs = require(`fs`);
const path = require("path");
const inquirer = require(`inquirer`);
// const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    name: "userName",
    message: "What is your username?",
  },
  {
    name: "email",
    message: "what is your email address?",
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
];
inquirer.prompt(questions).then((answers) => {
  data = console.info(
    "Answer:",
    answers.userName,
    answers.email,
    answers.description,
    answers.license
  );
});

// function writeToFile(generateMarkdown, data) {}

// const text = inquirer.prompt;
