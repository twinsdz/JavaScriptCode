function solve(input) {
    let number = Number(input[0]);
    // let lowerNumber = Number (input[1]);
    let lowerNumber = Number.MAX_SAFE_INTEGER;

    for (let index = 1; index <= number; index++) {
      let current = Number(input[index]);
  
      if (current < lowerNumber) {
        lowerNumber = current;
      }
    }
    console.log(lowerNumber);
  }

  solve (["2", "100", "99"]);
  