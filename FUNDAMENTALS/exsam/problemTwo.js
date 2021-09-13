function solve(input) {
    let n = Number(input.shift());

    for (let line of input) {
        let [boss, title] = line.split(':');

        if (isValid(line)) {
            let name = boss.slice(1, -1);
            let titleName = title.slice(1, -1);
            console.log(`${name}, The ${titleName}\n>> Strength: ${name.length}\n>> Armour: ${titleName.length}`);
        } else {
            console.log('Access denied!');
        }
    }

    // проверка с регекс check with regex
    function isValid(str) {
        let patternTitle = /\|(?<name>[A-Z]+)\|:#([A-Za-z]+\s{1}[A-Za-z]+){1}#/g;
        let arr = str.match(patternTitle);
        if (arr !== null) {
            return true;
        } else {
            return false;
        }
    }
}

solve(["3",
    "|GEORGI|:#Lead architect#",
    "|Hristo|:#High Overseer#",
    "|STEFAN|:#Assistant Game Developer#"
]);

solve(["3",
    "|PETER|:#H1gh Overseer#",
    "|IVAN|:#Master detective#",
    "|KARL|: #Marketing lead#"
]);