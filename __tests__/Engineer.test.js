const Engineer = require("../lib/Engineer");

test('create Engineer object', () => {
  const engineer = new Engineer("Jared", "42", "jared.davis21@yahoo.com", 'jadavis30');
  expect(engineer.name).toBe('Jared');
  expect(engineer.id).toBe('42');
  expect(engineer.email).toBe('jared.davis21@yahoo.com');
  expect(engineer.github).toBe("jadavis30");
  
  
});