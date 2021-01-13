const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);
        this.school = school;
    }    
    getSchool() {
        inquirer
        .prompt({
            type: "input",
            name: "school",
            message: "What is the name of their college or university?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide the name of their school.");
                }
                return true;
                }, 
        })
        // destructure name from the prompt object
        .then(({ school }) => {
        this.intern = new Intern(school);

        });

    }
}    

  
  module.exports = Intern;