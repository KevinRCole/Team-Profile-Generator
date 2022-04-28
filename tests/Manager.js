const Employee = require("./Employee");

class Manager extends Employee {
  constructor(personName, personJob, personId, personEmail, personOffice) {
    
    super(personName, personJob, personId, personEmail);

    this.personOffice = personOffice;

    }
};

console.log(Manager);

module.exports = Manager;