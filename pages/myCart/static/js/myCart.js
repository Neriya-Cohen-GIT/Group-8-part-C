document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.querySelector('.cart-container');
    const totalAmount = document.getElementById('total-price');

    // Function to fetch cart items from the server
    function fetchCartItems() {
        fetch('/cart_items')
            .then(response => response.json())
            .then(data => {
                // Display the fetched cart items
                displayCartItems(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Function to display cart items
    function displayCartItems(cartItems) {
        // Clear previous items
        cartItemsContainer.innerHTML = '';
        let totalPrice = 0;

        // Display cakes in the cart
        cartItems.forEach((item, index) => {
            item._id = undefined;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="cake-name">${item.name}</div>
                <div class="cake-price">$${item.price}</div>
                <img src="${item.image}" alt="${item.name}" class="cake-image">
                <button class="remove-from-cart-btn" data-id="${item._id}">Remove from Cart</button>`;
            cartItem.querySelector('.remove-from-cart-btn').addEventListener('click', function () {
                removeFromCart(item._id);
            });
            totalPrice += parseFloat(item.price);
            cartItemsContainer.appendChild(cartItem);
        });

        // Display total price
        totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Function to remove item from cart
    function removeFromCart(itemId) {
        // Send a request to the server to remove the item from the user's cart in the database
        fetch(`/remove_from_cart/${itemId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Refresh the cart items
                    fetchCartItems();
                } else {
                    console.error('Failed to remove item from cart.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Initial fetch of cart items
    fetchCartItems();
});
