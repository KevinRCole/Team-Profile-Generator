// const Employee = require('./Employee');
const Engineer = require('./Engineer');

describe("testEngineer", () => {
  // Test for all use cases when initializing a new Manager object
  describe("Initialization", () => {
    it("should create an object with a name, job title, employee ID, gmail address, and github username if provided valid arguments", () => {
      
      const testEngineer = new Engineer("Sarah", "Engineer", "5", "Sarah@gmail.com", "SarahGithub");

      // Verify that the new object has the correct properties
      expect(testEngineer.personName).toEqual("Sarah");
      expect(testEngineer.personJob).toEqual("Engineer");
      expect(testEngineer.personId).toEqual("5");
      expect(testEngineer.personEmail).toEqual("Sarah@gmail.com");
      expect(testEngineer.personGithub).toEqual("SarahGithub");
    });

  });

});