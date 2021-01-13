const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateHTML = require("./lib/generateHTML");

const questions = [
    {    
        type: "input",
        name: "team",
        message:"What is the name of your team or company?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a name for your team or company.");
            }
            return true;
            },
        },
        {    
        type: "input",
        name: "manager",
        message:"What is the name of the team's manager?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide their name.");
            }
            return true;
            },
        },
        {    
        type: "input",
        name: "id",
        message:"What is the manager's employee ID?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid number.");
            }
            return true;
            },
        },
        {    
        type: "input",
        name: "email",
        message:"What is the manager's e-mail address?",
        validate: function (answer) {
            if (answer.length < 1)  {
                return console.log("Please provide a valid e-mail.");
            }
            return true;
            },
        },
        {    
        type: "input",
        name: "office",
        message:"What is the manager's office number?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide an office number.");
            }
            return true;
            },
        },
        {    
        type: "list",
        name: "build",
        message:"Build your team by selecting 'Engineer' or 'Intern' to add members; select 'Finalize' to generate the page!",
        choices: ["Engineer", "Intern", "Finalize"]
        },
        {    
        type: "input",
        name: "engineername",
        message:"What is the name of this engineer?",
        when: (answers) => answers.build ==="Engineer",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide the engineer's name.");
            }
            return true;
            },
        },
        {    
            type: "input",
            name: "engineerid",
            message:"What is the engineer's id?",
            when: (answers) => answers.engineername === answers.engineername,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide their employee ID.");
                }
                return true;
                },
            },
        {
            type: "input",
            name: "engineeremail",
            message:"What is their e-mail?",
            when: (answers) => answers.engineerid === answers.engineerid,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide their e-mail.");
                }
                return true;
                },
        },
        {    
            type: "input",
            name: "github",
            message:"What is your GitHub username?",
            when: (answers) => answers.engineeremail === answers.engineeremail,
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please provide your username.");
                }
                return true;
                },
        },
        {    
            type: "list",
            name: "build",
            message:"Build your team by selecting 'Engineer' or 'Intern' to add members; select 'Finalize' to generate the page!",
            choices: ["Engineer", "Intern", "Finalize"],
            when: (answers) => answers.github === answers.github,
            },
     
]


const internQuestions = [
    {    
        type: "input",
        name: "name",
        message:"What is the name of this intern?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide the intern's name.");
            }
            return true;
            },
        },
    {    
        type: "input",
        name: "email",
        message:"What is their e-mail?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide their e-mail.");
            }
            return true;
            },
        },
    {    
        type: "input",
        name: "school",
        message:"Which university or program do you attend?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide your university's or program's name.");
            }
            return true;
            },
        }
]

//Write HTML file
function writeToFile(fileName, data) {   
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        
        console.log("HTML complete! Check index.html to see its output.");
    });
};    
        
const writeFileAsync = util.promisify(writeToFile);

// Initialize app
async function init() {
    try {
        //Inquirer ?s
        const userResponses = await inquirer.prompt(questions);
        //Pass Inquirer ?s to generateHTML
        const html = generateHTML(userResponses);
        //Write html to file
        await writeFileAsync("index.html", html);
    } catch (error) {
        console.log(error);
    }    
}; 

// Function call to initialize app
init();