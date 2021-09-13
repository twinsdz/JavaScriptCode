function serienCal(serieName, filmCount, seasonsCount, timeLengthFilm) {
    seasonsCount = Number(seasonsCount);
    filmCount = Number(filmCount);
    timeLengthFilm = Number(timeLengthFilm);

    let filmTimewithadvertisement = timeLengthFilm * 1.20;
    let spetialFilm = filmCount * 10;
    let totalTime = filmTimewithadvertisement * seasonsCount * filmCount + spetialFilm;

    console.log(`Total time needed to watch the ${serieName} series is ${Math.floor(totalTime)} minutes.`);

}

serienCal("Lucifer", "3", "18", "55");