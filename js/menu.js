const menu = document.querySelector('#showMenu');
const promotions = document.querySelector('#showPromotions');

const showAll = document.querySelector('#showAll');
const showSnacks = document.querySelector('#showSnacks');
const showCombos = document.querySelector('#showCombos');
const showPortions = document.querySelector('#showPortions');
const showDrinks = document.querySelector('#showDrinks');
const showMeals = document.querySelector('#showMeals');
const showSodas = document.querySelector('#showSodas');
const showWater = document.querySelector('#showWater');

let items;

const clearItems = type => {
    items = '';

    if (type === 'normal')
        menu.innerHTML = '';
    else
        promotions.innerHTML = '';
}

const removeClasses = () => {
    showAll.classList.remove('active');
    showSnacks.classList.remove('active');
    showCombos.classList.remove('active');
    showPortions.classList.remove('active');
    showDrinks.classList.remove('active');
    showMeals.classList.remove('active');
    showSodas.classList.remove('active');
    showWater.classList.remove('active');
}

const checkIfHaveItem = items => {
    if (items === '')
        menu.innerHTML = '<p>Nenhum produto encontrado!</p>';
    else
        menu.innerHTML = items;
}

const addItemToArray = prod => {
    let price = prod.price.toFixed(2).toString().replace('.', ',');

    items +=
        `<div class="card">
            <div>
                <div class="cardImg">
                    <img src="./img/${prod.img}" alt="Imagem de um(a) ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span>${price}</span></p>
                <button class="btn" onclick="addToCart(${prod.id})">
                    <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                </button>
            </div>
        </div>`;
}

const showProducts = type => {
    clearItems('normal');

    if (type === 0) {
        products.forEach(prod => {
            if (prod.lastPrice === 0)
                addItemToArray(prod);
        });
    } else {
        products.forEach(prod => {
            if (prod.type === type && prod.lastPrice === 0)
                addItemToArray(prod);
        });
    }

    checkIfHaveItem(items);
    removeClasses();

    if (type === 0)
        showAll.classList.add('active');
    else if (type === 2)
        showSnacks.classList.add('active');
    else if (type === 3)
        showCombos.classList.add('active');
    else if (type === 4)
        showPortions.classList.add('active');
    else if (type === 5)
        showDrinks.classList.add('active');
    else if (type === 1)
        showMeals.classList.add('active');
    else if (type === 6)
        showSodas.classList.add('active');
    else if (type === 7)
        showWater.classList.add('active');
}

const allPromotions = () => {
    clearItems('promotions');

    products.forEach(prod => {
        if (prod.lastPrice && prod.lastPrice != 0) {
            let price = prod.price.toFixed(2).toString().replace('.', ',');
            let lastPrice = prod.lastPrice.toFixed(2).toString().replace('.', ',');

            items +=
            `<div class="card">
                <div>
                    <div class="cardImg">
                        <img src="./img/${prod.img}" alt="Imagem de um(a) ${prod.name}">
                    </div>
                    <h4>${prod.name}</h4>
                    <p>${prod.description}</p>
                </div>
                <div>
                    <p class="lastPrice">R$ <span>${lastPrice}</span></p>
                    <p class="price">R$ <span>${price}</span></p>
                    <button class="btn" onclick="addToCart(${prod.id})">
                        <span class="iconify-inline" data-icon="mdi:cart-plus"></span> Adicionar
                    </button>
                </div>
            </div>`;
        }
    });

    if (items === '')
        promotions.innerHTML = '<p>Nenhuma promoção hoje, tente novamente amanhã! =(</p>';
    else
        promotions.innerHTML = items;
}


showAll.addEventListener('click', function () { showProducts(0); });
showMeals.addEventListener('click', function () { showProducts(1); });
showSnacks.addEventListener('click', function () { showProducts(2); });
showCombos.addEventListener('click', function () { showProducts(3); });
showPortions.addEventListener('click', function () { showProducts(4); });
showDrinks.addEventListener('click', function () { showProducts(5); });
showSodas.addEventListener('click', function () { showProducts(6); });
showWater.addEventListener('click', function () { showProducts(7); });

showProducts(0);
allPromotions();
