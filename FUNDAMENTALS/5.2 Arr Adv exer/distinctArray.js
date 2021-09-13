/* function distinct(input){   
    let arr = [];

    for(let i = input.length -1; i >= 0 ; i--){
      let el = input.pop();

      if(!input.includes(el)){
        arr.push(el);
      }
    }
    arr.reverse();
    console.log((arr.join(' ')));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinct([20, 8, 12, 13, 4, 4, 8, 5]);
// distinct([1, 2, 3, 4]); */

function distinct(input) {
  let arr = [];

  for (let el of input) {
    if (!arr.includes(el)) {
      arr.push(el);
    }
  }
  console.log((arr.join(' ')));
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);
// distinct([20, 8, 12, 13, 4, 4, 8, 5]);
// distinct([1, 2, 3, 4]);