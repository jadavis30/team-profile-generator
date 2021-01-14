const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name = '', id = '', email = '', school = '') {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
        this.nameQuestion = "What is the intern's name?";
        this.idQuestion = "What is the intern's ID?";
        this.emailQuestion = "What is the intern's e-mail?";
    }    
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }

    getRole() {
        return this;
    }    
}    

  
  module.exports = Intern;