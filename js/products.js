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
        description: 'ARROZ, FEIJÃO, MACARRÃO, VERDURA E FAROFA',
        price: 60.00,
        lastPrice: 0,
        img: 'fileparmegiano.jpeg'
    },



    // Tira Gosto
    {
        id: 1,
        type: 2,
        name: 'Carne de Sol trinchada com fritas',
        description: '',
        price: 35.00,
        lastPrice: 0,
        img: 'Carne do sol  trinchada com fritas.png'
    },


    // Sobre Encomenda
    {
        id: 4011,
        type: 3,
        name: 'Frango Caipira (À Cabidela) EN',
        description: '[SOBRE ENCOMENDA] ARROZ, FEIJÃO, MACARRÃO, VERDURA E FAROFA',
        price: 0.00,
        lastPrice: 0,
        img: 'frangoacaipira.jpeg'
    },


    // Porções
    {
        id: 150,
        type: 4,
        name: 'Arroz Branco',
        description: '',
        price: 7.00,
        lastPrice: 0,
        img: 'arrozbranco.jpeg'
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

];
