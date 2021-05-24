//import modules for employee types
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Report = require("./createReport");

//node imports
const inquirer = require('inquirer');
const fs = require('fs');

//global varibles
const objArray = [];

// hold list of questions as array of objects

const managerQ = 
[{
    type: "input", 
    name:"name", 
    message:"Team Managers Name:",
},
{
    type: "input", 
    name:"id", 
    message:"Employee ID:",
},                   
{
    type: "input", 
    name:"email", 
    message:"Email Address:"
},
{
    type: "input", 
    name:"officeNum", 
    message:"Office Number:",
}];

const subMenuQ =
[{ 
    // user selection for additional employee creation... add seperator then exit choice
    type: "list", 
    name:"options", 
    message:"Create new team member?", 
    choices: ["Create Engineer","Create Intern", new inquirer.Separator(), "Exit"]
}];

const internQ = [{
    type: "input", 
    name:"name", 
    message:"Interns Name:",
},
{
    type: "input", 
    name:"id", 
    message:"Employee ID:",
},                   
{
    type: "input", 
    name:"email", 
    message:"Email Address:"
},
{
    type: "input", 
    name:"school", 
    message:"Attending School:",
}]

const engineerQ = [{
    type: "input", 
    name:"name", 
    message:"Engineers Name:",
},
{
    type: "input", 
    name:"id", 
    message:"Employee ID:",
},                   
{
    type: "input", 
    name:"email", 
    message:"Email Address:"
},
{
    type: "input", 
    name:"github", 
    message:"Github Username:",
}];

// begin application

startSeq();

// starting function to kick things off
function startSeq() {
    inquirer.prompt(managerQ)
    .then(answers => 
        {
            objArray.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum));
            subMenu();
        })
    .catch(error => {
        console.log("error",error);
    });
}

function subMenu()
{
    inquirer.prompt(subMenuQ)
    .then(answers => 
        {
            switch (answers.options)
            {
                case "Create Intern":
                internMenu();
                break;
                case "Create Engineer":
                engineerMenu();
                break;
                default:
                Report(answers)
                console.log(objArray);
            }
        })
    .catch(error => {
        console.log("error",error);
    });

}

function internMenu() 
{
    inquirer.prompt(internQ)

    .then(answers => 
    {
        objArray.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        subMenu();
    })
    .catch(error => 
    {
        console.log("error",error);
    });
}
function engineerMenu()
{
    inquirer.prompt(engineerQ)
    .then(answers => 
        {
            objArray.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
            subMenu();
        })
    .catch(error => {
        console.log("error",error);
    });
}
