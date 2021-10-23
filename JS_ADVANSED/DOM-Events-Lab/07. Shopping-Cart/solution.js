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
  const output = document.querySelector('textarea');
  const cart = [];

  document.querySelector('.shopping-cart').addEventListener('click', onClick);

  document.querySelector('.checkout').addEventListener('click', onCheckOut);


  function onClick(event) {
     if (event.target.tagName == 'BUTTON' && event.target.className == 'add-product') {

        const product = event.target.parentNode.parentNode;
        let price = Number(product.querySelector('.product-line-price').textContent);
        let title = product.querySelector('.product-title').textContent;

        cart.push({
           title,
           price
        });
        output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
     }
  }

  function onCheckOut() {
     const result = cart.reduce((acc, item) => {
        acc.items.push(item.title);
        acc.total += item.price;
        return acc;
     }, { items: [], total: 0 });
     
     output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`
     disableButtons();
  }

  function disableButtons() {
     let buttons = Array.from(document.querySelectorAll('button'));
     buttons.forEach(button => button.disabled = true);
  }

} */