function trakingMania(input) {

    let groupCount = Number(input[0]);

    let musalaGroup = 0;
    let kilimandscharoGroup = 0;
    let montBlancGroup = 0;
    let k2Group = 0;
    let everstGroup = 0;

    let percentMusala = 0;
    let percentMontBlanc = 0;
    let percentKilimandscharo = 0;
    let percentK2 = 0;
    let percentEverest = 0;


    for (let i = 1; i <= groupCount; i++) {
        let currentGroup = Number(input[i]);

        if (currentGroup <= 5) {
            musalaGroup += currentGroup;
        } else if (currentGroup <= 12) {
            kilimandscharoGroup += currentGroup;
        } else if (currentGroup <= 25) {
            montBlancGroup += currentGroup;
        } else if (currentGroup <= 40) {
            k2Group += currentGroup;
        } else {
            everstGroup += currentGroup;
        }
    }

    let allМountaineer = musalaGroup + kilimandscharoGroup + montBlancGroup + k2Group + everstGroup;

    percentMusala = (musalaGroup / allМountaineer) * 100;
    percentMontBlanc = (montBlancGroup / allМountaineer) * 100;
    percentKilimandscharo = (kilimandscharoGroup / allМountaineer) * 100;
    percentK2 = (k2Group / allМountaineer) * 100;
    percentEverest = (everstGroup / allМountaineer) * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentKilimandscharo.toFixed(2)}%`);
    console.log(`${percentMontBlanc.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}

trakingMania(['10', '10', '5', '1', '100', '12', '26', '17', '37', '40', '78']); 

/* trakingMania(['5', '25', '41', '31', '250', '6']); */