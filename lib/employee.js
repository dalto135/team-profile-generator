class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }

    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setEmail(email) {
        this.email = email;
    }
}

module.exports = Employee;
