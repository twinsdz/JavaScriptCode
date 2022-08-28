function solve(obj) {
    let requiredAmount = 0.1 * obj.weight * obj.experience;

    if (obj.dizziness) {
        obj.levelOfHydrated += requiredAmount;
        obj.dizziness = false;
    }
    return obj;
}

console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

console.log(solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));