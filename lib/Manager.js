const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '', id = '', email = '', office = '') {
        super(name, id, email);
        this.office = office;
    }    
    getOffice() {
        inquirer
        .prompt({
            type: "input",
            name: "office",
            message: "What is their office number?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide the number for their office.");
                }
                return true;
                }, 
        })
        // destructure name from the prompt object
        .then(({ office }) => {
        this.manager = new Manager(office);

        });
    }
}    

  
  module.exports = Manager;