function solve(text) {
    let words = text.split(' ', 5).filter(word => word.length > 0); // 5 е лимит (взима само първите три)

    console.log(words);
}

solve('I like   Java! Java, Java, Java!')