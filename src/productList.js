
const productList = [ 
  {
    id: 1,
    name: 'Línea Premium',
    route: '/premium', 
    screen: 'premium', 
    price: {
      '30ml': 500,
      '60ml': 900,
      '120ml': 1700,
    },
    disabled: false,
  },
  {
    id: 2,
    name: 'Línea Tradicional',
    route: '/tradicional', 
    screen: 'tradicional', 
    price: {
      '30ml': 400,
      '60ml': 700,
      '120ml': 1300,
    },
    disabled: false,
  },
  {
    id: 3,
    name: 'Línea Low Cost',
    route: '/low-cost', 
    screen: 'lowCost', 
    price: {
      '60ml': 400,
    },
    disabled: false,
  },
  {
    id: 4,
    name: 'Línea Nic Salt',
    route: '/nic-salt', 
    screen: 'nicSalt', 
    price: {
      '30ml': 1300,
    },
    disabled: false,
  },
  {    
    id: 5,
    name: 'Insumos',
    route: '/insumos', 
    screen: 'insumos', 
    price: {
  
    },
    disabled: true,
  },  
];

// const precioLiquidos = [
//   {
//     linea: 'premium',
//     tamanos: ['30ml', '60ml', '120ml'],
//     precio: [500, 900, 1700],
//   },
//   {
//     linea: 'tradicional',
//     tamanos: ['30ml', '60ml', '120ml'],
//     precio: [400, 700, 1300],
//   },
//   {
//     linea: 'low cost nacional',
//     tamanos: ['60ml'],
//     precio: [400],
//   },
// ]

export default productList;