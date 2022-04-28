const Employee = require('./Employee');
const employeeBob = new Employee ("Bob", "Manager", "11", "bob@gamil.com");

describe('testEmployee', () =>{
  it('should return an object with new empployee properties that were input as parameters'), () => {
    expect(employeeBob).toEqual(
    
   employeeBob   
  {
    personName: 'Bob', 
    personJob: 'Manager',
    personId: '11',
    personEmail: 'bob@gmail.com',
  }
    );
}});


