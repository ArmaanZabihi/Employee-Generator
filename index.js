const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
const teamArray = []
runApp()
function runApp() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Select an employee type",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "No more"],
        },
      ])
      .then(function (userInput) {
        switch (userInput.addEmployeePrompt) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            htmlBuilder();
        }
      });
}

function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",
      },

      {
        type: "input",
        name: "managerID",
        message: "Fill in the manager's employee ID number please",
      },

      {
        type: "input",
        name: "managerEmail",
        message: "Manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Manager's office number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      teamArray.push(manager);
      runApp()
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of the engineer?",
      },

      {
        tpye: "input",
        name: "engineerID",
        message: "Fill in the Engineer's employee ID please",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's email address?",
      },

      {
        type: "input",
        name: "engineerGitHub",
        message: "What is the GitHub username of the employee?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerID,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      teamArray.push(engineer);
      runApp();
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of the intern?",
      },

      {
        type: "input",
        name: "internID",
        message: "What is the intern's ID?",
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern go to?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      teamArray.push(intern);
      runApp();
    });
}
function htmlBuilder() {
    const name="Armaan"
    const employee=teamArray[0]
  const htmlContent = `
<html>
<head>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
<h1>Hi ${employee.name}</h1>
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <p class="card-text">Email: ${employee.email}</p>
    <p class="card-text">ID: ${employee.id}</p>
  </div>
</div>
</body>
</html>
`;
  fs.writeFile("./output.html", htmlContent, (err) => {
    console.log(err || "success!");
  });
}
