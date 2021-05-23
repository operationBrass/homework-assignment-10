const Manager = require("../lib/Manager");

describe ("Employee Class", () =>
{
    //test stuff
    test("Return error if no arguments provided for manager", () => {
        //actual test
      expect(() => {new Manager()}).toThrow();
    });
    test("Return error if atleast one argument is undefined for manager", () => {
      expect(() => {new Manager("Brendan",1)}).toThrow();
    });
    test("Return manager object when all argurments provided", () => {
      //create a mock engineer object to test against the returned object from Employee

      const testManager = {
        name: "Brendan",
        id: 1,
        email: "mr.brn.lewis@gmail.com",
        officeNumber: 15
      };
      expect(new Manager("Brendan",1,"mr.brn.lewis@gmail.com",15)).toEqual(testManager);
    });
});