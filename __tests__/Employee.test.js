const Employee = require("../lib/Employee.js");

require("../lib/Employee.js");

describe ("Employee Class", () =>{
    //test stuff
    test("Return error if no arguments provided for employee", () => {
        //actual test

        expect(new Employee()).toEqual(Error);
    });
});