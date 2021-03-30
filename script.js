document.querySelector('#firstProductAddButton').addEventListener('click', function(){
  productCount(true, 'phone');
});

document.querySelector('#firstProductMinusButton').addEventListener('click', function(){
  productCount(false, 'phone');
});
document.querySelector('#secondProductAddButton').addEventListener('click', function(){
  productCount(true, 'case');
});
document.querySelector('#secondProductMinusButton').addEventListener('click', function(){
  productCount(false, 'case');
});

function productCount(isIncreased, product){
  const productInput = document.querySelector(`#${product}Quantity`);
  let productCount = parseInt(productInput.value);
  if(isIncreased){
    productCount++;
  }
  if(!isIncreased && productCount > 0){
    productCount--;
  }
  productInput.value = productCount;

  let currentProductPrice = 0;
  if(product == 'phone'){
    currentProductPrice = productCount * 100;
  }
  if(product == 'case'){
    currentProductPrice = productCount * 50;
  }
  document.querySelector(`#${product}Price`).innerText =  `$${currentProductPrice}`;
  total();
}

function total(){
  const phoneQuantity = inputField('phone');
  const caseQuantity = inputField('case');

  const subTotal = (phoneQuantity * 100) + (caseQuantity * 50);
  document.querySelector('#sub-total').innerText = '$' + subTotal;

  const tax = Math.round(subTotal * .01);
  document.querySelector('#tax').innerText = '$' + tax;

  const grandTotal = subTotal + tax;
  document.querySelector('#grand-total').innerText = '$' + grandTotal;
}

function inputField(product){
  const productInput = document.querySelector(`#${product}Quantity`);
  const productQuantity = parseInt(productInput.value);
  return productQuantity;
}