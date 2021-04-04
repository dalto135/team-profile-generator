const Engineer = require('../lib/engineer');

describe('Engineer class', () => {

    describe('getRole method', () => {
        it('returns role', () => {
            const engineer = new Engineer('dalton', 1, 'gmail', 'github');
            engineer.getRole();
            expect(engineer.getRole()).toBe('Engineer');
        })
    })

    describe('getGithub method', () => {
        it('returns this.github', () => {
            const engineer = new Engineer('dalton', 1, 'gmail', 'github');
            engineer.getGithub();
            expect(engineer.github).toBe('github');
        })
    })
});
