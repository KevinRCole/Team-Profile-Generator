const Employee = require("./Employee");

class Intern extends Employee {
  constructor(personName, personJob, personId, personEmail, personSchool) {
    
    super(personName, personJob, personId, personEmail);

    this.personSchool = personSchool;

    }
};

console.log(Intern);

module.exports = Intern;