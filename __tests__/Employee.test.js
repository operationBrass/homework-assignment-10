const Employee = require("../lib/Employee");

describe ("Employee Class", () =>
{
    test("Return error if no arguments provided for employee", () => {
      expect(() => {new Employee()}).toThrow("Invalid data");
    });
    test("Return error if atleast one argument is undefined for employee", () => {
      expect(() => {new Employee("Brendan",1)}).toThrow("Invalid data");
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