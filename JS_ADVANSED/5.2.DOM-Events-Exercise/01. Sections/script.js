/* function create(words) {
   const content = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', reveal);

      content.appendChild(div);

      function reveal(ev){
         ev.target.children[0].style.display = '';
      }
   }
} */

/* function create(words) {
   const content = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      // div.addEventListener('click', reveal);
      div.addEventListener('click', () => para.style.display = '');

      content.appendChild(div);

      // function reveal(ev){
      //    para.style.display = '';
      // }
   }
} */

function create(words) {
   const content = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', reveal.bind(null, para));


      content.appendChild(div);
   }
   function reveal(para){
      para.style.display = '';
   }
}

/* function create(words) {
   const content = document.getElementById('content');

   for (let word of words){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      div.addEventListener('click', reveal.bind(para));


      content.appendChild(div);
   }
   function reveal(){
      this.style.display = '';
   }
} */