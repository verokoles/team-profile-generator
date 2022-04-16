const Engineer = require('./Engineer');
const Employee = require('./Employee');
const Manager = require('./Manager');

class Intern extends Employee{
    constructor(name, id, ) {
        super(name);
        this.name = name;

    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return "School";
    }

}
module.exports = Intern;