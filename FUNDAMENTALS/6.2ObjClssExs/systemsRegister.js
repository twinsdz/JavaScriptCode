function solve(input) {
    let system = {};

    input.forEach(element => {
        let [name, component, subComponent] = element.split(' | ');

        if (!system.hasOwnProperty(name)) {
            system[name] = {};
        }

        if (!system[name].hasOwnProperty(component)) {
            system[name][component] = [];
        }
        system[name][component].push(subComponent);
    });

    let sortedKeys = Object.keys(system).sort((a, b) => Object.keys(system[b]).length - Object.keys(system[a]).length || a.localeCompare(b));
    sortedKeys.forEach((key) => {
        console.log(key);
        let sortedSubKeys = Object.keys(system[key]).sort((a, b) => Object.keys(system[key][b]).length - Object.keys(system[key][a]).length);
        sortedSubKeys.forEach((subKey) => {
            console.log(`|||${subKey}`);
            system[key][subKey].forEach((subComp) => {
                console.log(`||||||${subComp}`);
            });
        });
    });
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);


/* function solve(params) {
    let systems = new Map();
    for (const row of params) {
        let [name, component, subComponent] = row.split(' | ');

        if (!systems.get(name)) {
            systems.set(name, new Map()); //set(key, value)
        }

        let setOfSybcomponents = systems.get(name).get(component); //.get(key) – returns the value of the given key 

        if (!setOfSybcomponents) {
            systems.get(name).set(component, []);
            setOfSybcomponents = systems.get(name).get(component);
        }

        setOfSybcomponents.push(subComponent);
    }
    let ident = '|||';
    let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size // By components count -> x[1].size
        :
        a[0] < b[0] ? -1 // By Name -> x[0]
        :
        a[0] > b[0] ? 1 :
        0;
    let result = [...systems]
        .sort((a, b) => sortSystems(a, b))
        .map(sys => sys[0] +
            '\n' + [...sys[1]]
            .sort((a, b) => b[1].length - a[1].length) // By subcomponents count -> x[1].length
            .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
            .join('\n')
        )
        .join('\n');
    return (result.trim());
}

console.log(solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])); */



/* function components(array) {

    class System {
        constructor(name) {
            this.systemName = name;
            this.components = [];
        }

        addComponent(component) {
            this.components.push(component);
        }
        get getComponents() {
            return this.components;
        }
    }

    class Component {
        constructor(name) {
            this.name = name;
            this.subcomponents = [];
        }
        addSubComponent(subcomponent) {
            this.subcomponents.push(subcomponent);
        }
    }

    let systems = [];

    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' | ');
        let containsInSystems = (systemName) => {
            let system = null;
            systems.forEach(el => el.systemName === systemName ? system = el : null);
            return system;
        };

        if (containsInSystems(elements[0]) === null) {
            let system = new System(elements[0]);
            let component = new Component(elements[1]);
            component.addSubComponent(elements[2]);
            system.addComponent(component);
            systems.push(system);
        } else {
            let system = containsInSystems(elements[0]);

            let component = system.getComponents.find(el => el.name === elements[1]);

            if (component !== undefined) {
                component.addSubComponent(elements[2]);
            } else {
                let newComponent = new Component(elements[1]);
                newComponent.addSubComponent(elements[2]);
                system.addComponent(newComponent);
            }
        }
    }

    systems = Object.values(systems).sort((a, b) => {
        return b.components.length - a.components.length || a.systemName.localeCompare(b.systemName);
    });

    for (let system of Object.values(systems)) {
        console.log(system.systemName);
        let components = system.components;

        for (let component of components.sort((a, b) => b.subcomponents.length - a.subcomponents.length)) {
            console.log(`|||${component.name}`)
            let subcomponents = component.subcomponents;
            for (const subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

components([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']); */