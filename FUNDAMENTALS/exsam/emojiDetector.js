function solve(input) {
    let text = input.shift();
    let digitPatern = /\d/g;
    let emojiPattern = /\*{2}[A-Z][a-z]{2,}\*{2}|::[A-Z][a-z]{2,}::/g;
    let threshold = 1; // умножавам по 1, защото ако е нула резултата ще е винаги нула 
    let coolEmojies = [];
    // let allNum = text.match(digitPatern).map(Number); // връща arr
    let numArr = text.match(digitPatern);
    let emojis = text.match(emojiPattern);

    if (numArr !== null || emojis !== null) {
        for (let num of numArr) {
            num = Number(num);
            threshold *= num;
        }
        for (let i = 0; i < emojis.length; i++) {
            coolness = 0;
            let emoji = emojis[i].slice(2, -2); // рязане от стринг на два символа отпред и два отзад (връща стринг)

            // взимам всеки символ от стринга
            for (let char of emoji) {
                // отговарящото число на символа от ACII таблицата (ако няма индекс 0 може да върне NaN в случай, че няма такъв символ в таблицата)
                let charNum = char.charCodeAt(0);
                coolness += charNum;
            }

            if (coolness > threshold) {
                coolEmojies.push(emojis[i]);
            }
        }

        console.log(`Cool threshold: ${threshold}`);
        // тернарен оператор
        console.log(`${emojis.length > 0 ? emojis.length : 0} emojis found in the text. The cool ones are:\n${coolEmojies.join("\n")}`);
    }
}

solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

// solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

// solve(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);

solve(["p"]);