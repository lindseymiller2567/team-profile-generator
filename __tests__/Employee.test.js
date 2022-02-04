const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Lindsey', '123', 'linds@email.com');

    expect(employee.name).toBe('Lindsey');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('linds@email.com')
})

test('return employee name', () => {
    const employee = new Employee('Lindsey', '123', 'linds@email.com');

    expect(employee.getName()).toBe('Lindsey')
})

test('return employee id', () => {
    const employee = new Employee('Lindsey', '123', 'linds@email.com');

    expect(employee.getId()).toBe('123')
})

test('return employee email', () => {
    const employee = new Employee('Lindsey', '123', 'linds@email.com');

    expect(employee.getEmail()).toBe('linds@email.com')
})

test('return role', () => {
    const employee = new Employee('Lindsey', '123', 'linds@email.com');

    expect(employee.getRole()).toBe('Employee')
})


// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'