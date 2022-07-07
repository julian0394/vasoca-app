
// MANEJO DE CARRITO
/* Agregar producto */
const addOneToCartAction = (product) => (
  {  
    type: 'ADD_PRODUCT',
    payload: {
      product: product,
    }
  }
);

/* Quitar producto */
const removeOneToCartAction = (product) => (
  {  
    type: 'REMOVE_PRODUCT',
    payload: {
      product: product,
    }
  }
);
