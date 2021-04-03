//Global variables
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let managerDiv = [];
let engineerDiv = [];
let internDiv = [];

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
    {
      type: 'input',
      name: 'team',
      message: 'Would you like to add an engineer, intern, or finish building your team?',
      choices: ['Engineer', 'Intern', 'Finish building team'],
    },
  ]);
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
      {
        type: 'input',
        name: 'team',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ]);
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
      {
        type: 'input',
        name: 'team',
        message: 'Would you like to add an engineer, intern, or finish building your team?',
        choices: ["Engineer", "Intern", "Finish building team"],
      },
    ]);
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
            <p>${managerDiv}</p>
            
            
        </section>

        <section id="employees">
            <section id="engineers">
                <h2>Engineers</h2>
                <p>${engineerDiv}</p>
                
            </section>
    
            <section id="interns">
                <h2>Interns</h2>
                <p>${internDiv}</p>
                
            </section>
        </section>

    </body>
</html>
`;

// function createIntern(answers) {
  
//     if (answers.team === 'Engineer') {
//       createEngineer();
//     }
//     if (answers.team === 'Intern') {
//       createIntern(answers);
//     }
// }

function init() {


  teamManager()
    .then(function(answers) {

        let manager1 = new Manager(answers.officeNumber);
        manager1.setName(answers.name);
        manager1.setId(answers.id);
        manager1.setEmail(answers.email);

        managerDiv.push(['Name: ' + manager1.name, 'ID: ' + manager1.id, 'Email: ' + manager1.email, 'Office Number: ' + manager1.officeNumber]);
        console.log('managerDiv: ' + JSON.stringify(managerDiv));

        if (answers.team === 'Engineer') {
          engineer()
            .then(function(answers) {

              let engineer1 = new Engineer(answers.github);
              engineer1.setName(answers.name);
              engineer1.setId(answers.id);
              engineer1.setEmail(answers.email);

              engineerDiv.push(['Name: ' + engineer1.name, 'ID: ' + engineer1.id, 'Email: ' + engineer1.email, 'GitHub: ' + engineer1.github]);
              console.log('managerDiv: ' + JSON.stringify(managerDiv));
              console.log('engineerDiv: ' + JSON.stringify(engineerDiv));

            })
            .catch(function(err) {
              console.error(err);
          });
        }
        if (answers.team === 'Intern') {
          intern()
            .then(function(answers) {

              let intern1 = new Intern(answers.school);
              intern1.setName(answers.name);
              intern1.setId(answers.id);
              intern1.setEmail(answers.email);

              internDiv.push(['Name: ' + intern1.name, 'ID: ' + intern1.id, 'Email: ' + intern1.email, 'School: ' + intern1.school]);
              console.log('managerDiv: ' + JSON.stringify(managerDiv));
              console.log('internDiv: ' + JSON.stringify(internDiv));

            })
            .catch(function(err) {
              console.error(err);
            });
        }
    })
    .then(function(answers) {
      writeFileAsync('dist/index.html', generateHTML());
      console.log('Wrote to index.html');
    })
    .catch(function(err) {
        console.error(err);
    });
};

init();
