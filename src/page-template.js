// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
// const Employee = require('./lib/Employee')

const genTeam = team => {

    const genMan = manager => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>${manager.getId()}</p>
        <p>${manager.getEmail()}</p>
        <p>Office/Github/School</p>
    </div>
    </div>`
    }

    const genEng = engineer => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID</p>
        <p>Email</p>
        <p>Office/Github/School</p>
    </div>
    </div>`
    }

    const genInt = intern => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID</p>
        <p>Email</p>
        <p>Office/Github/School</p>
    </div>
    </div>`
    }

const employeeCards = []

// grabs the employeeCards array and pushes each card into it
employeeCards.push(team.filter(employee => employee.getRole() === "Manager").map(manager => genMan(manager)))
employeeCards.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => genEng(engineer)))
employeeCards.push(team.filter(employee => employee.getRole() === "Intern").map(intern => genInt(intern)))

return employeeCards.join("")
}


module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <header>
            <div class="header">
                <h1>My Team</h1>
            </div>
        </header>
        <main class="main-content">
           ${genTeam(templateData)}
        </main>
    </body>
    
    </html>
    `;
};
