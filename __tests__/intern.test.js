const Intern = require('../lib/intern');

describe('Intern class', () => {

    describe('getRole method', () => {
        it('returns role', () => {
            const intern = new Intern('dalton', 1, 'gmail', 'osu');
            expect(intern.getRole()).toBe('Intern');
        })
    })

    describe('getSchool method', () => {
        it('returns this.school', () => {
            const intern = new Intern('dalton', 1, 'gmail', 'osu');
            expect(intern.getSchool()).toBe('osu');
        })
    })
});
