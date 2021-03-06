//TODO: TAL VEZ HAYA QUE SACAR LAS PROPIEDADES TRAD. , PREMIUM, ETC Y PONER DENTRO DE CADA SABOR LA LINEA, 
//      ASI SE FILTRA POR LA PROPIEDAD INTERNA

import productList from './productList';

const flavorList = [
  {
    name: 'Línea Premium',
    info: {
      screen: 'premium', 
      sizes: ['30ml', '60ml', '120ml'],
      price: [
        {'30ml': 500},
        {'60ml': 900},
        {'120ml': 1700},
      ]
    },
    flavors: [
      {
        name: 'Tony Montana',
        category: 'Tabaquil dulce',
        shortDescription: 'Tabaco dulce - Clon Tribeca',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: 'https://i.pravatar.cc/150?img=3',
        mint: false,
      },
      {
        name: 'Naruto',
        category: 'Postre',
        shortDescription: 'Mezcla perfecta de vainillas y crema',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: 'https://i.pravatar.cc/150?img=Naruto',
        mint: false,
      },
      {
        name: 'Pantera Rosa',
        category: 'Frutal',
        shortDescription: 'Deleitante mix frutal',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: 'https://i.pravatar.cc/150?img=PanteraRosa',
        mint: true,
      },
      {
        name: 'Goku',
        category: 'Postre',
        shortDescription: 'Cremoso sabor a galletitas de vainilla',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: 'https://i.pravatar.cc/150?img=Goku',
        mint: false,
      },
      {
        name: 'El Padrino',
        category: 'Tabaquil seco',
        shortDescription: 'Mezcla de tabaco intenso - Clon Capone',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=ElPadrino',
        mint: true
      }
    ]
  },
  {
    name: 'Línea Tradicional',
    info: {
      screen: 'tradicional',
      sizes: ['30ml', '60ml', '120ml'],
      price: [
        {'30ml': 400},
        {'60ml': 700},
        {'120ml': 1300}
      ],
    },
    flavors: [
      {
        name: 'Optimus Prime',
        category: 'Tabaquil dulce',
        shortDescription: 'Suave tabaco con miel',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Optimus',
        mint: false
      },
      {
        name: 'Dominic Toretto',
        category: 'Tabaquil seco',
        shortDescription: 'Tabaco seco y vainillado',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Toretto',
        mint: true
      },
      {
        name: 'Iron Man',
        category: 'Frutal',
        shortDescription: 'Sandia fresca mentolada',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=IronMan',
        mint: false
      },
      {
        name: 'Willy Wonka',
        category: 'Postre',
        shortDescription: 'Chocolate negro con avellanas',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Wonka',
        mint: false
      },
      {
        name: 'Duende Verde',
        category: 'Postre',
        shortDescription: 'Chocolate con menta',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Duende',
        mint: false
      }
    ]
  },
  {
    name: 'Línea Low Cost',
    info: {
      screen: 'lowCost', 
      sizes: ['60ml'],
      price: [{ '60ml': 400 }]
    },
    flavors: [
      {
        name: 'Cafe y Crema',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Cafe',
        mint: false
      },
      {
        name: 'Uva',
        category: 'Frutal',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Uva',
        mint: false
      },
      {
        name: 'Cola',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Cola',
        mint: false
      },
      {
        name: 'Mentol',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Mentol',
        mint: false
      },
      {
        name: 'Manzana Roja',
        category: 'Frutal',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Manzana',
        mint: false
      }
    ]
  },
  {
    name: 'Línea Nic Salt',
    info: {
      screen: 'nicSalt', 
      sizes: ['30ml'],
      price: [{ '30ml': 1000 }]
    },
    flavors: [
      {
        name: 'Simba',
        category: 'Postre',
        shortDescription: 'Cremoso sabor a capuccino',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=simba',
        mint: false
      },
      {
        name: 'Woody',
        category: 'Frutal',
        shortDescription: 'Intenso sabor a durazno',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=woody',
        mint: false
      },
      {
        name: 'Jafar',
        category: 'Tabaquil seco',
        shortDescription: 'Intenso tabaco seco',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Jafar',
        mint: false
      },
      {
        name: 'Elsa',
        category: 'Postre',
        shortDescription: 'Refrescante mentol',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: 'https://i.pravatar.cc/150?img=Elsa',
        mint: false
      }
    ]
  } 
]

export default flavorList;