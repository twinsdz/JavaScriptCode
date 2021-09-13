/* function weddingSeats(input) {
    let lastSector = input[0];
    let lastSectorNum = lastSector.charCodeAt();
    let rowsSectorCount = Number(input[1]);
    let placesSum = Number(input[2]);
    let placeCharCode = 97;
    let placesCount = 0;

    for (let i = 65; i <= lastSectorNum; i++) {
        let sectorChar = String.fromCharCode(i);

        for (let row = 1; row <= rowsSectorCount; row++) {
            let rowNum = row;

            if (rowNum % 2 == 0) {
                placeCharCode = 97;
                placesSum += 2;
                for (let place = 1; place <= placesSum; place++) {
                    placeChar = String.fromCharCode(placeCharCode);
                    console.log(`${sectorChar}${rowNum}${placeChar}`);
                    placeCharCode++;
                    placesCount++;
                }
                placesSum -= 2;
            } else {
                placeCharCode = 97;
                for (let place = 1; place <= placesSum; place++) {
                    placeChar = String.fromCharCode(placeCharCode);
                    placeCharCode++;
                    console.log(`${sectorChar}${rowNum}${placeChar}`);
                    placesCount++;
                }
            }
        }
        rowsSectorCount++;
    }
    console.log(`${placesCount}`);
}


weddingSeats(['B', '3', '2']);
// weddingSeats(['C', '4', '2']); */


/* function weddingSeats(input) {
    let lastSector = input[0];
    let lastSectorNum = lastSector.charCodeAt();
    let rowsSectorCount = Number(input[1]);
    let placesSum = Number(input[2]);
    let placeCharCode = 97;
    let placesCount = 0;

    for (let i = 65; i <= lastSectorNum; i++) {
        let sectorChar = String.fromCharCode(i);

        for (let row = 1; row <= rowsSectorCount; row++) {
            let rowNum = row;

            if (rowNum % 2 !== 0) {
                placeCharCode = 97;
                for (let place = 1; place <= placesSum; place++) {
                    placeChar = String.fromCharCode(placeCharCode);
                    placeCharCode++;
                    console.log(`${sectorChar}${rowNum}${placeChar}`);
                    placesCount++;
                }
            } else {
                placeCharCode = 97;
                placesSum += 2;
                for (let place = 1; place <= placesSum; place++) {
                    placeChar = String.fromCharCode(placeCharCode);
                    console.log(`${sectorChar}${rowNum}${placeChar}`);
                    placeCharCode++;
                    placesCount++;
                }
                placesSum -= 2;  // връщам нечетните редове
            }
        }
        rowsSectorCount++;
    }
    console.log(`${placesCount}`);
}


weddingSeats(['B', '3', '2']);
// weddingSeats(['C', '4', '2']); */

function weddingSeats(input) {
    let lastSector = input[0];
    let lastSectorNum = lastSector.charCodeAt();
    let rowsPerSector = Number(input[1]);
    let placesCount = 0;
    let sector = 65;

    while (sector <= lastSectorNum) {
        let sectorChar = String.fromCharCode(sector);
        let row = 1;

        while (row <= rowsPerSector) {
            let placesSum = Number(input[2]);
            let placeCharCode = 97;

            if (row % 2 == 0) {
                placesSum += 2;
            }

            for (let place = 1; place <= placesSum; place++) {
                placeChar = String.fromCharCode(placeCharCode);
                placeCharCode++;
                console.log(`${sectorChar}${row}${placeChar}`);
            }
            placesCount += placesSum;
            row++;
        }
        rowsPerSector++;
        sector++;
    }
    console.log(`${placesCount}`);
}


weddingSeats(['B', '3', '2']);
// weddingSeats(['C', '4', '2']);