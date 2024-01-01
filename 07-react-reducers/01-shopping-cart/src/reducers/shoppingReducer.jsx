import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      // buscamos en la lista de productos el id que nos envian y si conincide con algun id de la lista
      // lo almacenamos en una variable como un objeto
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      // buscamos en el arreglo del carrito y si uno de los items de carrito conincide con el id que nos envio el usuario
      // lo almacenamos en una variable, sino la variable queda nula
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? // si el item que recibo del usuario existe en mi lista de carrito
          // duplico el estado y aumento en 1 la propiedad quantity
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : // si el item que recibo del usuario NO existe en mi lista de carrito
          // agrego el nuevo item e inicializo en 1 la propiedad quantity
          { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      // buscamos en la lista del carrito el id que nos envia el usuario para eliminar
      // y lo guardamos en una variable
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? // si la prop quantity del id que nos envia el usuario es mayor que 1
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? // restamos en 1 la prop quantity del item del carrito
                  { ...item, quantity: item.quantity - 1 }
                : // si el id que nos envia el usuario no existe, se siguen mostrando los items existentes en el carrito
                  item
            ),
          }
        : // si la prop quantity del id que nos envia el usuario NO es mayor que 1
          // y el id que nos envia el usuario existe en el carrito
          // eliminamos el item de nuestro carrito
          {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        // si el id que nos envia el usuario existe en el carrito
        // eliminamos el item de nuestro carrito
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

    default:
      return state;
  }
}
