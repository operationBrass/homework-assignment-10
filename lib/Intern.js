const Employee = require("../lib/Employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        
        if (userName == undefined) 
        {
            return Error();
        }
        
        this.school = school;
    };
    
    getSchool(){return this.school};
    getRole(){return "Intern"};
    
};

module.exports = Intern;