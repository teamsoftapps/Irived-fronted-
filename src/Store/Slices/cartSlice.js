import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  items: [],
  favourites: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },

    addTOcart: (state, action) => {
      const newItem = action.payload;

      const checkItem = state.items.find(item => {
        item.id === newItem.id;
      });

      if (!checkItem) {
        state.items.push(newItem);
      } else {
        if (newItem.quantity < checkItem.quantity) {
          checkItem.quantity = newItem.quantity;
        } else if (newItem.quantity > checkItem.quantity) {
          checkItem.quantity = newItem.quantity;
        }
      }
    },

    removeFROMCart: (state, action) => {
      const data = action.payload;
      state.items = state.items.filter(item => item.id !== data.id);
    },

    totalPrice: (state, action) => {
      const Sum = state.items.reduce(
        (accumulate, item) => accumulate + item.price * item.quantity,
        0,
      );
      state.totalPrice = Sum;
    },

    addTOfavourite: (state, action) => {
      const newFav = action.payload;

      const checkFav = state.favourites.find(item => {
        item.id === newFav.id;
      });

      if (!checkFav) {
        state.favourites = [...state.favourites, action.payload];
      }
    },

    removeFROMfav: (state, action) => {
      const removeFav = action.payload;

      state.favourites = state.favourites.filter(
        item => item.id !== removeFav.id,
      );
    },

    IncrementCartQuantity: (state, action) => {
      let Inc = action.payload;
      const AddInc = state.items.find(item => Inc.id === item.id);
      AddInc.quantity += 1;
    },

    DecrementCartQuantity: (state, action) => {
      const Dec = action.payload;

      const DecQuantity = state.items.find(item => Dec.id === item.id);
      DecQuantity -= Dec.id;
    },
  },
});
export const {
  addTOcart,
  removeFROMCart,
  addTOfavourite,
  removeFROMfav,
  DecrementCartQuantity,
  IncrementCartQuantity,
  getProducts,
  totalPrice,
} = cartSlice.actions;
