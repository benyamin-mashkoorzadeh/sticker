import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./components/NotFound.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";

import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/ProductDetails.jsx";
import CartTable from "./components/CartTable.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>
    },
    {
        path: '/products/:productId',
        element: (<MainLayout><ProductDetails/></MainLayout>),
    },
    {
        path: '/cart',
        element: (<MainLayout><CartTable/></MainLayout>),
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer/>
        </Provider>
    </StrictMode>
)
