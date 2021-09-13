function pipes(input) {
    let index = 0;
    let kbmPool = Number(input[index++]);
    let firstPipeCap = Number(input[index++]);
    let secondPipeCap = Number(input[index++]);
    let hours = Number(input[index]);

    let firstPipeWater = firstPipeCap * hours;
    let secondPipeWater = secondPipeCap * hours;
    let newWater = firstPipeWater + secondPipeWater;

    if (newWater <= kbmPool) {
        console.log(`The pool is ${((newWater / kbmPool)*100).toFixed(2)}% full. Pipe 1: ${((firstPipeWater / newWater)*100).toFixed(2)}%. Pipe 2: ${((secondPipeWater/newWater)*100).toFixed(2)}%.`);
    } else {
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${(newWater - kbmPool).toFixed(2)} liters.`);
    }
}

// pipes (["1000", "100", "120", "3"]);

pipes(["100", "100", "100", "2.5"]);