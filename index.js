const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/html-template');

const employees = [];
// create questions for manager, adding engineer or intern, 
//run all question, ush info to employees[]
//write HTML
function managerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the name of the manager?",

        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is their ID?",

        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the email of the manager?",

        }
    ]).then((data) => {
        const manager = new Manager(data.managerName, data.maangerId, data.manager)
        employees.push(manager);

    })


}
// function engineerQuestions() {
//     inquirer.prompt([
//         {}
//     ])
// }
// function internQuestions() {
//     inquirer.prompt([
//         {

//         }
//     ])
// }
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Do you want to add another team member?",
            choices: ['engineer', 'intern', 'no']
            ).then(userChoice => {
                switch (userChoice.memberChoice) {
                    case "Engineer":
                        addEngineer();
                        break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        buildTeam();
                }
            });
}
function builtTeam() {
    fs.writeFileSync()
generateHTML(employees)
}