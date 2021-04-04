const Employee = require('../lib/employee');

describe('Employee class', () => {

    describe('getName method', () => {
        it('returns this.name', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            employee.getName();
            expect(this.name).toBe('dalton');
        });
    });

    describe('getId method', () => {
        it('returns this.id', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            employee.getId();
            expect(this.id).toBe(1);
        });
    });

    describe('getEmail method', () => {
        it('returns this.email', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            employee.getEmail();
            expect(this.email).toBe('gmail');
        })
    })
    describe('getRole method', () => {
        it('returns role', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            employee.getRole();
            expect(employee.getRole()).toBe('Employee');
        })
    })
});
