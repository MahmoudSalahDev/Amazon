import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../Features/authSlice";
import { productsSlice } from "../Features/productsSlice";
import { productDetailsSlice } from "../Features/productDetailsSlice";
import { categoriesSlice } from "../Features/categoriesSlice";
import { wishlistSlice } from "../Features/wishListSlice";
import { CartSlice } from "../Features/CartSlice";

export default configureStore({
  reducer: {
    userInfo: authSlice.reducer,
    products: productsSlice.reducer,
    productDetails: productDetailsSlice.reducer,
    categories: categoriesSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart: CartSlice.reducer,
  },
});
