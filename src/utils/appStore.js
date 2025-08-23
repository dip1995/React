const { configureStore } = require("@reduxjs/toolkit");
const cartReducer = require("./cartSlice").default;

const appStore = configureStore({
   reducer : {
    cart : cartReducer
   }
})

export default appStore;