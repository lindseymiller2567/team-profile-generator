// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

const Engineer = require('../lib/Engineer');

test('return engineer github user name', () => {
    const engineer = new Engineer('Lindsey', '123', 'linds@email.com', 'username');

    expect(engineer.getGitHub()).toBe('username')
})

test('return role', () => {
    const engineer = new Engineer('Lindsey', '123', 'linds@email.com', 'username');

    expect(engineer.getRole()).toBe('Engineer')
})