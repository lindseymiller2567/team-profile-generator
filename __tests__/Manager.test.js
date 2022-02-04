// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

const Manager = require('../lib/Manager');

test('return manager office number', () => {
    const manager = new Manager('Lindsey', '123', 'linds@email.com', '456');

    expect(manager.getOfficeNumber()).toBe('456')
})

test('return role', () => {
    const manager = new Manager('Lindsey', '123', 'linds@email.com', '456');

    expect(manager.getRole()).toBe('Manager')
})