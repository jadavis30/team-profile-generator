const Engineer = require("../lib/Engineer");

test('get username', () => {
    const engineer = new Engineer('Jared');
  
    expect(engineer.name).toBe('Jared');
    
   
  });