/* function words(input) {
    let occurences = {};
    input.shift().split(' ').forEach(word => {
        occurences[word] = 0;
    });

    input.forEach(w => {
        if (occurences.hasOwnProperty(w)) {
            occurences[w]++;
        }
    });

    return Object.keys(occurences)
        .sort((a, b) => occurences[b] - occurences[a])
        .map(w => `${w} - ${occurences[w]}`)
        .join('\n');
}

console.log(words(['sentence this', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])); */

function solve(input) {
    let wordsToSearch = input.shift().split(' ');
    let words = {};

    for (let word of wordsToSearch) {
        words[word] = 0;
    }

    
    for (let line of input) {
        // Object.keys превръща обекта words в масив и търси в него дали line от input съвпада с някоя от думите в него.
        if (Object.keys(words).includes(line)) {
            words[line] += 1;
        } 
    }

    // Сортиране по ключ. Ключа е индекс 1 в масивите в масива.
    let sortedWords = Object.entries(words).sort((a, b) => b[1] - a[1]);

    // Печатане на масив
    for(let [key, value] of sortedWords){
        console.log(`${key} - ${value}`);
    }
}

solve(['sentence this', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);