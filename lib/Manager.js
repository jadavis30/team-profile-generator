const Manager = require('../lib/Manager');

class Manager extends Character {
    constructor(name = '') {
        super();
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    }   
}
  
  module.exports = Manager;