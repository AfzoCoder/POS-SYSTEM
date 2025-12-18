import { createSlice } from "@reduxjs/toolkit";
const getLocalStorage = JSON.parse(localStorage.getItem("cartArray")) || [];

const OrdersgetLocalStorage = JSON.parse(localStorage.getItem("Orders")) || [];

const OrderNumbergetLocalStorage =
  JSON.parse(localStorage.getItem("OrderNumber")) || 1;

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    CartArray: getLocalStorage,
    Orders: OrdersgetLocalStorage,
    OrderNumber: OrderNumbergetLocalStorage,
  },

  reducers: {
    addInCart: (state, action) => {
      const findItem = state.CartArray.find(
        (item) =>
          item.name === action.payload.name &&
          item.selectedDrinkSize === action.payload.selectedDrinkSize &&
          item.selectedSize === action.payload.selectedSize
      );

      if (findItem) {
        findItem.quantity += action.payload.quantity;
        console.log(findItem);
      } else {
        state.CartArray.push(action.payload);
      }

      localStorage.setItem("cartArray", JSON.stringify(state.CartArray));
    },
    deleteFromCart: (state, action) => {
      state.CartArray = state.CartArray.filter(
        (item) => item.name !== action.payload.name
      );

      localStorage.setItem("cartArray", JSON.stringify(state.CartArray));
    },
    OrderCompleted: (state, action) => {
      
      state.Orders.push({
        OrderNumber: state.OrderNumber,
        CartItems:[...state.CartArray],
        Discount:action.payload.Discount,
        GrandTotal:action.payload.GrandTotal,
        CreatedAt: Date.now()
      }
      );

      state.CartArray = [];
      localStorage.setItem("cartArray", JSON.stringify(state.CartArray));

      localStorage.setItem("Orders", JSON.stringify(state.Orders));
    },
    OrderNumberIncreaser: (state, action) => {
      console.log('increasing ordering');
      
      state.OrderNumber = state.OrderNumber+1;
      console.log(state.OrderNumber); //DELETE
      

      localStorage.setItem("OrderNumber", JSON.stringify(state.OrderNumber));
    },
  },
});

export const { addInCart, deleteFromCart, OrderCompleted, OrderNumberIncreaser } = CartSlice.actions;
export default CartSlice.reducer;
