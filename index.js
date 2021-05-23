//import modules for employee types
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");

//node imports
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");

//global varibles
let objArray = new Array();


// setup questions for user to enter team manager detials

const questions = [{
    
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
},
{ // user selection for additional employee creation... add seperator then exit choice
    type: "list", 
    name:"subMenu", 
    message:"Add new team members?", 
    choices: ["Create Engineer","Create Intern", new inquirer.Separator(), "Exit"]
}];

startSeq();

// starting function to kick things off
function startSeq()
{
inquirer.prompt(questions)
    .then(answers =>
{

    // send call to create a manager object
    objArray.push(genMan(answers.name,answers.id,answers.email,answers.officeNum));
    console.log(objArray);

    switch (answers.subMenu)
    {
        case "Exit":
        break;
        case "Engineer":
        break;
        case "Intern":
        break;
    }
});
}

//create a NEW manager
function genMan(name,id,email,officeNum)
{
 objArray.push(new Manager(name,id,email,officeNum));
}

//create NEW engineer

function genEng(name,id,email,gitUser)
{
    objArray.push(new Engineer(name,id,email,gitUser));
}

//create a NEW intern
function genIntern(name,id,email,school)
{
    objArray.push(new Intern(name,id,email,gitUser));
}
