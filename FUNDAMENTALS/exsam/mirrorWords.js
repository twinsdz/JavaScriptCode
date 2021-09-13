function solve(input) {
    let text = input.shift();
    let pattern = /(\s*@[A-Za-z]{3,}@\s*){2}|(\s*#[A-Za-z]{3,}#\s*){2}/g;
    let wordPattern = /[A-Za-z]{3,}/g;

    // регекс масив
    let words = text.match(pattern);
    let mirrorWords = [];

    if (words !== null) {
        for (let pair of words) {
            //рязане с регекс
            let arrOfPairs = pair.match(wordPattern);
            // word reverse
            let reversedWord = arrOfPairs[1].split('').reverse().join('');

            if (reversedWord === arrOfPairs[0]) {
                mirrorWords.push(`${arrOfPairs[0]} <=> ${arrOfPairs[1]}`);
            }
        }
    }

    if (words !== null) {
        console.log(`${words.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }


    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    } else {
        console.log("No mirror words!");
    }
}

solve(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);

solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);