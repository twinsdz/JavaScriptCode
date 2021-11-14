function solve() {
   const searchBtn = document.getElementById('searchBtn');
   searchBtn.addEventListener('click', onClick);
   
   function onClick() {
      //1. Select elements
      let inputText = document.getElementById('searchField').value.toLowerCase();
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
      
     // 1.a Clear files from previous search
      rowElements.forEach(el => el.removeAttribute('class'))

      //2. Find matching row elements to text
      //3. Modify style for matching rows
      rowElements
         .forEach((el) => {
           let text = el.textContent.toLowerCase();
           if(text.includes(inputText)){
              el.classList.add('select'); // classList съдържа всички css класове, които са зададени за дадения елемент
           }else {
              el.classList.remove('select');
           }
         });

      //4. Clear txt field
     inputText.value = ''; 
   }
}


/* function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
      
   function onClick() {
      //1. Select elements
      let inputText = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('.container tbody tr'));
      let searchText = inputText.value;

     // 1.a Clear files from previous search
      rowElements.forEach(el => el.removeAttribute('class'))

      //2. Find matching row elements to text
      //3. Modify style for matching rows
      rowElements
         .filter(row => row.textContent.toLowerCase().includes(searchText.toLowerCase()))
         .map(row => row.classList.add('select'))

      //4. Clear txt field
     inputText.value = ''; 
   }
} */