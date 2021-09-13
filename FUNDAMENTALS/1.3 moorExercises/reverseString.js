function reverseStr (str){
    let reverseStr = str.split('').reverse().join('');
    console.log(`${reverseStr}`);
}

reverseStr ('Hello');