// JavaScript to handle adding products to the cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Create a new list item for the cart
        const cartItem = document.createElement('li');
        cartItem.textContent = `Product ${index + 1}`;
        
        // Add the item to the cart
        cartItemsList.appendChild(cartItem);
    });
});

// JavaScript to handle "Buy Product" buttons (this is just a placeholder)
const buyProductButtons = document.querySelectorAll('.buy-product');

buyProductButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Replace this with your own code for processing purchases
        alert('Product purchased!'); // This is just a placeholder message
    });
});

// Define a variable to hold the cart items
const cart = [];

// Function to add a product to the cart
function gotoCart(productName, price) {
    cart.push({ productName, price });
}

// Function to get the total price of items in the cart
function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
}
