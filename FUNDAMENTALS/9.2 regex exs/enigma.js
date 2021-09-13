function enigma(input) {
    let messageNumbers = +input.shift();
    let planets = {
        "Attacked planets": [],
        "Destroyed planets": []
    };

    while (messageNumbers > 0) {
        let line = input.shift();
        let count = line.match(/[star]/gi);
        if (count) {
            count = count.length;
        } else {
            count = 0;
        }
        
        let decryptedMessage = line.split("").map(c => {
            let current = c.charCodeAt() - count;
            return c = String.fromCharCode(current);
        });

        let pattern = /@([a-zA-Z]+)[^\@\-\!\:\>]*:[^\@\-\!\:\>]*(\d+)[^\@\-\!\:\>]*!([AD])![^\@\-\!\:\>]*->[^\@\-\!\:\>]*(\d+)/g;
        let decrypted = decryptedMessage.join("").matchAll(pattern);
        if (pattern.test(decryptedMessage.join(""))) {
            Array.from(decrypted).forEach(element => {
                let planetName = element[1];
                let attackType = element[3];
                attackType === "A" ? attackType = "Attacked planets" : attackType = "Destroyed planets";
                if (!planets.hasOwnProperty(attackType)) {
                    planets[attackType] = [];
                }
                planets[attackType].push(planetName);
            });
        }
        messageNumbers--;
    }
    Object.keys(planets).forEach(planet => {
        planets[planet].sort((a, b) => a.localeCompare(b));
        console.log(`${planet}: ${planets[planet].length}`);
        if (planets[planet].length > 0) {
            console.log(`-> ${planets[planet].join("\n-> ")}`);
        }
    });
}

enigma(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);

// enigma(["3", "tt(''DGsvywgerx>6444444444%H%1B9444", "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"]);