class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
        console.log(`${this.name}`);
    }

    getId() {
        console.log(`${this.id}`);
    }

    getEmail() {
        console.log(`${this.email}`);
    }
  }
  
  const temp = new Employee("Kevin", "14", "kevin@fakemail.com");
  
  console.log(temp);

  console.log(Employee);

  module.exports = Employee;
