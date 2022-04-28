// const Employee = require('./Employee');
const Intern = require('./Intern');

describe("testIntern", () => {
  // Test for all use cases when initializing a new Manager object
  describe("Initialization", () => {
    it("should create an object with a name, job title, employee ID, gmail address, and school if provided valid arguments", () => {
      
      const testIntern = new Intern("Laura", "Intern", "29", "Laura@gmail.com", "University of Washington");

      // Verify that the new object has the correct properties
      expect(testIntern.personName).toEqual("Laura");
      expect(testIntern.personJob).toEqual("Intern");
      expect(testIntern.personId).toEqual("29");
      expect(testIntern.personEmail).toEqual("Laura@gmail.com");
      expect(testIntern.personSchool).toEqual("University of Washington");
    });

  });

});