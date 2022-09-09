import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "../reducers/changeReducer";
import getBrandsReducer from "../reducers/getBrandsReducer";
import getCategoriesReducer from "../reducers/getCategoriesReducer";
import getProductsReducer from "../reducers/getProductsReducer";
import getSellerReducer from "../reducers/getSellerReducer";
import searchProductsReducer from "../reducers/searchProductsReducer";

export const store = configureStore({
    reducer: {
        getCategoriesReducer: getCategoriesReducer,
        getProductsReducer: getProductsReducer,
        changeReducer:changeReducer,
        searchProductsReducer:searchProductsReducer,
        getBrandsReducer:getBrandsReducer,
        getSellerReducer:getSellerReducer
    }
});