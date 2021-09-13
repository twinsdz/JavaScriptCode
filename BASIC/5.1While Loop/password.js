function password(input) {

  /* 
  
  let username = input[0];
  let password = input[1];
  let data = input[2];
  let index = 3;

  while (data !== password) {
    data = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`); */

  /* 
  
  let username = input[0];
  let password = input[1];

  let index = 2;
  let currentPass = input[index++];
  
  while (currentPass !== password){
    currentPass = input[index++];
  }

  console.log(`Welcome ${username}!`); */

  
  let username = input[0];
  let password = input[1];

  let index = 2;

  while (index < input.length){
    let currentPass = input[index++];

    if (currentPass === password){
      break;
    }
  }
  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);