//Global variables
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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
        break;
      case 'Intern':
        intern()
        break;
      default:
        writeFileAsync('dist/index.html', generateHTML());
        console.log('Wrote to index.html');
        break;
    }
  })
}

function teamManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your team manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter their employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter their email address',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter their office number',
    },
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    managerDiv += 
    `
    <div>
      <p>Name: ${manager.name}</p>
      <p>Role: ${manager.getRole()}</p>
      <p>ID: ${manager.id}</p>
      <p>Email: <a href='mailto:${manager.email}'>${manager.email}</a></p>
      <p>Office Number: ${manager.officeNumber}</p>
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
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter their employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter their email address',
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
        <p>Name: ${engineer.name}</p>
        <p>Role: ${engineer.getRole()}</p>
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href='mailto:${engineer.email}'>${engineer.email}</a></p>
        <p>GitHub: <a href='https://github.com/${engineer.github}' target='_blank'>${engineer.github}</a></p>
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
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter their employee ID?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter their email address',
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
        <p>Name: ${intern.name}</p>
        <p>Role: ${intern.getRole()}</p>
        <p>ID: ${intern.id}</p>
        <p>Email: <a href='mailto:${intern.email}'>${intern.email}</a></p>
        <p>School: ${intern.school}</p>
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
