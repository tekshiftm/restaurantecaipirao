// Types:
// 1 = Refeições
// 2 = Tira Gosto
// 3 = Sobre Encomenda
// 4 = Porções
// 5 = Bebidas

const products = [
    // Refeições
    {
        id: 400,
        type: 1,
        name: 'Filé à Parmegiana',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'fileparmegiano.jpeg'
    },
    {
        id: 4001,
        type: 1,
        name: 'Filé à Parmegiana (1/2)',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 45.00,
        lastPrice: 0,
        img: 'fileparmegiano.jpeg'
    },
    {
        id: 4002,
        type: 1,
        name: 'Filé Surpresa',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 70.00,
        lastPrice: 0,
        img: 'filesurpresa.jpeg'
    },
    {
        id: 4004,
        type: 1,
        name: 'Filé Medalhão',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 70.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 4005,
        type: 1,
        name: 'Carne de Sol',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'carnedesol.png'
    },
    {
        id: 4006,
        type: 1,
        name: 'Carne de Sol (1/2)',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 45.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 4007,
        type: 1,
        name: 'Frango à Parmegiana',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'fileparmegiano.jpeg'
    },
    {
        id: 4008,
        type: 1,
        name: 'Frango à Parmegiana (1/2)',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 45.00,
        lastPrice: 0,
        img: 'fileparmegiano.jpeg'
    },
    {
        id: 4009,
        type: 1,
        name: 'Frango ao Queijo',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'frangoaoqueijo.png'
    },
    {
        id: 4010,
        type: 1,
        name: 'Frango Surpresa',
        description: 'ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'filesurpresa.jpeg'
    },


    // Tira Gosto
    {
        id: 1,
        type: 2,
        name: 'Carne de Sol com Batata Frita',
        description: '',
        price: 35.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 2,
        type: 2,
        name: 'Frango ao Queijo',
        description: '',
        price: 35.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 3,
        type: 2,
        name: 'Batata Frita',
        description: '',
        price: 15.00,
        lastPrice: 0,
        img: 'batatafrita.png'
    },

    // Sobre Encomenda
    {
        id: 4011,
        type: 3,
        name: 'Frango Caipira (À Cabidela) EN',
        description: '[SOBRE ENCOMENDA] ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 0.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 4012,
        type: 3,
        name: 'Peixe Frito EN',
        description: '[SOBRE ENCOMENDA] ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 0.00,
        lastPrice: 0,
        img: 'peixefritoen.png'
    },
    {
        id: 4013,
        type: 3,
        name: 'Peixe a Delícia EN',
        description: '[SOBRE ENCOMENDA] ARROZ, FEIJÃO, MACARÃO, VERDURA E FAROFA',
        price: 70.00,
        lastPrice: 0,
        img: 'favicon.png'
    },

    // Porções
    {
        id: 150,
        type: 4,
        name: 'Arroz',
        description: '',
        price: 10.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 151,
        type: 4,
        name: 'Macarrão',
        description: '',
        price: 10.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 152,
        type: 4,
        name: 'Salada',
        description: '',
        price: 8.00,
        lastPrice: 0,
        img: 'favicon.png'
    },
    {
        id: 6001,
        type: 4,
        name: 'Farofa',
        description: '',
        price: 6.00,
        lastPrice: 0,
        img: 'favicon.png'
    },

    // Bebidas
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
];