const Employee = require('../lib/Employee.js');

test('get employee information', () => {
    const employee = new Employee('Jared', "42", "jareddavis21@yahoo.com");
    
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe("42");
    expect(employee.email).toBe("jareddavis21@yahoo.com");
});





