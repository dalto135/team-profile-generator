const Manager = require('../lib/manager');

describe('Manager class', () => {

    describe('getRole method', () => {
        it('returns this.email', () => {
            const manager = new Manager('dalton', 1, 'gmail', 1);
            expect(manager.getRole()).toBe('Manager');
        })
    })

    describe('getOfficeNumber method', () => {
        it('returns this.officeNumber', () => {
            const manager = new Manager('dalton', 1, 'gmail', 1);
            expect(manager.getOfficeNumber()).toBe(1);
        })
    })
});
