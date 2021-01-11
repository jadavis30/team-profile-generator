const Intern = require("../lib/Intern");

test('create Intern object', () => {
  const intern = new Intern("Jared", "42", "jared.davis21@yahoo.com", 'FSU');
  expect(intern.name).toBe('Jared');
  expect(intern.id).toBe('42');
  expect(intern.email).toBe('jared.davis21@yahoo.com');
  expect(intern.school).toBe("FSU");
  
  
});