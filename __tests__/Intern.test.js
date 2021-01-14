const Intern = require("../lib/Intern");

test('get school', () => {
  const employee = new Intern("Jared", "42", "jared.davis21@yahoo.com", 'FSU');
  
  expect(employee.school).toBe("FSU");
});