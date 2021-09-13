    // function inventory(arr) {
    //     let heros = [];
    //     for (line of arr) {
    //         let [hero, level, items] = line.split(' / ');
    //         level = Number(level);
    //         items = items.split(', ').sort((a, b) => a.localeCompare(b) /* || a.level - b.level */).join(', ');
    //         let heroObj = {
    //             Hero: hero,
    //             level,
    //             items
    //         }
    //         heros.push(heroObj);
    //     }
    //     heros.sort((a,b) => a.level - b.level)
    //     .forEach(hero => {
    //         console.log(`Hero: ${hero.Hero}`);
    //         console.log(`level => ${hero.level}`);
    //         console.log(`items => ${hero.items}`);
    //     });
    // }

    // inventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);

    function inventory(arr) {
        let heros = [];
        class Hero {
            constructor(name, level, items) {
                this.name = name;
                this.level = level;
                this.items = items.join(', ');
            }
            print() {
                console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items}`);
            }
        }

        for (line of arr) {
            let [name, level, items] = line.split(' / ');
            items = items.split(', ').sort((a, b) => a.localeCompare(b));
            let hero = new Hero(name, +level, items);
            heros.push(hero);
        }
        heros.sort((a, b) => a.level - b.level).forEach(hero => hero.print());
    }


    inventory(["Isacc / 25 / Apple, GravityGun", "Derek / 12 / BarrelVest, DestructionSword", "Hes / 1 / Desolator, Sentinel, Antara"]);