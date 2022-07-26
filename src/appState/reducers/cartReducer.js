/*
* Maneja acciones:
*   - Agregar un item al carrito
*   - Eliminar un item del carrito
*   - 
*/
// const initialState = {
//   numberOfOrders: 0,
//   orderList: []
// }

// export const cartReducer = (state = initialState, action) => {
//   switch (action) {
//     case 'cart/add':
//       return {
//         ...state,
//         numberOfOrders: numberOfOrders + 1,
//         orderList: [...orderList, action.payload]
//       };

//     case 'cart/remove':
//       return {
//         ...state,
//         numberOfOrders: numberOfOrders - 1,
//         orderList: orderList.filter( order => order.id !== action.payload.id)
//       };
  
//     default:
//       return state;
//   }
// }