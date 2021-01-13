const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);
        this.github = github;
    }    
    getGithub() {
        inquirer
        .prompt({
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide their username.");
                }
                return true;
                }, 
        })
        // destructure name from the prompt object
        .then(({ github }) => {
        this.engineer = new Engineer(github);

        });

    }
}    
 
module.exports = Engineer;