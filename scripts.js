const productList = [
    { id: '1', descricao: 'CREATINA DOUBLE FORCE BODY ACTION (POTE)', valor: 109.90, img: 'img/creadoubleforce150.png' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '2', descricao: 'Produto 2', valor: 119.90, img: 'img/creadoubleforce150.png' },
    { id: '3', descricao: 'Produto 3', valor: 129.90, img: 'produto3.jpg' },
    { id: '4', descricao: 'Produto 4', valor: 139.90, img: 'produto1.jpg' },
    { id: '5', descricao: 'Produto 5', valor: 149.90, img: 'produto2.jpg' }
];

function renderProducts(pRegProd) {
    cRegProd = pRegProd;
    const carousel = document.getElementById(cRegProd);
    carousel.innerHTML = ''; // Limpa o conte˙do atual
    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'produto';
        productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.descricao}">
            <p class="descricao">${product.descricao}</p>
            <p>Valor R$ ${product.valor.toFixed(2)}</p>
            <button class="bgblc" onclick="addToCart('${product.descricao}', '${product.id}')">Comprar</button>
        `;
        carousel.appendChild(productDiv);
    });

    // Ajusta o estilo do carrossel se houver apenas um produto
    if (productList.length === 1) {
        carousel.style.justifyContent = 'center';
    } else {
        carousel.style.justifyContent = 'flex-start';
    }
}

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

function addToCart(productName, productId) {
    const cartItems = document.getElementById('cartItems');
    const li = document.createElement('li');
    li.textContent = productName;
    li.setAttribute('data-id', productId);
    li.setAttribute('data-price', productPrices[productId]);
    cartItems.appendChild(li);
}

function search() {
    const query = document.querySelector('.search-bar-input').value;
    alert('VocÍ pesquisou por: ' + query);
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
    let total = 0;
    const orderId = Math.floor(Math.random() * 1000000); // Gera um n˙mero de pedido aleatÛrio

    cartItems.forEach((item, index) => {
        const itemId = item.getAttribute('data-id');
        const itemPrice = parseFloat(item.getAttribute('data-price'));
        total += itemPrice;
        message += `${index + 1}. ${item.textContent} - ID: ${itemId} - PreÁo: R$ ${itemPrice.toFixed(2)}\n`;
    });

    message += `\nPreÁo Total: R$ ${total.toFixed(2)}\n`;
    message += `N˙mero do Pedido: ${orderId}`;

    const phoneNumber = '5551985070868'; // Substitua pelo n˙mero de telefone desejado (incluindo o cÛdigo do paÌs)
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    closeCart();
}

const productPrices = {
    '1': 109.90,
    '2': 119.90,
    '3': 129.90,
    '4': 139.90,
    '5': 149.90
};

document.addEventListener('DOMContentLoaded', function() {
    renderProducts('CreatinaCarousel');
    renderProducts('WheyCarousel');
    
    
    
});

let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = Array.from(document.querySelectorAll('.produto')).filter(item => item.style.display !== 'none');
    const itemWidth = items[0].offsetWidth;
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function filterProducts() {
    const query = document.querySelector('.search-bar-input').value.toLowerCase();
    const products = document.querySelectorAll('.produto');
    products.forEach(product => {
        const descricao = product.querySelector('.descricao').textContent.toLowerCase();
        if (descricao.indexOf(query) > -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
    // Reset currentIndex and move carousel to the start
    currentIndex = 0;
    moveCarousel(0);
}

function sendEmail() {
    const templateParams = {
        to_name: 'Recipient Name', // Nome do destinatùrio
        from_name: 'Your Name', // Seu nome
        message: 'This is a test message sent from JavaScript!' // Mensagem do e-mail
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert('E-mail enviado com sucesso!');
        }, function(error) {
           console.log('FAILED...', error);
           alert('Falha ao enviar o e-mail.');
        });
}