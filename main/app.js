'use strict';

// Product price
const productPrice = 125;

// Elements
const btnDecreaseQuantity = document.querySelector('.decrease');
const btnIncreaseQuantity = document.querySelector('.increase');
const btnAddToCart = document.querySelector('.add-btn');
const btnCheckout = document.querySelector('.checkout-btn');
const btnRemoveFromCart = document.querySelector('.remove-btn');

const inputQuantity = document.querySelector('.count');
const itemsCountInCart = document.querySelector('.items-count');
const cartQuantity = document.querySelector('.quantity');
const totalPrice = document.querySelector('.total-price');
const fullCart = document.querySelector('.full-cart');
const emptyCart = document.querySelector('.empty-cart');

const thumbnails = document.querySelectorAll('.thumbnails-col');
const activePicture = document.querySelector('.main');

let inputQuantityValue = document.querySelector('.count').value;
let quantity = 0;
let currentQuantity = 0;
let totalPriceInCart = 0;

// Functions
const updateCart = function () {
  if (inputQuantityValue > 0) {
    itemsCountInCart.textContent = currentQuantity;
    itemsCountInCart.style.display = 'block';

    fullCart.style.display = 'block';
    emptyCart.style.display = 'none';

    cartQuantity.textContent = currentQuantity;
  } else if (inputQuantityValue == 0) {
    itemsCountInCart.style.display = 'none';
    fullCart.style.display = 'none';
    emptyCart.style.display = 'block';
  }
};

const calcTotalPrice = function (quantity) {
  currentQuantity += quantity;
  totalPriceInCart += currentQuantity * productPrice;
  totalPrice.textContent = `\$${totalPriceInCart.toFixed(2)}`;
};

const updateQuantity = function (quantity) {
  inputQuantityValue = quantity;
  inputQuantity.value = quantity;
};

// Listeners
btnDecreaseQuantity.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
  }
  updateQuantity(quantity);
});

btnIncreaseQuantity.addEventListener('click', () => {
  quantity++;
  updateQuantity(quantity);
});

btnAddToCart.addEventListener('click', (e) => {
  e.preventDefault();
  if (quantity > 0) {
    calcTotalPrice(quantity);
    updateCart();
    quantity = 0;
    updateQuantity(quantity);
  }
});

btnRemoveFromCart.addEventListener('click', (e) => {
  e.preventDefault();
  quantity = 0;
  currentQuantity = 0;
  totalPriceInCart = 0;
  updateQuantity(quantity);
  updateCart();
});

thumbnails.forEach((pic) => {
  pic.addEventListener('click', showExpanded(image, i));
});
