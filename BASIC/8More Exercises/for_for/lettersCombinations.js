function lettersCombin(input) {
    let index = 0;
    let startChar = input[index++];
    let startCharCode = startChar.charCodeAt();
    let endChar = input[index++];
    let endCharCode = endChar.charCodeAt();
    let skipChar = input[index++];
    let result = "";
    let combinCount = 0;
    let string = "";

    for (let i = startCharCode; i <= endCharCode; i++) {
        let char1 = String.fromCharCode(i);

        for (let j = startCharCode; j <= endCharCode; j++) {
            let char2 = String.fromCharCode(j);

            for (let k = startCharCode; k <= endCharCode; k++) {
                let char3 = String.fromCharCode(k);

                result = char1 + char2 + char3;

                if (!(result.includes(skipChar))) {
                    string += result + " ";
                    combinCount++;
                }
            }
        }
    }
    console.log(`${string}${combinCount}`);
}

lettersCombin(['a', 'c', 'b', '']);