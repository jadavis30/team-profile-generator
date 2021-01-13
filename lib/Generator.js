const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const generateHTML = require('./generateHTML');
const Intern = require("./Intern");
const Manager = require("./Manager");

function Generator() {
    
    

    Generator.prototype.initializePrompt = function() {
        getName();
        getId();
        getEmail();
        getOffice();
        getRole();
    };
}

module.exports = Generator;