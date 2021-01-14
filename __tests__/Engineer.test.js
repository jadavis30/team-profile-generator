const Engineer = require("../lib/Engineer");

test('get GitHub', () => {
  const employee = new Engineer("Jared", "42", "jared@yahoo.com","jadavis30");
  
  expect(employee.github).toBe("jadavis30");
});