function bunnyKill(input) {
    let matrix = [];
    let damageSnowball = 0;
    let killCounter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let currentLine = input[i].split(' ').map(Number);
        matrix.push(currentLine);
    }

    let coordinates = input[input.length - 1].split(' ').map(element => element.split(',').map(Number));

    for (let i = 0; i < coordinates.length; i++) {
        let currentBomb = coordinates[i];
        let bombRow = currentBomb[0];
        let bombCol = currentBomb[1];
        let bombValue = matrix[bombRow][bombCol];

        if (bombValue <= 0) {
            continue;
        }

        // Проверка за валидностна индексите, за да не излизат от матрицата
        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, matrix.length - 1);

        //Обхождане на матрицата
        for (let row = startRow; row <= endRow; row++) {

            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, matrix[row].length - 1);

            for (let col = startCol; col <= endCol; col++) {
                matrix[row][col] -= bombValue;
            }

        }

        // броя експлодиралите зайци на съответнте координати
        killCounter++;
        // смятам сумата на убитите от Snowball зайци, защото те трябва да се сметнат заедно с тези, които са останали живи
        damageSnowball += bombValue;
    }

    // Обхождане на матрицата за пресмятане на сумата от останалите за убиване от Snowball зайци и останалите зайци за убиване, които трябва да унищожи
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) {
                damageSnowball += matrix[row][col];
                killCounter++;
            }
        }
    }
    
    console.log(damageSnowball);
    console.log(killCounter);
}

bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
]);


// bunnyKill(['10 10 10',
//     '10 10 10',
//     '10 10 10',
//     '0,0'
// ]);

/* function bunnyKill(arr) {
 
    let bombCells = arr.pop().split(' ').map(str => str.split(',').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));
   
    let damage = 0;
    let killCounter = 0;
   
    for (let i = 0; i < bombCells.length; i++) {
      let bombRow = bombCells[i][0];
      let bombCol = bombCells[i][1];
      let bombValue = matrix[bombRow][bombCol];
   
      if (bombValue <= 0) {
        continue;
      }
   
      let startRow = Math.max(0, bombRow - 1);
      let endRow = Math.min(bombRow + 1, arr.length - 1);
   
      for (let row = startRow; row <= endRow; row++) {
        let startCol = Math.max(0, bombCol - 1);
        let endCol = Math.min(bombCol + 1, arr[row].length - 1);
   
        for (let col = startCol; col <= endCol; col++) {
          matrix[row][col] -= bombValue;
        }
      }
   
      killCounter++;
      damage += bombValue;
    }
   
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] > 0) {
          damage += matrix[row][col];
          killCounter++;
        }
      }
    }
   
    console.log(damage);
    console.log(killCounter);
  }

  bunnyKill(['5 10 15 20',
          '10 10 10 10',
          '10 15 10 10',
          '10 10 10 10',
'2,2 0,1'
]); */