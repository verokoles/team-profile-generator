const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');


class Engineer extends Employee{
    constructor(name, id, email, githubUser) {
        super(name);
        this.name = name;
        this.githubUser = githubUser;

    }
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.githubUser;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
}
module.exports = Engineer;