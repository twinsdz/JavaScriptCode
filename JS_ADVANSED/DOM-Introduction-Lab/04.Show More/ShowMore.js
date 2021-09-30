/* function showText() {
    document.getElementById("text").style.display = 'inline';
    document.getElementById("more").style.display = 'none';
} */

function showText() {
  const text =  document.getElementById("text");
  text.style.display = 'inline';
  const btn = document.getElementById("more");
  btn.style.display = 'none';
}