function solve([input]){
    // let pattern = /<h>(?<text>.+)<\/h>/gm; // само за h таг
    // let pattern = /<.+?>(?<text>.+?)<.+?>/gm; // ? прави правилото lazy, т.е взима възможно най малко съвпадения
    let pattern = /<(.+?)>(?<text>.+?)<\/\1>/gm; // \/\1 Означава хвани първата група
    let result = input.match(pattern);
    console.log(result.join('\n'));
}

solve(["<h>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h>text of the printing<span>text of the printing</span>"]);