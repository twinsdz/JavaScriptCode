function volley(input) {
    let type = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);

    let sofiaGames = (48 - h) * 3 / 4;
    let homeGames = h;
    let holidayGames = p * 2 / 3;
    let totalGames = sofiaGames + homeGames + holidayGames;
    let isLeap = type === 'leap';

    if (isLeap) {
        totalGames = totalGames * 1.15;
    }
    console.log(Math.floor(totalGames));
}

volley(["leap", "5", "2"]);