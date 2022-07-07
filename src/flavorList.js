//TODO: TAL VEZ HAYA QUE SACAR LAS PROPIEDADES TRAD. , PREMIUM, ETC Y PONER DENTRO DE CADA SABOR LA LINEA, 
//      ASI SE FILTRA POR LA PROPIEDAD INTERNA

const flavorList = {
  premium: {
    info: {
      name: 'Línea Premium',
      screen: 'premium', 
      sizes: ['30ml', '60ml', '120ml'],
      price: {
        '30ml': 500,
        '60ml': 900,
        '120ml': 1700
      }
    },
    flavors: [
      {
        name: 'Tony Montana',
        category: 'Tabaquil dulce',
        shortDescription: 'TABACO DULCE - CLON TRIBECA',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: '',
        mint: false,
      },
      {
        name: 'Naruto',
        category: 'Postre',
        shortDescription: 'MEZCLA PERFECTA DE VAINILLAS Y CREMA',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: '',
        mint: false,
      },
      {
        name: 'Pantera Rosa',
        category: 'Frutal',
        shortDescription: 'DELEITANTE MIX FRUTAL',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: '',
        mint: true,
      },
      {
        name: 'Goku',
        category: 'Postre',
        shortDescription: 'CREMOSO SABOR A GALLETITAS DE VAINILLA',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan. Nam pharetra arcu id blandit hendrerit. Aenean id imperdiet sapien.',
        img: '',
        mint: false,
      },
      {
        name: 'El Padrino',
        category: 'Tabaquil seco',
        shortDescription: 'TABACO INTENSO - CLON CAPONE',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: true
      }
    ]
  },
  tradicional: {
    info: {
      name: 'Línea Tradicional',
      screen: 'tradicional', 
      sizes: ['30ml', '60ml', '120ml'],
      price: {
        '30ml': 400,
        '60ml': 700,
        '120ml': 1300
      },
    },
    flavors: [
      {
        name: 'Optimus Prime',
        category: 'Tabaquil dulce',
        shortDescription: '',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Dominic Toretto',
        category: 'Tabaquil seco',
        shortDescription: 'TABACO SECO',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: true
      },
      {
        name: 'Iron Man',
        category: 'Frutal',
        shortDescription: 'SANDIA FRESCA',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Willy Wonka',
        category: 'Postre',
        shortDescription: 'CHOCOLATE NEGRO CON AVELLANAS',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Duende Verde',
        category: 'Postre',
        shortDescription: 'CHOCOLATE MENTOLADO',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      }
    ]
  },
  lowCost: {
    info: {
      name: 'Línea Low Cost',
      screen: 'lowCost', 
      sizes: ['60ml'],
      price: { '60ml': 400 }
    },
    flavors: [
      {
        name: 'Cafe y Crema',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Uva',
        category: 'Frutal',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Cola',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Mentol',
        category: 'Postre',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Manzana Roja',
        category: 'Frutal',
        shortDescription: null,
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      }
    ]
  },
  nicSalt: {
    info: {
      name: 'Línea Nic Salt',
      screen: 'nicSalt', 
      sizes: ['30ml'],
      price: { '30ml': 1000 }
    },
    flavors: [
      {
        name: 'Simba',
        category: 'Postre',
        shortDescription: 'CREMOSO SABOR A CAPUCCINO',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Woody',
        category: 'Frutal',
        shortDescription: 'INTENSO SABOR A DURAZNO',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: '',
        category: '',
        shortDescription: '',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Jafar',
        category: 'Tabaquil seco',
        shortDescription: 'INTENSO TABACO SECO',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      },
      {
        name: 'Elsa',
        category: 'Postre',
        shortDescription: 'REFRESCANTE MENTOL',
        longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum posuere pretium. Suspendisse feugiat ornare nunc quis vestibulum. Proin iaculis ex non ante vulputate accumsan.',
        img: '',
        mint: false
      }
    ]
  } 
}

export default flavorList;