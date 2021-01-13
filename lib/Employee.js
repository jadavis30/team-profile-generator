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
                message: "What is the employee's name?"
            })
            // destructure name from the prompt object
            .then(({ name }) => {
            this.player = new Player(name);
    
            this.startNewBattle();
            });    
    }

    getId(){}

    getEmail(){}

    getRole() {

        return Employee;

    }    
}

  
module.exports = Employee;