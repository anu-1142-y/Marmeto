// Sample API response (you can replace this with an actual API call)
const cartData = {
    "original_total_price": 250000,
    "items": [
        {
            "id": 49839206859071,
            "quantity": 1,
            "title": "Asgaard sofa",
            "price": 25000000,
            "line_price": 25000000,
            "final_line_price": 25000000,
            "image": "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
            "product_description": "The Asgaard sofa offers unparalleled comfort and style with its sleek design and high-quality materials.",
        }
    ],
    "currency": "INR"
};

// Format currency in Indian Rupees
const formatCurrency = (price) => `₹${(price / 100).toLocaleString('en-IN')}`;

// Display cart items dynamically
const displayCartItems = () => {
    const cartItemsList = document.getElementById('cart-items-list');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    let subtotal = 0;

    cartData.items.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="product-img">
            <div class="product-details">
                <h3>${item.title}</h3>
                <p>${item.product_description}</p>
                <p>Price: ${formatCurrency(item.price)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: ${formatCurrency(item.line_price)}</p>
            </div>
        `;

        cartItemsList.appendChild(cartItem);
        subtotal += item.line_price;
    });

    subtotalElement.innerText = formatCurrency(subtotal);
    totalElement.innerText = formatCurrency(subtotal);
};

displayCartItems();
