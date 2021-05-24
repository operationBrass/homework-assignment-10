const Engineer = require("../lib/Engineer");

describe ("Engineer Class", () =>
{
    //test stuff
    test("Return error if no arguments provided for Engineer", () => {
        //actual test
      expect(() => {new Engineer()}).toThrow();
    });
    test("Return error if atleast one argument is undefined for Engineer", () => {
      expect(() => {new Engineer("Brendan",1)}).toThrow();
    });
    test("Return Engineer object when all argurments provided", () => {
      //create a mock Engineer object to test against the returned object from Employee
      const testManager = {
        name: "Brendan",
        id: 1,
        email: "mr.brn.lewis@gmail.com",
        userName: "OperationBrass"
      };
      expect(new Engineer("Brendan",1,"mr.brn.lewis@gmail.com","OperationBrass")).toEqual(testManager);
    });
});