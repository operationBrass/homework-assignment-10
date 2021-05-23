const Employee = require("../lib/Employee");

describe ("Employee Class", () =>
{
    //test stuff
    test("Return error if no arguments provided for employee", () => {
        //actual test
      expect(() => {new Employee()}).toThrow();
    });
    test("Return error if atleast one argument is undefined for employee", () => {
      expect(() => {new Employee("Brendan",1)}).toThrow();
    });
    test("Return employee object when all argurments provided", () => {
      //create a mock employee object to test against the returned object from Employee

      const testEmployee = {
        name: "Brendan",
        id: 1,
        email: "mr.brn.lewis@gmail.com",
      };
      expect(new Employee("Brendan",1,"mr.brn.lewis@gmail.com")).toEqual(testEmployee);
    });
});