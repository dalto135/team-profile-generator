const Intern = require('../lib/intern');

describe('Employee class', () => {

    describe('getRole method', () => {
        it('returns role', () => {
            const intern = new Intern('dalton', 1, 'gmail', 'osu');
            intern.getRole();
            expect(intern.getRole()).toBe('Intern');
        })
    })

    describe('getSchool method', () => {
        it('returns this.school', () => {
            const intern = new Intern('dalton', 1, 'gmail', 'osu');
            intern.getSchool();
            expect(intern.school).toBe('osu');
        })
    })
});
