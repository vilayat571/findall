import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "../reducers/changeReducer";
import getBrandsReducer from "../reducers/getBrandsReducer";
import getCartReducer from "../reducers/getCartReducer";
import getCategoriesReducer from "../reducers/getCategoriesReducer";
import getDiscountReducer from "../reducers/getDiscountReducer";
import getProductsReducer from "../reducers/getProductsReducer";
import getSellerReducer from "../reducers/getSellerReducer";
import loginReducer from "../reducers/loginReducer";
import searchProductsReducer from "../reducers/searchProductsReducer";

export const store = configureStore({
    reducer: {
        getCategoriesReducer: getCategoriesReducer,
        getProductsReducer: getProductsReducer,
        changeReducer: changeReducer,
        searchProductsReducer: searchProductsReducer,
        getBrandsReducer: getBrandsReducer,
        getSellerReducer: getSellerReducer,
        getDiscountReducer: getDiscountReducer,
        loginReducer: loginReducer,
        getCartReducer: getCartReducer
    }
});