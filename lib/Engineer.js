const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
        this.nameQuestion = "What is the engineer's name?";
        this.idQuestion = "What is the engineer's ID?";
        this.emailQuestion = "What is the engineer's e-mail?";
    }    
    getGithub() {
        return this.github;

    }
    setGithub(github) {
        this.github = github;
    }
    getRole() {
        return this;
    }    
}    
 
module.exports = Engineer;