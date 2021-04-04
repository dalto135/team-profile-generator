const Manager = require('../lib/manager');

describe('Employee class', () => {

    describe('getRole method', () => {
        it('returns this.email', () => {
            const manager = new Manager('dalton', 1, 'gmail', 1);
            manager.getRole();
            expect(manager.getRole()).toBe('Manager');
        })
    })

    describe('getOfficeNumber method', () => {
        it('returns this.officeNumber', () => {
            const manager = new Manager('dalton', 1, 'gmail', 1);
            manager.getOfficeNumber();
            expect(manager.officeNumber).toBe(1);
        })
    })
});
