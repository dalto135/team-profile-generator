const Employee = require('../lib/employee');

describe('Employee class', () => {

    describe('getName method', () => {
        it('returns this.name', () => {
            const employee1 = new Employee('dalton', 1, 'gmail');
            employee1.getName();
            expect('dalton');
        });
    });

    describe('getId method', () => {
        it('returns this.id', () => {
            const employee2 = new Employee('dalton', 1, 'gmail');
            employee2.getId();
            expect(1);
        });
    });

    describe('getEmail method', () => {
        it('returns this.email', () => {
            const employee3 = new Employee('dalton', 1, 'gmail');
            employee3.getEmail();
            expect('gmail');
        })
    })
});