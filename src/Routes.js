import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageItem } from './pages/Item.jsx';
import { PageHome } from './pages/Home.jsx';
import { PageShopList } from "./pages/ShopList.jsx";
import { PageAbout } from "./pages/About.jsx";
import { PageLogin } from "./pages/Login.jsx";
import { PageRegister } from "./pages/Register.jsx";
import { PageProfile } from "./pages/Profile.jsx";
import { PageCart } from "./pages/Cart.jsx";
import { Checkout }  from "./pages/Checkout.jsx";

export function routes({cart, setCart, updateCart}) {
    return (
        <Routes>
            <Route element={<PageHome />} path="/" exact />
            <Route element={<PageItem updateCart={updateCart} cart={cart} setCart={setCart}/>} path="/item/:itemId" />
            <Route element={<PageAbout />} path="/about" />
            <Route element={<PageShopList />} path="/shoplist" />
            <Route element={<PageLogin />} path="/login" />
            <Route element={<PageRegister />} path="/register" />
            <Route element={<PageProfile />} path="/profile" />
            <Route element={<PageCart updateCart={updateCart} cart={cart} setCart={setCart} />} path="/cart" />
            <Route element={<Checkout updateCart={updateCart} cart={cart} setCart={setCart} />} path="/checkout" />
        </Routes>
    )
}


export default routes;