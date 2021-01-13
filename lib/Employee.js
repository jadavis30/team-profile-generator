const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }    
    getName(){
        inquirer
            .prompt({
                type: "input",
                name: "name",
                message: "What is the employee's name?",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Please provide their name.");
                    }
                    return true;
                    }, 
            })
            // destructure name from the prompt object
            .then(({ name }) => {
            this.employee = new Employee(name);
    
            //this.functionGoesHere(); will use to call next question?
            });    
    }

    getId(){
        inquirer
            .prompt({
                type: "input",
                name: "id",
                message: "What is the employee's ID?",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Please provide their ID number.");
                    }
                    return true;
                    }, 
            })
            // destructure name from the prompt object
            .then(({ id }) => {
            this.employee = new Employee(id);
    
            //this.functionGoesHere(); will use to call next question?
            });
    }

    getEmail(){
        inquirer
            .prompt({
                type: "input",
                name: "email",
                message: "What is the employee's email?",
                validate: function (answer) {
                    if (answer.length < 1) {
                        return console.log("Please provide their e-mail address.");
                    }
                    return true;
                    }, 
            })
            // destructure name from the prompt object
            .then(({ email }) => {
            this.employee = new Employee(email);
    
            //this.functionGoesHere(); will use to call next question?
            });
    }

    getRole() {
        inquirer
        .prompt({
            type: "list",
            name: "role",
            message: "What is the employee's role?",
            choices: ["Engineer, Intern"]
        })
        // destructure name from the prompt object
        .then(({ role }) => {
        this.employee = new Employee(role);

        //this.functionGoesHere(); will use to call next question?
        });
        return Employee;

    }    
}

  
module.exports = Employee;