/* function cdu(input) {
    let index = 0;
    let winnerName = "";
    let mostVoices = Number.MIN_SAFE_INTEGER;
    let inputLine = input[index++];

    while (inputLine !== "Stop") {
        let candidateName = inputLine;
        let voices = Number(input[index++]);

        if (voices > mostVoices) {
            mostVoices = voices;
            winnerName = candidateName;
        }
        inputLine = input[index++];
    }

    console.log(`The winner ${winnerName} received ${mostVoices}.`);

}

cdu(["Armin Laschet", "500", "Friedrich Merz", "300", "Dr. Norbert Röttgen", "100", "Stop"]); */

function cduVote(input) {
    let index = 0;
    let delegator = 1000;
    let abstainer = Number(input[index++]);
    let validVoted = delegator - abstainer;
    let winnerName = "";
    let sum = 0;
    let inputLine = input[index++];
    let laschetSum = 0;
    let rottgenSum = 0;
    let merzSum = 0;
    let mostVoices = 0;
    let isInvalid = false;

    while (inputLine !== "Stop") {
        currentName = inputLine;
        currentVoices = Number(input[index++]);
        sum += currentVoices;
        let currentSum = 0;

        if (currentName === "Armin Laschet") {
            laschetSum += currentVoices;
            currentSum = laschetSum;
        } else if (currentName === "Friedrich Merz") {
            merzSum += currentVoices;
            currentSum = merzSum;
        } else {
            rottgenSum += currentVoices;
            currentSum = rottgenSum;
        }

        if (sum > validVoted) {
            isInvalid = true;
            console.log(`Invalid Vote!`);
            break;
        }

        if (currentSum > mostVoices) {
            mostVoices = currentSum;
            winnerName = currentName;
        }

        inputLine = input[index++];
    }

    if (!isInvalid) {
        console.log(`The winner ${winnerName} received ${mostVoices} voices.`);
    }

}

cduVote(["100", "Armin Laschet", "300", "Friedrich Merz", "100", "Armin Laschet", "30", "Armin Laschet", "170", "Friedrich Merz", "100", "Dr. Norbert Röttgen", "50", "Friedrich Merz", "100", "Dr. Norbert Röttgen", "50", "Stop"]);