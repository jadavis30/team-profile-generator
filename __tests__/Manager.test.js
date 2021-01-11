const Manager = require("../lib/Manager");

test('create Manager object', () => {
  const manager = new Manager("Jared", "42", "jared.davis21@yahoo.com", '200');
  expect(manager.name).toBe('Jared');
  expect(manager.id).toBe('42');
  expect(manager.email).toBe('jared.davis21@yahoo.com');
  expect(manager.office).toBe("200");
  
  
});