const Engineer = require('../lib/engineer');

describe('Engineer class', () => {

    describe('getRole method', () => {
        it('returns role', () => {
            const engineer = new Engineer('dalton', 1, 'gmail', 'github');
            expect(engineer.getRole()).toBe('Engineer');
        })
    })

    describe('getGithub method', () => {
        it('returns this.github', () => {
            const engineer = new Engineer('dalton', 1, 'gmail', 'github');
            expect(engineer.getGithub()).toBe('github');
        })
    })
});
