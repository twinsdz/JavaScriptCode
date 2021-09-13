function solve(words, templ) {
    words = words.split(', ');

    for (let word of words) {
        let starsTemp = '*'.repeat(word.length);
        templ = templ.replace(starsTemp, word);
    }
    console.log(templ);
}

solve('great', 'softuni is ***** place for learning new programming languages');