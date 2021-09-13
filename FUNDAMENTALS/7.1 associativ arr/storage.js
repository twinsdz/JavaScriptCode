function storage(input){ 
    let ourMap = new Map();

    for (let el of input){
        let inputLine = el.split(' ');
        let productName = inputLine[0];
        let quantity = Number (inputLine[1]);

        if(!ourMap.has(productName)){
            ourMap.set(productName, quantity);    // .set(key, value)
        } else{
            let currentQuantity = ourMap.get(productName);    // get(key) – returns the value of the given key 
            let newQuantity = currentQuantity + quantity;
            ourMap.set(productName, newQuantity);
        }

        // let arr = Array.from(ourMap.entries()).sort((a, b) => a[1] - b[1]); // сортиране
        // let arr = [...ourMap];

    }

    for(let kvp of ourMap){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }

}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);