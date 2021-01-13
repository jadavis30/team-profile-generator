const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);
        this.github = github;
    }    
    getGithub() {
        let profile = input(userResponses.github)
        //concatenate answer with url
        githubURL = "https://github.com/" + profile

        return {
            username: this.github
        };

    }
}    
 
module.exports = Engineer;