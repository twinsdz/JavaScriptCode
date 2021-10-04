function solve() {
  function onClick(ev) {

    if (ev.target.textContent.trim() === 'Add') {
      let product = ev.target.parentElement.parentElement;
      let name = product.querySelector('.product-details .product-title').textContent;
      let money = Number(product.querySelector('.product-line-price').textContent);

      result.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`;

      Object.keys(data).includes(name) ? data[name] += money : data[name] = money;

    } else if (ev.target.textContent === 'Checkout') {
      let list = Object.keys(data).join(', ');
      // if checkout is clicked without added products
      list === '' ? totalPrice = 0 : totalPrice = Object.values(data).reduce((x, y) => x + y);

      result.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`

      Array.from(document.querySelectorAll('button')).map(x => x.disabled = true);
    }
  }

  let result = document.getElementsByTagName('textarea')[0];
  document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
  let data = {};
}


/* function solve() {
  document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
  document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);
  const cart = [];
  const output = document.getElementsByTagName('textarea')[0];
  output.value = '';


  function onClick(ev) {
    if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
      const product = ev.target.parentNode.parentNode;
      const name = product.querySelector('.product-title').textContent;
      const price = Number(product.querySelector('.product-line-price').textContent);

      cart.push({
        name,
        price
      });
      output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    }
  }

  function checkout() {
    const products = new Set();
    cart.forEach(product => products.add(product.name));

    const total = cart.reduce((t, curr) => t + curr.price, 0);
    output.value += `You bought ${Array.from(products.keys()).join(' ')} for ${total.toFixed(2)}.`;
  }
} */