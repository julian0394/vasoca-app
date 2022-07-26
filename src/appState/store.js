// ESTO ES PARA SLICES
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import productReducer from './slices/productSlice';

const store = configureStore({ 
  reducer: { 
    cart: cartReducer,
    products: productReducer,
  }
});
    
export default store;

/*
  STORE
  - current screen (boton seleccionado en sidebar + titulo en cabecera)
  - items on cart 
  - products (nombres + tamaños + precios = todo)
  - order (pedido + datos)
  - 

  ACTIONS
  - navegacion de pantallas
  - Agregar item a carrito
  - Restar item a carrito
  - 
*/ 