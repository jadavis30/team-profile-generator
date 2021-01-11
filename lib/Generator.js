const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

function Generator() {
    Generator.prototype.promptUser = function() {
    
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })
            // destructure name from the prompt object
            .then(({ name }) => {
            this.employee = new Employee(name);
    }
}