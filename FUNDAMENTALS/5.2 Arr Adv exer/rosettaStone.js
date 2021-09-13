function rosettaStone(input) {
  let templateLength = Number(input.shift());
  let templateMatrix = [];

  for (let i = 0; i < templateLength; i++) {
    let line = input.shift().split(' ').map(Number);
    templateMatrix.push(line);
  }

  // превръщане на масив от стрингове в матрица с map()
  let messageMatrix = input.map(x => x.split(' ').map(Number));
  let row = 0;

  // Обхождане на матрица
  // row % templateMatrix.length връщане на реда
  // col % templateMatrix[0].length връщане на колоната

  while (row < messageMatrix.length) {
    let col = 0;
    while (col < messageMatrix[row].length) {
      let templRow = row % templateMatrix.length;
      let templCol = col % templateMatrix[0].length;
      messageMatrix[row][col] += templateMatrix[row % templateMatrix.length][col % templateMatrix[0].length];
      col++;
    }
    row++;
  }

  let message = [];
  for (let row of messageMatrix) {
    for (let el of row) {
      // превъртане на колелото
      el %= 27;
      let char = '';

      if (el === 0) {
        char = ' ';
        message.push(char);
      } else {
        // ASCII таблица toUpperCase()
        let char = String.fromCharCode(64 + el);
        message.push(char);
      }
    }
  }
  console.log(message.join('').trim());
}

rosettaStone(['2',
  '59 36',
  '82 52',
  '4 18 25 19 8',
  '4 2 8 2 18',
  '23 14 22 0 22',
  '2 17 13 19 20',
  '0 9 0 22 22'
]);

// rosettaStone(['2',
//   '31 32',
//   '74 37',
//   '19 0 23 25',
//   '22 3 12 17',
//   '5 9 23 11',
//   '12 18 10 22'
// ]);


/* function rosettaStone(input) {
  let templateMatrixLength = Number(input.shift());
  let templateMatrix = [];

  for (let i = 0; i < templateMatrixLength; i++) {
    templateMatrix.push(input.shift().split(" ").map(Number));
  }

  let encodedMatrix = [];

  for (let i = 0; i < input.length; i++) {
    encodedMatrix.push(input[i].split(" ").map(Number));
  }

  for (let i = 0; i < encodedMatrix.length; i++) {
    for (let j = 0; j < encodedMatrix[i].length; j++) {
      encodedMatrix[i][j] += templateMatrix[i % templateMatrix.length][j % templateMatrix[0].length];
      encodedMatrix[i][j] %= 27;

      if (encodedMatrix[i][j] == 0) {
        encodedMatrix[i][j] = " ";
      } else {
        encodedMatrix[i][j] = String.fromCharCode(64 + encodedMatrix[i][j]);
      }
    }
  }

  let encodedMessage = "";

  for (let row of encodedMatrix) {
    for (let char of row) {
      encodedMessage += char;
    }
  }

  console.log(encodedMessage.trim());
}

rosettaStone(['2',
  '59 36',
  '82 52',
  '4 18 25 19 8',
  '4 2 8 2 18',
  '23 14 22 0 22',
  '2 17 13 19 20',
  '0 9 0 22 22'
]);

// rosettaStone(['2',
//   '31 32',
//   '74 37',
//   '19 0 23 25',
//   '22 3 12 17',
//   '5 9 23 11',
//   '12 18 10 22'
// ]); */