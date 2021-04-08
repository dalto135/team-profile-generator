//Global variables
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const emailValidatorRegex = require("email-validator");
//npm i email-validator

let managerDiv = '';
let engineerDiv = '';
let internDiv = '';

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function addMember() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'team',
      message: 'Would you like to add an engineer, intern, or finish building your team?',
      choices: ['Engineer', 'Intern', 'Finish building team'],
    },
  ])
  .then(answers => {
    switch(answers.team) {
      case 'Engineer':
        engineer()
        .catch(function(err) {
          console.error(err);
      });
        break;
      case 'Intern':
        intern()
        .catch(function(err) {
          console.error(err);
      });
        break;
      default:
        writeFileAsync('dist/index.html', generateHTML());
        console.log('Wrote to index.html');
        break;
    }
  })
}

const nameValidator = async (input) => {
  const nameValid = /^[A-Za-z]+$/.test(input);
  if (!nameValid) {
    return 'Name must only contain letters'; 
  }
  
  return true;
};
const idValidator = async (input) => {
  const idValid = /^[0-9]+$/.test(input);
  if (!idValid) {
    return 'ID must only contain numbers'; 
  }
  return true;
};
const emailValidator = async (input) => {
  const emailValid = emailValidatorRegex.validate(input);
  if (!emailValid) {
    return 'Not a valid email address'; 
  }
  return true;
};
const officeNumberValidator = async (input) => {
  const officeNumberValid = /^[0-9]+$/.test(input);
  if (!officeNumberValid) {
    return 'Office Number must only contain numbers'; 
  }
  return true;
};

function teamManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team manager?',
      validate: nameValidator,
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter their employee ID?',
      validate: idValidator,
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter their email address',
      validate: emailValidator,
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter their office number',
      validate: officeNumberValidator,
    },
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    managerDiv += 
    `
    <div>
      <p>Name: ${manager.getName()}</p>
      <p>Role: ${manager.getRole()}</p>
      <p>ID: ${manager.getId()}</p>
      <p>Email: <a href='mailto:${manager.getEmail()}'>${manager.getEmail()}</a></p>
      <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    `;
    addMember();
  })
}



function engineer() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your engineer?',
        validate: nameValidator,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter their employee ID?',
        validate: idValidator,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter their email address',
        validate: emailValidator,
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter their GitHub username',
      },
    ])
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      engineerDiv += 
      `
      <div>
        <p>Name: ${engineer.getName()}</p>
        <p>Role: ${engineer.getRole()}</p>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href='mailto:${engineer.getEmail()}'>${engineer.getEmail()}</a></p>
        <p>GitHub: <a href='https://github.com/${engineer.getGithub()}' target='_blank'>${engineer.getGithub()}</a></p>
      </div>
      `;
      addMember();
    })
  }

  function intern() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your intern?',
        validate: nameValidator,
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter their employee ID?',
        validate: idValidator,
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter their email address',
        validate: emailValidator,
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school do they attend?',
      },
    ])
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      internDiv += 
      `
      <div>
        <p>Name: ${intern.getName()}</p>
        <p>Role: ${intern.getRole()}</p>
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
      </div>
      `;
      addMember();
    })
  }

const generateHTML = () =>
`
<!DOCTYPE html>
<html>
    <head>
        <title>My Team</title>
        <link rel="stylesheet" href="reset.css"/>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <section id="teammanager">
            <h2>Team Manager</h2>
            ${managerDiv}
            
            
        </section>

        <section id="employees">
            <section id="engineers">
                <h2>Engineers</h2>
                <section>
                  ${engineerDiv}
                </section>
                
            </section>
    
            <section id="interns">
                <h2>Interns</h2>
                <section>
                  ${internDiv}
                </section>
                
            </section>
        </section>

    </body>
</html>
`;

function init() {
  teamManager()
    .catch(function(err) {
        console.error(err);
    });
};

init();
