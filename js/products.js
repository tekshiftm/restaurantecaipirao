// Types:
// 1 = Snack
// 2 = Combos
// 3 = Portions
// 4 = Drinks

const products = [
    {
        id: 400,
        type: 1,
        name: 'Bife à Parmegiana',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'cerveja300ml.png'
    },

    {
        id: 1,
        type: 2,
        name: 'Carne de Sol com Batata',
        description: '',
        price: 35.00,
        lastPrice: 0,
        img: 'burger.png'
    },
    {
        id: 2,
        type: 2,
        name: 'Frango ao Queijo',
        description: '',
        price: 35.00,
        lastPrice: 0,
        img: 'burger.png'
    },
    {
        id: 3,
        type: 2,
        name: 'Batata Frita',
        description: '',
        price: 15.00,
        lastPrice: 0,
        img: 'burger.png'
    },

    {
        id: 101,
        type: 3,
        name: 'Combo Simples',
        description: '2 x-saladas, 2 coca-cola lata e 2 batatas fritas pequenas.',
        price: 30.99,
        lastPrice: 0,
        img: 'combo.png'
    },
    {
        id: 102,
        type: 3,
        name: 'Combo Médio',
        description: '3 x-bacon, 3 coca-cola lata e 3 batatas fritas médias.',
        price: 45.99,
        lastPrice: 50.00,
        img: 'combo.png'
    },
    {
        id: 103,
        type: 3,
        name: 'Combo Grande',
        description: '4 x-tudo, 3 coca-cola lata e 3 batatas fritas grandes.',
        price: 68.99,
        lastPrice: 75.00,
        img: 'combo.png'
    },

    {
        id: 150,
        type: 4,
        name: 'Arroz',
        description: '',
        price: 10.00,
        lastPrice: 0,
        img: 'combo.png'
    },
    {
        id: 151,
        type: 4,
        name: 'Macarrão',
        description: '',
        price: 10.00,
        lastPrice: 0,
        img: 'combo.png'
    },
    {
        id: 152,
        type: 4,
        name: 'Salada',
        description: '',
        price: 8.00,
        lastPrice: 0,
        img: 'combo.png'
    },
    {
        id: 153,
        type: 4,
        name: 'Frango Caipira',
        description: 'Á cabidela',
        price: 0.00,
        lastPrice: 0,
        img: 'combo.png'
    },

    {
        id: 301,
        type: 5,
        name: 'Coca-Cola Lata',
        description: '1 coca-cola lata.',
        price: 5.00,
        lastPrice: 0,
        img: 'cocacola.png'
    },
    {
        id: 302,
        type: 5,
        name: 'Refrigerante 1 litro',
        description: '1 refrigerante - 1 litro',
        price: 8.00,
        lastPrice: 0,
        img: 'refrigerante1litro.png'
    },
    {
        id: 303,
        type: 5,
        name: 'Água sem gás 500ml',
        description: '1 água SEM gás 500ml',
        price: 2.00,
        lastPrice: 0,
        img: 'aguamineral.png'
    },
    {
        id: 304,
        type: 5,
        name: 'Água com gás 500ml',
        description: '1 água COM gás 500ml',
        price: 2.50,
        lastPrice: 0,
        img: 'aguamineral.png'
    },
    {
        id: 305,
        type: 5,
        name: 'Cerveja 300ml',
        description: '1 cerveja 300ml',
        price: 5.00,
        lastPrice: 0,
        img: 'cerveja300ml.png'
    },


]