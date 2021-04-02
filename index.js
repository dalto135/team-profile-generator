//Global variables
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeeBooty = new Employee('dalton', 1, 'gmail');
console.log(employeeBooty.getName());

const managerBooty = new Manager(412);
console.log(managerBooty.getId());

const engineerBooty = new Engineer('dalto135');
console.log(engineerBooty.getGithub());

const internBooty = new Intern('osu');
console.log(internBooty.getSchool());

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
      choices: ["Engineer", "Intern", "Finish building team"],
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

const generateHTML = (answers) =>
`
<!DOCTYPE html>
<html>
    <head>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="assets/reset.css"/>
        <link rel="stylesheet" href="assets/style.css"/>
    </head>
    <body>
        <header>
            <h1>Team Profile Generator</h1>
        </header>

        <section id="teammanager">
            <h2>Team Manager</h2>
            ${answers.teamManager}
            
            
        </section>

        <section id="employees">
            <section id="engineers">
                <h2>Engineers</h2>
                ${answers.engineer}
                
            </section>
    
            <section id="interns">
                <h2>Interns</h2>
                ${answers.intern}
                
            </section>
        </section>

        <script src="assets/index.js"></script>
    </body>
</html>
`;

function init() {


  teamManager()
    .then(function(answers) {
        // writeFileAsync('../dist/index.html', generateHTML(answers));
        let managerArray = [answers.name, answers.id, answers.email, answers.officeNumber, answers.team];
        console.log(managerArray);
        if (answers.team === 'Engineer') {
          engineer()
            .then(function(answers) {
              let engineerArray = [answers.name, answers.id, answers.email, answers.github, answers.team];
              console.log(engineerArray);
            })
        }
        if (answers.team === 'Intern') {
          intern()
            .then(function(answers) {
              let internArray = [answers.name, answers.id, answers.email, answers.school, answers.team];
              console.log(internArray);
            })
        }
    })
    .then(function() {
        // console.log('Successfully wrote to index.html');
    })
    .catch(function(err) {
        console.error(err);
    });
};

init();
