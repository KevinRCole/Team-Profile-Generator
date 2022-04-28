class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(personName, personJob, personId, personEmail) {
      this.personName = personName;
      this.personJob = personJob;
      this.personId = personId;
      this.personEmail = personEmail;
    }
  
    printInfo() {
      console.log(`Person's name: ${this.personName}`);
      console.log(`Person's job: ${this.personJob}`);
      console.log(`Person's ID: ${this.personId}`);
      console.log(`Person's email: ${this.personEmail}`)
    }
  }
  

  // const testEmployee = new Employee("Bob",  "Manager", "34", "bob@gmail.com");
  
  // testEmployee.printInfo();

  // console.log(testEmployee);

  // console.log (new Employee("Bob",  "Manager", "34", "bob@gmail.com"));

  module.exports = Employee;