const Employee = require('./Employee');

describe("Employee", () => {
    describe("Initialization", () => {
    it("should return an object with new employee properties that were input as parameters",
    () => {
        const tempEmployee = new Employee ("Bob", "17", "bob@fakemail.com");

        expect(tempEmployee.name).toEqual("Bob");
        expect(tempEmployee.id).toEqual("17");
        expect(tempEmployee.email).toEqual("bob@fakemail.com");

        
    });
    
    // This isn't working
    describe('getName', () => {
        it('should return the name', () => {
          expect(testEmployee.getName()).toBe('Bob');
          }) });
    
    
    
      


});

});


