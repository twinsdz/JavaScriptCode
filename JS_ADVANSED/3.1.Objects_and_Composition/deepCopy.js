const myOject = {
    firstName: 'Peter',
    lastName: 'Smith',
    sayHi() {
        return 'Hi!'
    },
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

function deepCopy(target) {
    if(Array.isArray(target)){
        return target.map(deepCopy);
    } else if(typeof target == 'object'){
        return [...Object.entries(target)].reduce((acc, [key, value]) => Object.assign(acc, {[key]: deepCopy(value)}), {});
    } else{
        return target;
    }
}

const myCopy = deepCopy(myOject)
console.log(myCopy);
// false означава, че двата обекта са различни, а не сочат към една и съща референция
console.log(myOject == myCopy);
