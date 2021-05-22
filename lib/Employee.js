class Employee
{
    constructor(name,id,email)
    {
        if(name == undefined && id == undefined && email == undefined){
            return Error;
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){};
    getId(){};
    getEmail(){};
    getRole(){};
};

module.exports = Employee;



















