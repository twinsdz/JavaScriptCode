function solve(){
    let hours = '6'.padStart(2, '0'); // 2 дължина на стринга, '0' какво добавя
    let min = '12'.padStart(2, '0');
    let sec = '5'.padStart(2, '0');

    return `${hours}:${min}:${sec}`;
}

console.log(solve());

// console.log(('0'.repeat(8) + '22').slice(-8));  // padStart with array