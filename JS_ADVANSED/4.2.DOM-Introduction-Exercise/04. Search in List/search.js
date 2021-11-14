function search() {
   const list = Array.from(document.getElementsByTagName('li'));
   // const list = Array.from(document.querySelectorAll('ul li'));
   const text = document.getElementById('searchText').value;
   const result = document.getElementById('result');

   let matches = 0;

   list.forEach(el => {
      if (el.textContent.includes(text)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matches++;
      } else {
         el.style.fondWeight = 'normal';
         el.style.textDecoration = '';
      }
   });

   result.textContent = `${matches} matches found`;

}