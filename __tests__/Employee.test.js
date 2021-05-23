const employee = require("../lib/Employee.js");


describe ("Employee Class", () =>
{
    //test stuff
    test("Return error if no arguments provided for employee", () => {
        //actual test
      expect(() => {new employee()}).toThrow();
    });
    test("Return error if atleast one argument is undefined for employee", () => {
      expect(() => {new employee("Brendan",1)}).toThrow();
    });
    test("Return employee object when all argurments provided", () => {
      //create a mock employee object to test against the returned object from Employee

      const testEmployee = {
        name: "Brendan",
        id: 1,
        email: "mr.brn.lewis@gmail.com"
      };
      expect(new employee("Brendan",1,"mr.brn.lewis@gmail.com")).toEqual(testEmployee);
    });
});