function solve() {
  const firstParam = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  const splited = firstParam.split(" ");

  let resultStr = '';

  if (namingConvention == 'Camel Case') {
    resultStr += splited[0].toLowerCase();

    for (let i = 1; i < splited.length; i++) {
      let el = splited[i][0].toUpperCase();
      let currentStr = splited[i].toLowerCase().slice(1);
      resultStr += el + currentStr;
    }
    
  } else if (namingConvention == 'Pascal Case') {

    for (let i = 0; i < splited.length; i++) {
      let el = splited[i][0].toUpperCase();
      let currentStr = splited[i].toLowerCase().slice(1);
      resultStr += el + currentStr;
    }

  } else {
    result.textContent = "Error!";
    return;
  }

  result.textContent = resultStr;
}