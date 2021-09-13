/* function solve(arr) {

    let map = new Map();

    for (let string of arr) {
        let tokens = string.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if (!map.has(name)) {
            map.set(name, []);
            map.set(name, map.get(name).concat(grades));
        } else {
            map.set(name, map.get(name).concat(grades));
        }
    }

    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;
        return aAverage - bAverage;
    }

    let sorted = Array.from(map).sort((a, b) => average(a, b));

    for (let keys of sorted) {
        console.log(`${keys[0]}: ${keys[1].join(", ")}`);
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]); */

/* function solve(arr) {

    let students = new Map();

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.has(name)) {
            students.set(name, []);
        }

        let existing = students.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    function average([nameA, gradesA], [nameB, gradesB]) {
        let aSum = 0;
        gradesA.forEach(x => aSum += x);
        aSum /= gradesA.length;

        let bSum = 0;
        gradesB.forEach(x => bSum += x);
        bSum /= gradesB.length;


        return aSum - bSum;
    }

    let sorted = Array.from(students).sort(average);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]); */

/* function solve(arr) {

    let students = {};

    for (let line of arr) {
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }

        let existing = students[name];
        for (let grade of grades) {
            existing.push(grade);
        }
    }

    function average([nameA, gradesA], [nameB, gradesB]) {
        let aSum = 0;
        gradesA.forEach(x => aSum += x);
        aSum /= gradesA.length;

        let bSum = 0;
        gradesB.forEach(x => bSum += x);
        bSum /= gradesB.length;


        return aSum - bSum;
    }

    let sorted = Object.entries(students).sort(average);

    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']); */

    function solve(arr) {

        let students = {};
    
        for (let line of arr) {
            let tokens = line.split(' ');
            let name = tokens.shift();
            let grades = tokens.map(Number);
    
            // Пълнене на обект
            if (!students.hasOwnProperty(name)) {
                students[name] = [];
            }
    
            let existing = students[name];
            for (let grade of grades) {
                existing.push(grade);
            }
        }

        // Сортиране според средния успех
        function average([nameA, gradesA], [nameB, gradesB]) {
            // p = предишн елемент, c = текущ елемент => какво правим, от къде започваме
            // средно аретмитично
            let aSum = gradesA.reduce((p, c) => p + c, 0) / gradesA.length; 
            let bSum = gradesB.reduce((p, c) => p + c, 0) / gradesB.length; 
    
            return aSum - bSum;
        }
        

        let sorted = Object.entries(students).sort(average);
    
        for (let [name, grades] of sorted) {
            console.log(`${name}: ${grades.join(", ")}`);
        }
    }
    
    solve(['Lilly 4 6 6 5',
        'Tim 5 6',
        'Tammy 2 4 3',
        'Tim 6 6']);