const Manager = require("../lib/Manager");

test('get Office number', () => {
  const employee = new Manager("Jared", "42", "jared.davis21@yahoo.com", '200');
  
  expect(employee.office).toBe("200");  
});