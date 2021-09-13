function solve(input) {
    let map = new Map();
    let neighborhoods = input[0].split(', ');

    for (neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    for (let i = 1; i < input.length; i++) {
        let current = input[i].split(' - ');
        let neighborhood = current[0];
        let person = current[1];

        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1].length - a[1].length);

    // Печатане на масив от Map
    for (let key of sorted) {
        // сортиране на съквартирантите по азбучен ред
        let inhabitants = key[1].sort((a, b) => b.localeCompare(a));
        console.log(`${key[0]}: ${inhabitants.length}`);
        for (let el of inhabitants) {
            console.log(`--${el}`);
        }
    }
}

solve(['Abbey Street, Herald Street, Bright Mews', 'Bright Mews - Garry', 'Bright Mews - Andrea', 'Invalid Street - Tommy', 'Abbey Street - Billy']);