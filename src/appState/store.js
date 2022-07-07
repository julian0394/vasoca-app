
import { configureStore } from '@reduxjs/toolkit';
import routeReducer from './slices/routeSlice';

const store = configureStore({ 
  reducer: { 
    route: routeReducer,
    // order: orderReducer,
  }
});

export default store;

/*
  STORE
  - actual screen (boton seleccionado en sidebar + titulo en cabecera)
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