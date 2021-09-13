function oscars(input) {
    let index = 0;
    let actorName = input[index++];
    let actorsAcademiePoints = Number(input[index++]);
    let appreciativeCount = Number(input[index++]);
    let pointsSum = 0;
    let currentSum = 0;

    for (let i = 1; i <= appreciativeCount; i++) {
        let appreciatName = input[index++];
        let currentPoints = Number(input[index++]);

        currentSum += (appreciatName.length * currentPoints) / 2;

        pointsSum = actorsAcademiePoints + currentSum;

        if (pointsSum >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsSum.toFixed(1)}!`);
            break;
        }

    }

    if (pointsSum <= 1250.5) {
        let needPoinds = Math.abs(1250.5 - pointsSum);
        console.log(`Sorry, ${actorName} you need ${needPoinds.toFixed(1)} more!`);
    }

}

oscars(['Zahari Baharov', '205', '4', 'Johnny Depp', '45', 'Will Smith', '29', 'Jet Lee', '10', 'Matthew Mcconaughey', '39']);

/* oscars(['Sandra Bullock', '340', '5', 'Robert De Niro', '50', 'Julia Roberts', '40.5', 'Daniel Day-Lewis', '39.4', 'Nicolas Cage', '29.9', 'Stoyanka Mutafova', '33', '']); */