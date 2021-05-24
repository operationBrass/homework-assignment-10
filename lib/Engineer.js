const Employee = require("../lib/Employee");

class Engineer extends Employee {

    constructor(name, id, email, userName)
    {
        super(name, id, email);

        if (userName == undefined) 
        {
            return Error();
        }
        this.userName = userName;
    };

    getGithub(){return this.userName};
    getRole(){ return "Engineer" };
}

module.exports = Engineer;