const Engineer = require('./Engineer');
const Employee = require('./Employee');
const Manager = require('./Manager');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }

}
module.exports = Intern;