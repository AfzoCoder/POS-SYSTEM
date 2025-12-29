import { createSlice } from "@reduxjs/toolkit";
const getLocalStorage = JSON.parse(localStorage.getItem("cartArray")) || [];

const OrdersgetLocalStorage = JSON.parse(localStorage.getItem("Orders")) || [];

const OrderNumbergetLocalStorage =
  JSON.parse(localStorage.getItem("OrderNumber")) || 1;

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    CartArray: getLocalStorage,
    Remarks:'',
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
        CartItems: [...state.CartArray],
        Discount: action.payload.Discount,
        GrandTotal: action.payload.GrandTotal,
        Payment: action.payload.payment,
        CreatedAt: Date.now(),
        Remarks: action.payload.Remarks});

      state.CartArray = []; //empty the cart after order submit
      state.Remarks = '', // empty the Remarks after order submit
      localStorage.setItem("cartArray", JSON.stringify(state.CartArray));

      localStorage.setItem("Orders", JSON.stringify(state.Orders));
    },
    OrderNumberIncreaser: (state, action) => {
      state.OrderNumber = state.OrderNumber + 1;

      localStorage.setItem("OrderNumber", JSON.stringify(state.OrderNumber));
    },
    addRemarks:(state, action)=>{
      state.Remarks = action.payload
    }
  },
});

export const {
  addInCart,
  deleteFromCart,
  OrderCompleted,
  OrderNumberIncreaser,
  addRemarks
} = CartSlice.actions;
export default CartSlice.reducer;
