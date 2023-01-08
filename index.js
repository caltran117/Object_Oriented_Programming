const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const fs = require("fs")

let team = []

function manager (){
    inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message:"what is the manager's name?"
        }
        ,
        {
            name: "id",
            type: "input",
            message:"what is the manager's ID?"
        }
        ,
        {
            name: "email",
            type: "input",
            message:"what is the manager's email?"
        },
        {
            name: "officeNumber",
            type: "input",
            message:"what is the manager's office number?"
        }
    ]) 
    .then(answers=>{
        let employee = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employee.special=answers.officeNumber
        team.push(employee)
        domore ()
    })
    
}

function intern (){
    inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message:"what is the intern's name?"
        }
        ,
        {
            name: "id",
            type: "input",
            message:"what is the intern's ID?"
        }
        ,
        {
            name: "email",
            type: "input",
            message:"what is the intern's email?"
        },
        {
            name: "school",
            type: "input",
            message:"what is the intern's school?"
        }
    ]) 
    .then(answers=>{
        let employee = new Intern(answers.name, answers.id, answers.email, answers.school)
        employee.special=answers.school
        team.push(employee)
        domore ()
    })
    
}

function engineer (){
    inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message:"what is the engineer's name?"
        }
        ,
        {
            name: "id",
            type: "input",
            message:"what is the engineer's ID?"
        }
        ,
        {
            name: "email",
            type: "input",
            message:"what is the engineer's email?"
        },
        {
            name: "gitHub",
            type: "input",
            message:"what is the engineer's gitHub?"
        }
    ]) 
    .then(answers=>{
        let employee = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
        employee.special=answers.gitHub
        team.push(employee)
        domore ()
    })
    
}

function domore () {
    inquirer.prompt ({
        name: "next",
        type: "list",
        message: "what would want to do next?",

        choices: ["Add a engineer", "Add a Intern", "Finished"]
    })
    .then(answers=>{
        if(answers.next=="Add a engineer"){
            engineer()
        } else if (answers.next=="Add a Intern"){
            intern()
        } else {
            finished()
        }
    })
}

function finished () {
    fs.writeFileSync("team.html",`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<header>
    <center>My Team</center>
</header>

<body>
    `)
    for (let i = 0; i < team.length; i++) {
        fs.appendFileSync("team.html",`
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${team[i].getRole()}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${team[i].name}</h6>
            <p class="card-text">${team[i].id}</p>
            <a href="mailto:email" class="card-link">${team[i].email}</a>
            <a href="#" class="card-link">${team[i].special}</a>
        </div>
    </div>
        `)
    }
fs.appendFileSync("team.html",`
</body>

</html>
`)

}

manager()

