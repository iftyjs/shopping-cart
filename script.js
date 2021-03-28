// get element from the dom
const firstProductAddButton = document.querySelector('#firstProductAddButton');
const firstProductMinusButton = document.querySelector('#firstProductMinusButton');
const firstProductPrice = document.querySelector('#firstProductPrice');
const firstProductQuantity = document.querySelector('#firstProductQuantity');

const secondProductAddButton = document.querySelector('#secondProductAddButton');
const secondProductMinusButton = document.querySelector('#secondProductMinusButton');
const secondProductPrice = document.querySelector('#secondProductPrice');
const secondProductQuantity = document.querySelector('#secondProductQuantity');

const subTotal = document.querySelector('#subTotal');

// Get first Product Price
const getFirstProductInitialPrice = parseFloat(firstProductPrice.innerText);
let firstProductNumber = firstProductQuantity.value;

// Get second Product Price
const getSecondProductInitialPrice = parseFloat(secondProductPrice.innerText);
let secondProductNumber = firstProductQuantity.value;

// EventHandler for increasing the price
firstProductAddButton.addEventListener('click', function(){
  const getFirstProductCurrentPrice = parseFloat(firstProductPrice.innerText);
  const firstProductTotalPrice = addPrice(getFirstProductInitialPrice, getFirstProductCurrentPrice);

  firstProductPrice.innerText = firstProductTotalPrice;

  firstProductNumber++;
  firstProductQuantity.value = firstProductNumber;

  subTotal.innerText = subTotalAdd(getFirstProductInitialPrice);
});

// EventHandler for increasing the price
secondProductAddButton.addEventListener('click', function(){
  const getSecondProductCurrentPrice = parseFloat(secondProductPrice.innerText);
  const secondProductTotalPrice = addPrice(getSecondProductInitialPrice, getSecondProductCurrentPrice);

  secondProductPrice.innerText = secondProductTotalPrice;

  secondProductNumber++;
  secondProductQuantity.value = secondProductNumber;

  subTotal.innerText = subTotalAdd(getSecondProductInitialPrice);
})

// EventHandler for decreasing the price
firstProductMinusButton.addEventListener('click', function(){
  const getFirstProductCurrentPrice = parseFloat(firstProductPrice.innerText);
  const firstProductTotalPrice = deductPrice(getFirstProductInitialPrice, getFirstProductCurrentPrice);

  firstProductPrice.innerText = firstProductTotalPrice;

  firstProductNumber--;
  firstProductQuantity.value = firstProductNumber;

  subTotal.innerText = subTotalDeduct(getFirstProductInitialPrice)
});

// EventHandler for decreasing the price
secondProductMinusButton.addEventListener('click', function(){
  const getSecondProductCurrentPrice = parseFloat(secondProductPrice.innerText);
  const secondProductTotalPrice = deductPrice(getSecondProductInitialPrice, getSecondProductCurrentPrice);

  secondProductPrice.innerText = secondProductTotalPrice;

  secondProductNumber--;
  secondProductQuantity.value = secondProductNumber;

  subTotal.innerText = subTotalDeduct(getSecondProductInitialPrice);
});

// Adding the price
function addPrice(productInitialPrice, ProductCurrentPrice){
  return productInitialPrice + ProductCurrentPrice;
}

// Deduct the price
function deductPrice(productInitialPrice, ProductCurrentPrice){
  return ProductCurrentPrice - productInitialPrice;
}

// subtotal for add
function subTotalAdd(amountToDeduct){
  let getSubTotal = parseFloat(subTotal.innerText);
  return getSubTotal + amountToDeduct;
}

// subtotal for Deduct
function subTotalDeduct(amountToDeduct){
  let getSubTotal = parseFloat(subTotal.innerText);
  return getSubTotal - amountToDeduct;
}