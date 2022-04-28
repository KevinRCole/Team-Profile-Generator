const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(personName, personJob, personId, personEmail, personGithub) {
    
    super(personName, personJob, personId, personEmail);

    this.personGithub = personGithub;

    }
};

console.log(Engineer);

module.exports = Engineer;