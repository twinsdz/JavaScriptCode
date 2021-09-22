function cityInfo(city){
    let entries = Object.entries(city);
    for(let [key, value] of entries){
        console.log(`${key} -> ${value}`);
    }
}


let info = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
};

// info[1] = 1 + 3;
// info[2] = 2;
// info[3] = 3;

cityInfo(info);

/* function cityInfo(city) {
    let keys = Object.keys(city);

    for (let key of keys) {
        let value = city[key];
        console.log(`${key} -> ${value}`);
    }
} */

/* function cityInfo(city) {
    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
} */

/* function cityInfo(city) {
    let keysNames = Object.keys(city); // keysNames масив
    for (let key of keysNames) { // key са ключовете
        let value = city[key];
        console.log(`${key} -> ${value}`);
    }
} */