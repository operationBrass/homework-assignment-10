const Employee = require("../lib/Employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super(name, id, email);
        
        if (school == undefined) 
        {
            return Error();
        }

        this.school = school;
    };
    
    getSchool(){return this.school};
    getRole(){return "Intern"};
    
};

module.exports = Intern;