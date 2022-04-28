// const Employee = require('./Employee');
const Manager = require('./Manager');

describe("testManager", () => {
  // Test for all use cases when initializing a new Manager object
  describe("Initialization", () => {
    it("should create an object with a name, job title, employee ID, gmail address and office number if provided valid arguments", () => {
      
      const testManager = new Manager("John", "Manager", "17", "testManager@gmail.com", "2A");

      // Verify that the new object has the correct properties
      expect(testManager.personName).toEqual("John");
      expect(testManager.personJob).toEqual("Manager");
      expect(testManager.personId).toEqual("17");
      expect(testManager.personEmail).toEqual("testManager@gmail.com");
      expect(testManager.personOffice).toEqual("2A");
    });

  });

});

