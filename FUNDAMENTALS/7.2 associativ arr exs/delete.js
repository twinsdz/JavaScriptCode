/* var Employee = {
    age: 28,
    name: 'abc',
    designation: 'developer'
  }
  
  console.log(delete Employee.name);   // returns true
  console.log(delete Employee.age);    // returns true
  
  // When trying to delete a property that does
  // not exist, true is returned
  console.log(delete Employee.salary); // returns true */

  const Employee = {
    firstname: 'John',
    lastname: 'Doe'
  };
  
  console.log(Employee.firstname);
  // expected output: "John"
  
  delete Employee.firstname;
  
  console.log(Employee.firstname);
  // expected output: undefined
  