const Intern = require("../lib/Intern");

describe ("Intern Class", () =>
{
    //test stuff
    test("Return error if no arguments provided for Intern", () => {
        //actual test
      expect(() => {new Intern()}).toThrow();
    });
    test("Return error if atleast one argument is undefined for Intern", () => {
      expect(() => {new Intern("Brendan",1)}).toThrow();
    });
    test("Return Intern object when all argurments provided", () => {
      //create a mock Intern object to test against the returned object from Employee

      const testManager = {
        name: "Brendan",
        id: 1,
        email: "mr.brn.lewis@gmail.com",
        school: "Yale"
      };
      expect(new Intern("Brendan",1,"mr.brn.lewis@gmail.com","Yale")).toEqual(testManager);
    });
});