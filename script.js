

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render products
function renderProducts() {
  const productList = document.getElementById('product-list');
  products.forEach(product => {
    const li = document.createElement('li');
    li.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return; // Ensure the product exists

  // Retrieve the current cart from session storage or initialize an empty array
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Add the new product to the cart
  cart.push(product);

  // Save the updated cart back to session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart display
  renderCart();
}

// Function to render the cart
function renderCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear the current cart display

  // Retrieve the cart from session storage
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Render each item in the cart
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to clear the cart
function clearCart() {
  // Remove the cart data from session storage
  sessionStorage.removeItem('cart');


  renderCart();
}


document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

renderProducts();
renderCart();