function extractText() {
    const items = document.getElementById("items").children;
    // const items = document.querySelectorAll("#items li");
    const result = [];
    
    for(let el of Array.from(items)){
        result.push(el.textContent);
    }
    
    document.getElementById("result").textContent = result.join('\n');
    // document.getElementById("result").value = result.join('\n');
}

/* function extractText() {
    const items = document.getElementById("items").children;

    // това не работи в Judge. Прави масив, обработва го с map() и с join го превръща в стринг
    const result = [...items].map(el => el.textContent).join('\n'); 

    document.getElementById("result").value = result;
} */