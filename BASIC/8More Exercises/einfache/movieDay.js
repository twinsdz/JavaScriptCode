function movieDay (sessionTime, sessionCount, sceneTime){
    sessionTime = Number (sessionTime);
    sessionCount = Number (sessionCount);
    sceneTime = Number (sceneTime);

    let prepareTime = sessionTime * 0.15;
    let totalSessionTime = sessionCount * sceneTime;
    let totalTime = prepareTime + totalSessionTime;

    if (totalTime <= sessionTime){
        console.log(`You managed to finish the movie on time! You have ${Math.round(sessionTime - totalTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTime - sessionTime)} minutes.`);
    }
}


/* movieDay ("120", "10", "11"); */

movieDay ("135", "5", "20");