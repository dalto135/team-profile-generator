const Employee = require('../lib/employee');

describe('Employee class', () => {

    describe('getName method', () => {
        it('returns this.name', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            expect(employee.getName()).toBe('dalton');
        });
    });

    describe('getId method', () => {
        it('returns this.id', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            expect(employee.getId()).toBe(1);
        });
    });

    describe('getEmail method', () => {
        it('returns this.email', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            expect(employee.getEmail()).toBe('gmail');
        })
    })
    describe('getRole method', () => {
        it('returns role', () => {
            const employee = new Employee('dalton', 1, 'gmail');
            expect(employee.getRole()).toBe('Employee');
        })
    })
});
