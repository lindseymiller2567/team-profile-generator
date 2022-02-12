// team is the array of employees that were entered in the prompts 
const genTeam = team => {

    // generates manager card
    const genMan = manager => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${manager.getId()}</p>
        <a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    </div>`
    }

    // generates engineer card
    const genEng = engineer => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${engineer.getId()}</p>
        <a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a>
        <a href="https://github.com/${engineer.getGitHub()}" target="_blank">GitHub: ${engineer.getGitHub()}</a>
    </div>
    </div>`
    }

    // generates intern card
    const genInt = intern => {
        return `
    <div class="card">
    <div class="card-header">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <p>ID: ${intern.getId()}</p>
        <a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a>
        <p>School: ${intern.getSchool()}</p>
    </div>
    </div>`
    }

    const employeeCards = []

    // the filter method filters through the team array and for each role the appropriate function is called. 
    // the map method creates a new array with the content that is returned from the function. the function is called for every item in the array.
    // grabs the employeeCards array and pushes each card into it
    employeeCards.push(team.filter(employee => employee.getRole() === "Manager").map(manager => genMan(manager)))
    employeeCards.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => genEng(engineer)))
    employeeCards.push(team.filter(employee => employee.getRole() === "Intern").map(intern => genInt(intern)))

    // takes the items in the array and joins them all together to become one item
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
