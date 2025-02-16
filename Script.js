document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Update cart count in header
    function updateCartCount() {
        document.getElementById("cart-count").textContent = cart.length;
    }
    
    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const id = product.getAttribute("data-id");
            const name = product.getAttribute("data-name");
            const price = product.getAttribute("data-price");

            cart.push({ id, name, price });
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Display cart items on cart page
    if (document.getElementById("cart-items")) {
        const cartItemsContainer = document.getElementById("cart-items");
        let totalPrice = 0;
        
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(li);
            totalPrice += parseFloat(item.price);
        });

        document.getElementById("total-price").textContent = totalPrice;
    }

    updateCartCount();
});
