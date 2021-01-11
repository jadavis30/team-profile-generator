const Employee = require('../lib/Employee.js');

test('create Employee object', () => {
    const employee = new Employee('Jared', '42', 'jared.davis21@yahoo.com');

    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe('42');
    expect(employee.email).toBe('jared.davis21@yahoo.com');
    
});



