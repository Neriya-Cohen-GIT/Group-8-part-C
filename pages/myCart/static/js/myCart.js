
document.addEventListener('DOMContentLoaded', function () {
    const cakesData = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsContainer = document.querySelector('.cart-container');
    const totalAmount  = document.getElementById('total-price');



    // Display cart items
    displayCartItems();


    // Function to display cart items
    function displayCartItems() {

        // Clear previous items
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        // Display cakes in the cart
        cakesData.forEach((cake, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cake-name">${cake.name}</div>
               <div class="cake-price">$${cake.price}</div>
                <img src="${cake.image}" alt="${cake.name}" class="cake-image">
                <button class="remove-from-cart-btn" data-index="${index}">Remove from Cart</button> `;
            cartItem.querySelector('.remove-from-cart-btn').addEventListener('click', function () {
                removeFromCart(index);
            });
             totalPrice += parseFloat(cake.price);
            cartItemsContainer.appendChild(cartItem);
        });

    // Calculate total price
    const total = cakesData.reduce((acc, cake) => acc + parseFloat(cake.price), 0);

    // Display total price
    totalAmount.textContent = `$${total.toFixed(2)}`;

    // Store the total amount in local storage
    localStorage.setItem('totalAmount', totalPrice);
    }


    // Function to remove item from cart
    function removeFromCart(index) {
        cakesData.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cakesData));
        displayCartItems();
    }
});
