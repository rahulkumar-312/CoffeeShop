document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("vol");
    const products = document.querySelectorAll(".sku");

    products.forEach((product) => {
        product.classList.add("visible"); // Initially, add 'visible' class to all product divs
    });

    rangeInput.addEventListener("input", function () {
        const filterValue = parseFloat(rangeInput.value);

        products.forEach((product) => {
            const productPrice = parseFloat(product.querySelector("h3").innerText.replace("$", ""));
            if (productPrice <= filterValue) {
                product.classList.add("visible"); // Add 'visible' class
            } else {
                product.classList.remove("visible"); // Remove 'visible' class
            }
        });
    });
    

});


// code for range value only 

const rangeInput = document.getElementById("vol");
const rangeValue = document.getElementById("range-value");

rangeInput.addEventListener("input", function () {
    const filterValue = parseFloat(rangeInput.value);
    rangeValue.textContent = filterValue;
});



document.addEventListener("DOMContentLoaded", function () {
    const cartBadgeElement = document.getElementById('cartBadge');
    const addToCartButtons = document.querySelectorAll('.addtocart');

    // Initialize the cart count
    let cartCount = 0;

    // Function to update the cart badge
    function updateCartBadge() {
        cartBadgeElement.textContent = cartCount;
    }

    // Add click event listeners to all "ADD TO CART" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Increment the cart count when a button is clicked
            cartCount++;
            // Update the cart badge
            updateCartBadge();
            cartBadgeElement.style.opacity = '1';
        });
    });
});





