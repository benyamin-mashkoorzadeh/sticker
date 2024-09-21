import {configureStore} from "@reduxjs/toolkit";
import {productApi} from "../slices/productApi";
import productsReducer, {fetchProducts} from '../slices/productSlice'
import cartReducer, {getTotals, populateCart} from '../slices/cartSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)

})

// store.dispatch(fetchProducts())
store.dispatch(productApi.endpoints.getProducts.initiate())
store.dispatch(populateCart)
store.dispatch(getTotals())