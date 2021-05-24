class Employee
{
    constructor(name,id,email)
    {
        if(name == undefined || id == undefined || email == undefined)
        {
            throw Error("Invalid data");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){return this.name}
    getEmail(){ return this.email }
    getRole(){ return "Employee" }
};


module.exports = Employee;



















