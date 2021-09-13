/* function solve([input]){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = input.match(pattern);
    console.log(matches.join(' '));
}

solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]); */


function solve(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    
    while((validName = pattern.exec(input)) !== null){
      validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
  }

  solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);

  /* function solve(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [...input.matchAll(pattern)].map(el => el[0]); // Judge не работи с това
    console.log(result);
  }

  solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"); */