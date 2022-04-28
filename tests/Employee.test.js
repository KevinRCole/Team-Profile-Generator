const Employee = require('./Employee');

describe("testEmployee", () => {
  // Test for all use cases when initializing a new Employee object
  describe("Initialization", () => {
    it("should create an object with a name, job title, employee ID, and gmail address if provided valid arguments", () => {
      
      const testEmployee= new Employee("Bob", "Manager", "11", "testEmployee@gmail.com");

      // Verify that the new object has the correct properties
      expect(testEmployee.personName).toEqual("Bob");
      expect(testEmployee.personJob).toEqual("Manager");
      expect(testEmployee.personId).toEqual("11");
      expect(testEmployee.personEmail).toEqual("testEmployee@gmail.com");
    });

  });

});
