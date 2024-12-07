function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

function addToCart(product) {
    const cartItems = document.getElementById("cartItems");
    const li = document.createElement("li");
    li.textContent = product;
    cartItems.appendChild(li);
}



function search() {
    const query = document.querySelector('.search-bar-input').value;
    alert('Você pesquisou por: ' + query);
}

function confirmClearCart() {
    document.getElementById('confirmClearCartModal').style.display = 'block';
}

function closeConfirmClearCart() {
    document.getElementById('confirmClearCartModal').style.display = 'none';
}

function clearCart() {
    document.getElementById('cartItems').innerHTML = '';
    closeConfirmClearCart();
    closeCart();
}

function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
}

function finalizeOrder() {
    const cartItems = document.querySelectorAll('#cartItems li');
    let message = 'Pedido finalizado com os seguintes itens:\n';
    cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.textContent}\n`;
    });

    const phoneNumber = '5551985070868'; // Substitua pelo número de telefone desejado (incluindo o código do país)
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    closeCart();
}