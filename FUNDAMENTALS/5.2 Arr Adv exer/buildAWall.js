function wall(input) {
    // масив с количествата бетон на ден
    let newArr = [];
    // let totalConcrete = 0;
    // смятам брой бригади
    let crews = input.filter(len => len < 30).length;

    // докато бригадите са повече от нула
    while (crews !== 0) {
        let concretePerDay = 0;

        for (let i = 0; i < input.length; i++) {

            // когато елемента от масива стане 30, бригадата си тръгва
            if (input[i] !== 30) {
                input[i]++;
                // смятам количеството бетон на ден
                concretePerDay += 195;
                if (input[i] == 30) {
                    crews--;
                }
            }
        }
        // totalConcrete += concretePerDay; 
        newArr.push(concretePerDay);
    }

    let totalConcrete = newArr.reduce((sum, b) => sum + b);
    let pricePesos = totalConcrete * 1900;
     
    console.log(newArr.join(', '));
    console.log(`${pricePesos} pesos`);
}


// wall([21, 25, 28]);

// wall([ 17 ]);

wall([17, 22, 17, 19, 17]);