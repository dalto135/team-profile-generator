//Global variables
// const Employee = require('./lib/employee');
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
    // managerDiv += JSON.stringify(manager);
    managerDiv += `<p>Name: ${manager.name}, ID: ${manager.id}, Email: ${manager.email}, Office Number: ${manager.officeNumber}</p>`;
    console.log('managerDiv: ' + managerDiv);
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
      // engineerDiv += JSON.stringify(engineer);
      engineerDiv += `<p>Name: ${engineer.name}, ID: ${engineer.id}, Email: ${engineer.email}, GitHub: ${engineer.github}</p>`;
      console.log('engineerDiv: ' + engineerDiv);
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
      // internDiv += JSON.stringify(intern);
      internDiv += `<p>Name: ${intern.name}, ID: ${intern.id}, Email: ${intern.email}, School: ${intern.school}</p>`;
      console.log('internDiv: ' + internDiv);
      addMember();
    })
  }

const generateHTML = () =>
`
<!DOCTYPE html>
<html>
    <head>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="reset.css"/>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>

        <section id="teammanager">
            <h2>Team Manager</h2>
            ${managerDiv}
            
            
        </section>

        <section id="employees">
            <section id="engineers">
                <h2>Engineers</h2>
                ${engineerDiv}
                
            </section>
    
            <section id="interns">
                <h2>Interns</h2>
                ${internDiv}
                
            </section>
        </section>

    </body>
</html>
`;

function init() {


  teamManager()
    .then(function(answers) {
      // console.log('answers: ' + answers);
    })
    .then(function(answers) {
      
      
    })
    .catch(function(err) {
        console.error(err);
    });
};

init();
