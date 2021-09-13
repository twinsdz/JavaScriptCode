/* function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el)); // приема функция за всеки един елемент
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
  }

  sortArray(["alpha", "beta", "gamma"]); */

/* function sortArray(input) {
  const twoCriteriaSort = (cur, next) => cur.length - next.length || cur.localeCompare(next);
  input.sort(twoCriteriaSort);
  console.log(input.join('\n'));
}

sortArray(["alpha", "beta", "gamma"]); */

function sortArray(input) {
  input.sort((a, b) => {

    let firstCriteria = a.length - b.length;
    let secondCriteria = a.localeCompare(b);

    return firstCriteria || secondCriteria;
  });

  console.log(input.join('\n'));
}

sortArray(["alpha", "beta", "gamma"]);

/* function sortArray(input) {
  // сортиране по два критерия
   input.sort ((current, next) => current.length - next.length || current.localeCompare(next));
   console.log(input.join('\n'));
}

sortArray(["alpha", "beta", "gamma"]); */