function legendaryFarming(string) {
    let result = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junk = {};
    let array = string.split(' ');
    let winner = undefined;
    let obtained = undefined;
    let sortedResult = undefined;
    for (let i = 0; i < array.length; i += 2) {
        let quantity = Number(array[i]);
        let key = array[i + 1].toLocaleLowerCase();

        if (result.hasOwnProperty(key)) {
            result[key] += quantity;
            if (result[key] >= 250) {
                obtained = key;
                result[key] -= 250;
                break
            }
        } else {
            if (!junk[key]) {
                junk[key] = quantity;
            } else {
                junk[key] += quantity
            }
        }
    }
    if (obtained == 'shards') {
        winner = 'Shadowmourne'
    } else if (obtained == 'fragments') {
        winner = 'Valanyr'
    } else if (obtained == 'motes') {
        winner = 'Dragonwrath'
    }

    if (obtained) {
        console.log(`${winner} obtained!`);
    }
    sortedResult = Object.entries(result).sort(itemsCompare);
    for (let [a, b] of sortedResult) {
        console.log(a + ': ' + b)
    }
    let sortedJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [a, b] of sortedJunk) {
        console.log(`${a}: ${b}`);
    }

    function itemsCompare(a, b) {
        let itemA = a[0];
        let itemB = b[0];
        let pointsA = a[1];
        let pointsB = b[1];
        return pointsB - pointsA || itemA.localeCompare(itemB)
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');