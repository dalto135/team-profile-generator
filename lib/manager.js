const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super('name', 0, 'email');
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
