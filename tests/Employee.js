var inquirer = require('inquirer');


class Employee {
   
  constructor(personName, personJob, personId, personEmail) {
      this.personName = personName;
      this.personId = personId;
      this.personEmail = personEmail;
    }
  
      //  Method that uses inquirer to prompt user for user's name
    getName() {

      inquirer.prompt([
        {
        type: "input",
        name: "personName",
        message: "What is your name?",
        },

      ])

      .then((answers) => {
        personName=answers.personName;
       
      })

    }

  }

  getName();
 
  module.exports = Employee;