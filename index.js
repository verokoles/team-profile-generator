const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer =require('./lib/Engineer');
const Intern =require('./lib/Intern');
const generateHTML =require('./src/html-template');

const employees = [];

function managerQuestions() {
inquirer.prompt([
    {
        type: 'input',
        message: '',
        name: '',
    },
    {

    },
    {

    },
    {

    }
])
}