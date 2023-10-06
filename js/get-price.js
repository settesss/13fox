function getActualPrice() {
  var rangeInput = document.getElementById('range__line');
  var price = document.getElementById('price__actual');

  var actualPrice = new Intl.NumberFormat('en').format(rangeInput.value);
  price.innerHTML = `${actualPrice} руб.`;
}