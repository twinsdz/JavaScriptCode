/* function signCheck(numOne, numTwo, numThree) {
    let result = '';

    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree >= 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne >= 0 && numTwo >= 0 && numThree < 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Negative';
    } else if (numOne < 0 && numTwo >= 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne < 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Negative';
    } else if (numOne >= 0 && numTwo < 0 && numThree < 0) {
        result = 'Positive';
    } else if (numOne >= 0 && numTwo < 0 && numThree >= 0) {
        result = 'Negative';
    }

    console.log(result);
}

// signCheck(5, 12, -15);

// signCheck(-6, -12, 14);

signCheck(-1, -2, -3);

// signCheck(-1, 0, 1);

// signCheck(-5, 1, 1);

 */

function signCheck(numOne, numTwo, numThree) {
    if (numOne > 0 && numTwo > 0 || numOne < 0 && numTwo < 0) {
      if(numThree > 0){
          console.log('Positive');
      } else {
        console.log('Negative');
      }  
    } else {
        if(numThree > 0){
            console.log('Negative');
        } else {
            console.log('Positive');
        }  
    }
}

// signCheck(5, 12, -15);

// signCheck(-6, -12, 14);

signCheck(-1, -2, -3);

// signCheck(-1, 0, 1);

// signCheck(-5, 1, 1);

