import { configureStore } from "@reduxjs/toolkit";
import changeReducer from "../reducers/changeReducer";
import getCategoriesReducer from "../reducers/getCategoriesReducer";
import getProductsReducer from "../reducers/getProductsReducer";
import searchProductsReducer from "../reducers/searchProductsReducer";

export const store = configureStore({
    reducer: {
        getCategoriesReducer: getCategoriesReducer,
        getProductsReducer: getProductsReducer,
        changeReducer:changeReducer,
        searchProductsReducer:searchProductsReducer
    }
});