const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./src/page-template');

const employees = []

// function to initialize app 
function managerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?"
        },
        {
            type: 'number',
            name: 'managerId',
            message: "What is the team manager's id?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?"
        },
        {
            type: 'number',
            name: 'managerOfficeNum',
            message: "What is the team manager's office number?"
        }
    ])
}

function addTeamMember() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        }
    ])
        .then(answers => {
            if (answers.teamMember === 'Engineer') {
                engineerQuestions()
                    .then(answers => {
                        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
                        employees.push(engineer)
                        addTeamMember()
                    })

            } else if (answers.teamMember === "Intern") {
                internQuestions()
                    .then(answers => {
                        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
                        employees.push(intern)
                        addTeamMember()
                    })

            } else {
                console.log("done with adding members")
                console.log(employees)
                createTeam()
            }
        })
}

function engineerQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?",
        },
        {
            type: 'number',
            name: 'engineerId',
            message: "What is your engineer's id?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?"
        }
    ])
}

function internQuestions() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?",
        },
        {
            type: 'number',
            name: 'internId',
            message: "What is your intern's id?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?"
        }
    ])
}

// function call to initialize app 
managerQuestions()
    .then(answers => {
        // create new manager object
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)
        employees.push(manager)
    })
    // function call to prompt user to add team members 
    .then(addTeamMember)


function createTeam() {
    fs.writeFile("./dist/team-profile.html", generatePage(employees), (err) => {
        if (err) throw err
    })
}