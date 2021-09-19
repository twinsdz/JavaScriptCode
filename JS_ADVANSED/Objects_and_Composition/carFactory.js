function solve(obj) {
    return {
        'model': obj.model,
        'engine': getEngine(obj.power),
        'carriage': getCarriage(obj.carriage, obj.color),
        'wheels': getWheels(obj.wheelsize)
    }

    function getEngine(power) {
        const engines = [{
                'power': 90,
                'volume': 1800
            },
            {
                'power': 120,
                'volume': 2400
            },

            {
                power: 200,
                volume: 3500
            }
        ].sort((a, b) => a.power - b.power);

        // let result;
        // for (let i = 0; i < engines.length; i++) {
        //     if(engines[i].power >= power){
        //         result = engines[i];
        //         break;
        //     }
        // }
        // return result;
        return engines.find(el => el.power >= power);
    }

    function getCarriage(carriage, color) {
        return {
            'type': carriage,
            'color': color
        };
    }

    function getWheels(num) {
        let wheelsize = Math.floor(num) % 2 === 0 ? Math.floor(num) -1 : Math.floor(num);
        return Array(4).fill(wheelsize, 0, 4);
        // return [wheelsize, wheelsize, wheelsize, wheelsize];
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));