const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '', id = '', email = '', office = '') {
        super(name, id, email);
        this.office = office;
        this.role = "Manager";
        this.nameQuestion = "What is your name?";
        this.idQuestion = "What is your ID?";
        this.emailQuestion = "What is your e-mail?";
        
    }    
    getOffice() {
        return this.office;
    }
    setOffice(office) {
        this.office = office;
    }
    getRole() {
        return this;
    }    
}    

  
  module.exports = Manager;