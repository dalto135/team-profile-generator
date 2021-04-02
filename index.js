//Global variables
const Employee = require('./lib/employee');
// const Manager = require('lib/manager');
// const Engineer = require('lib/engineer');
// const Intern = require('lib/intern');
const employeeBooty = new Employee('dalton', 1, 'gmail');

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const Employee = require('./lib/employee');

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
      name: 'office number',
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
        name: 'github',
        message: 'Enter their GitHub username',
      },
    ]);
  }

  function intern() {
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
        name: 'school',
        message: 'What school do they attend?',
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
            <div>
                <h2>Info</h2>
            </div>
            
            
        </section>

        <section id="employees">
            <section id="engineers">
                <h2>Engineers</h2>
                <div>
                    <p>Info</p>
                </div>
                
            </section>
    
            <section id="interns">
                <h2>Interns</h2>
                <div>
                    <p>Info</p>
                </div>
                
            </section>
        </section>

        <script src="assets/index.js"></script>
    </body>
</html>
`;

function init() {
  promptUser()
    .then(function(answers) {
        writeFileAsync('../index.html', generateHTML(answers));
    })
    .then(function() {
        console.log('Successfully wrote to README.md');
    })
    .catch(function(err) {
        console.error(err);
    });
};

init();
