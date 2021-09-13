function solve(input) {
    let line = input.shift();
    let heros = {};

    while (line !== 'End') {
        let [comm, name, spell] = line.split(' ');

        if (comm === 'Enroll') {

            if (!heros.hasOwnProperty(name)) {
                heros[name] = [];
            } else {
                console.log(`${name} is already enrolled.`);
            }

        } else if (comm === 'Learn') {

            if (!heros.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {

                if (heros[name].includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                }

                heros[name].push(spell);
            }

        } else if (comm === 'Unlearn') {

            if (!heros.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else {
                if (!heros[name].includes(spell)) {
                    console.log(`${name} doesn't know ${spell}.`);
                }
                let index = heros[name].indexOf(spell);
                heros[name].splice(index, 1);
            }
        }
        line = input.shift();
    }

    let sorted = Object.entries(heros).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log('Heroes:');

    for (let el of sorted) {
        let [heroName, info] = el;
        let arr = info;
        console.log(`== ${heroName}: ${arr.join(', ')}`);
    }

}

solve(["Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End"
]);

solve(["Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn Stefan ItShouldWork",
    "Unlearn Stefan NotFound",
    "End"
]);

solve(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"
]);