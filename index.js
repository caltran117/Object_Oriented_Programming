const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

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