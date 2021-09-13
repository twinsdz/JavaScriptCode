function digitsEnglNames(input) {
    let n = input[0];
    let arrOfDigit = n.split('');
    let lastDigit = arrOfDigit.reverse();

    if (lastDigit[0] === '0') {
        console.log('zero');
    } else if (lastDigit[0] === '1') {
        console.log('one');
    } else if (lastDigit[0] === '2') {
        console.log('two');
    } else if (lastDigit[0] === '3') {
        console.log('three');
    } else if (lastDigit[0] === '4') {
        console.log('four');
    } else if (lastDigit[0] === '5') {
        console.log('five');
    } else if (lastDigit[0] === '6') {
        console.log('six');
    } else if (lastDigit[0] === '7') {
        console.log('seven');
    } else if (lastDigit[0] === '8') {
        console.log('eight');
    } else if (lastDigit[0] === '9') {
        console.log('nine');
    }
}

digitsEnglNames(['512']);