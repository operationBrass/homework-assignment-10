const Employee = require("../lib/Employee");

class Manager extends Employee
{
    constructor(name,id,email,officeNumber)
    {
        super(name,id,email)

        if(officeNumber == undefined )
        {
            return Error();
        }

        this.officeNumber = officeNumber;
    };
    getRole() {return "Manager"};
};

module.exports = Manager;