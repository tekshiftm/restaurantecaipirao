// Getting from HTML
const showItems = document.querySelector('#showItems') // Left
// Right
const showAllItemsValue = document.querySelector('#showAllItemsValue')
const showDelivery = document.querySelector('#showDelivery')
const showDiscount = document.querySelector('#showDiscount')
const showTotal = document.querySelector('#showTotal')
const inputPromotionCode = document.querySelector('#promotionCode')
const btnAddPromotionCode = document.querySelector('#addPromotionCode')
const btnWantDelivery = document.querySelector('#wantDelivery')
const btnDontWantDelivery = document.querySelector('#dontWantDelivery')
const btnGenerateOrder = document.querySelector('#generateOrder')

// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Items
let cart
let itemsToShow
let allItemsValue
let deliveryValue = 0
let discountValue = 0
const promotionCode = 'easteregg'

// Função para obter a saudação com base no horário
const getGreeting = () => {
    const currentHour = new Date().getHours()
    
    if (currentHour >= 5 && currentHour < 12) {
        return "Bom dia!"
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Boa tarde!"
    } else {
        return "Boa noite!"
    }
}

// Functions
const generateCart = () => {
    const cartItems = getCart()

    cart = []
    allItemsValue = 0

    cartItems.forEach(prod => {
        const item = products.find(element => element.id === prod.id)
        item.qtd = prod.qtd

        allItemsValue += item.price * item.qtd
        cart.push(item)
    })

    return cart
}

const addItemToItemsToShow = prod => {
    const price = (prod.price * prod.qtd).toFixed(2).toString().replace('.', ',')

    itemsToShow += `
    <div class="item">
        <img src="../img/${prod.img}" alt="Imagem de um(a) ${prod.name}">
        <div>
            <p class="title">${prod.name}</p>
            <p>${prod.description}</p>
            <div class="bottom">
                <div class="counter">
                    <button onclick="remItem(${prod.id})">-</button>
                    <input type="text" value="${prod.qtd}" disabled>
                    <button onclick="addItem(${prod.id})">+</button>
                </div>
                <p class="price">R$ <span>${price}</span></p>
            </div>
        </div>
    </div>
    <hr>`
}

const addItem = id => {
    const cartItems = getCart()
    const newCartItems = []

    cartItems.forEach(item => {
        if (item.id === id)
            newCartItems.push({ id: item.id, qtd: item.qtd + 1 })
        else
            newCartItems.push({ id: item.id, qtd: item.qtd })
    })

    setCart(newCartItems)
    showAddItemNotification() // Exibir notificação ao adicionar item
    init()
}

const remItem = id => {
    const cartItems = getCart()
    const newCartItems = []
    let itemRemoved = false // Variável para controlar se o item foi removido

    cartItems.forEach(item => {
        if (item.id === id && item.qtd > 1) {
            newCartItems.push({ id: item.id, qtd: item.qtd - 1 })
        } else if (item.id === id && item.qtd <= 1) {
            itemRemoved = true // Marca que um item foi completamente removido
        } else {
            newCartItems.push({ id: item.id, qtd: item.qtd })
        }
    })

    setCart(newCartItems)
    init()

    // Exibe a notificação somente se um item foi removido
    if (itemRemoved) showItemRemovedNotification()
}

const chooseDelivery = option => {
    if (option) {
        btnWantDelivery.classList.add('active')
        btnDontWantDelivery.classList.remove('active')

        deliveryValue = 7.00
    } else {
        btnWantDelivery.classList.remove('active')
        btnDontWantDelivery.classList.add('active')

        deliveryValue = 0
    }

    init()
}

const addDiscount = () => {
    const code = inputPromotionCode.value.trim().toLowerCase()

    if (code === promotionCode) {
        discountValue = 15
        appliedCode.showToast()

        init()
    } else showCodeNotFoundNotification()
}

const init = () => {
    const generatedCart = generateCart()
    generatedCart.length > 0 && generatedCart.sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)

    itemsToShow = ''
    showItems.innerHTML = ''

    if (generatedCart.length > 0)
        generatedCart.forEach(data => addItemToItemsToShow(data))
    else
        itemsToShow = '<p>Você ainda não adicionou itens no carrinho.</p>'

    showOnPage()
}

const showOnPage = () => {
    showItems.innerHTML = itemsToShow

    const totalValue = allItemsValue + deliveryValue
    showAllItemsValue.innerHTML = 'R$ ' + allItemsValue.toFixed(2).toString().replace('.', ',')
    showDelivery.innerHTML = '+ R$ ' + deliveryValue.toFixed(2).toString().replace('.', ',')
    showDiscount.innerHTML = '- R$ ' + ((totalValue * discountValue) / 100).toFixed(2).toString().replace('.', ',')
    showTotal.innerHTML = 'R$ ' + (totalValue - ((totalValue * discountValue) / 100)).toFixed(2).toString().replace('.', ',')
}

// Obtendo o campo de nome do usuário e o campo de observação/adicional
const inputUserName = document.querySelector('#userName')
const inputUserObservation = document.querySelector('#userObservation')

// Função para gerar o pedido
const generateOrder = () => {
    const generatedCart = generateCart()

    if (generatedCart.length === 0) {
        return showNoItemsInCartNotification()
    }

    // Captura o nome do usuário e a observação/adicional
    const userName = inputUserName.value.trim()
    const userObservation = inputUserObservation.value.trim()

    // Verifica se o nome foi inserido
    if (!userName) {
        return showNameRequiredNotification()
    }

    // Mensagem do pedido
    let message = `*Pedido de ${userName}:* \n`  // Incluindo o nome do usuário
    message += `${getGreeting()} Gostaria de encomendar:\n\n` // Saudação dinâmica

    generatedCart.length > 0 && generatedCart.sort((a, b) => a.type < b.type ? -1 : a.type > b.type ? 1 : 0)

    generatedCart.forEach(item => {
        message += '- ' + item.qtd + 'x ' + item.name + '\n'
    })

    if (discountValue > 0) message += `\nCupom aplicado: ${promotionCode}`
    if (deliveryValue > 0)
        message += '\n*Forma de entrega:* Delivery'
    else
        message += '\n*Forma de entrega:* Retirada no local'

    // Adiciona a observação/adicional, se houver
    if (userObservation) {
        message += `\n\n*Observações/Adicionais:* ${userObservation}`  // Se houver observação, inclui na mensagem
    }

    // Adiciona o total no final da mensagem
    message += `\n\n*Total: R$ ${(allItemsValue + deliveryValue - ((allItemsValue + deliveryValue) * discountValue / 100)).toFixed(2).toString().replace('.', ',')}*`

    // Encodar mensagem para URL
    const encodedMessage = encodeURIComponent(message)

    // Abrir o WhatsApp Web com a mensagem pré-preenchida
    window.open(`https://wa.me/5588999665156?text=${encodedMessage}`, '_blank')
}



const showNoItemsInCartNotification = () => {
    Toastify({
        text: "Não é possível gerar pedido sem itens.",
        duration: 1500,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#FF7F0A",
        }
    }).showToast()
}

// Função de notificação caso o nome não tenha sido preenchido
const showNameRequiredNotification = () => {
    Toastify({
        text: "Por favor, insira seu nome antes de gerar o pedido.",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "#FF7F0A",
        }
    }).showToast()
}

// Adicionando o evento para o botão de gerar pedido
btnGenerateOrder.addEventListener('click', generateOrder)

btnAddPromotionCode.addEventListener('click', addDiscount)
btnWantDelivery.addEventListener('click', () => chooseDelivery(true))
btnDontWantDelivery.addEventListener('click', () => chooseDelivery(false))
btnGenerateOrder.addEventListener('click', generateOrder)

init()
