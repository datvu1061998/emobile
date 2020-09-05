import React from 'react'
import HomePage from './pages/home-page/HomePage'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import ShopPage from './pages/shop-page/ShopPage';
import SingleProductPage from './pages/single-product-page/SingleProductPage';
import LoginPage from './pages/login-page/LoginPage';
import CartPage from './pages/cart-page/CartPage';
import MyAccountPage from './pages/my-account-page/MyAccountPage';
import AdminProductPage from './pages/admin-product-page/AdminProductPage';

const Routers = [
    {
        path: '/',
        exact : true,
        main:()=><HomePage></HomePage>
    },
    {
        path:'/shop',
        exact: false,
        main: ()=><ShopPage></ShopPage>  
    },
    {
        path:'/cart/:name',
        exact: false,
        main: ({match})=><CartPage match={match}></CartPage>  
    },
    {
        path:'/login',
        exact: false,
        main: ()=><LoginPage></LoginPage>
    },
    {
        path:'/single-product/:id',
        exact: false,
        main: ({match})=><SingleProductPage match={match}></SingleProductPage>  
    },
    {
        path:'/my-account',
        exact: false,
        main: ()=><MyAccountPage></MyAccountPage>  
    },
    {
        path:'/admin-product',
        exact: false,
        main: ()=><AdminProductPage></AdminProductPage>  
    },
    {
        path: '',
        exact : false,
        main: ()=><NotFoundPage></NotFoundPage>
    }
]

export default Routers;