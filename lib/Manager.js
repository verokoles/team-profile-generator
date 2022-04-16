const Intern = require('./Intern');
const Engineer = require('./Engineer');
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getRole() {
        return "Manager";
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getofficeNumber() {
       return this.officeNumber;
    }
}

module.exports = Manager;