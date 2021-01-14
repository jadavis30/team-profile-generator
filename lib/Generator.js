const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const generateHTML = require('./generateHTML');
const Intern = require("./Intern");
const Manager = require("./Manager");
const fs =require("fs");

class Generator {
    constructor() {
        this.currentEmployee;
        this.employees = [];

        Generator.prototype.initializePrompt = function() {
            let manager = new Manager();
            this.currentEmployee = manager;
            this.employees.push(manager);
            this.getEmployeeName(manager);
        };

        Generator.prototype.getEmployeeName = function() {
            inquirer
                .prompt({
                    type: "input",
                    name: "name",
                    message: this.currentEmployee.nameQuestion,
                    validate: function (answer) {
                        if (answer.length < 1) {
                            return console.log("Please provide their name.");
                        }
                        return true;
                        }, 
                })
                // destructure name from the prompt object
                .then(({ name }) => {
                    this.currentEmployee.setName(name);

                    this.getEmployeeId();
                });
        }

        Generator.prototype.getEmployeeId = function() {
            inquirer
                .prompt({
                    type: "input",
                    name: "id",
                    message: this.currentEmployee.idQuestion,
                    validate: function (answer) {
                        if (answer.length < 1) {
                            return console.log("Please provide their ID number.");
                        }
                        return true;
                        }, 
                })
                // destructure name from the prompt object
                .then(({ id }) => {
                    this.currentEmployee.setId(id);

                    this.getEmployeeEmail();
                });
        }

        Generator.prototype.getEmployeeEmail = function() {
            inquirer
                .prompt({
                    type: "input",
                    name: "email",
                    message: this.currentEmployee.emailQuestion,
                    validate: function (answer) {
                        if (answer.length < 1) {
                            return console.log("Please provide their e-mail address.");
                        }
                        return true;
                        }, 
                })
                // destructure name from the prompt object
                .then(({ email }) => {
                this.currentEmployee.setEmail(email);
                switch(this.currentEmployee.role) {
                    case "Engineer":
                      this.getEmployeeGithub();
                      break;
                    case "Intern":
                      this.getEmployeeSchool();
                      break;
                    case "Manager":
                        this.getOfficeNumber();
                        break;
                    default: 
                      // code block
                  }
                
                });
        }

        Generator.prototype.getOfficeNumber = function() {
            inquirer
                .prompt({
                    type: "input",
                    name: "office",
                    message: "What is your office number?",
                    validate: function (answer) {
                        if (answer.length < 1) {
                            return console.log("Please provide the number for their office.");
                        }
                        return true;
                        }, 
                })
                // destructure name from the prompt object
                .then(({ office }) => {
                this.currentEmployee.setOffice(office);
        
                this.getEmployeeRole();
                });    
        }

        Generator.prototype.getEmployeeRole = function() {
            inquirer
                .prompt({
                    type: "list",
                    name: "role",
                    message: "What is the employee's role?",
                    choices: ["Engineer", "Intern", "Finalize Team"]
                })
                // destructure name from the prompt object
                .then(({ role }) => {
                    this.createNewRole(role);
                });
        }

        Generator.prototype.getEmployeeGithub = function() {
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
                this.currentEmployee.setGithub(github);

                this.getEmployeeRole();
                });
        }

        Generator.prototype.getEmployeeSchool = function() {
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
                this.currentEmployee.setSchool(school);

                this.getEmployeeRole();
                });
        }
        
        Generator.prototype.createNewRole = function(role) {
            let employee;
            switch(role) {
                case "Engineer":
                  employee = new Engineer();
                  
                  break;

                case "Intern":
                  employee = new Intern();
                  break;

                default:
                    this.writeToFile(); 
                  return;
              }
              this.currentEmployee = employee;
              this.employees.push(employee);
              this.getEmployeeName();  
        }

        Generator.prototype.writeToFile = function() {
            const html = generateHTML(this.employees);

                //writing html to file
                fs.writeFile("index.html", html, function(err) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("HTML generated to index.html");
                    }
                    
                });
            };
    }
       
}

module.exports = Generator;