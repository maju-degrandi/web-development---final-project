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
import { UpdatePlants } from "./pages/UpdatePlants.jsx";
import { PageOrders } from "./pages/Orders.jsx";
import { UpdateUser } from "./pages/UpdateUser.jsx";

export function routes({user, setUser, cart, setCart, updateCart, plant, setPlant}) {
    return (
        <Routes>
            <Route element={<PageHome />} path="/" exact />
            <Route element={<PageItem plants={plant} updateCart={updateCart} cart={cart} setCart={setCart}/>} path="/item/:itemId" />
            <Route element={<PageAbout />} path="/about" />
            <Route element={<PageShopList user={user} plants={plant}/>} path="/shoplist" />
            <Route element={<PageOrders user={user} setUser={setUser} plants={plant}/>} path="/myorders" />
            <Route element={<PageLogin setUser={setUser} />} path="/login" />
            <Route element={<PageRegister />} path="/register" />
            <Route element={<PageProfile user={user} setUser={setUser} />} path="/profile" />
            <Route element={<PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />} path="/cart" />
            <Route element={<Checkout updateCart={updateCart} cart={cart} setCart={setCart} />} path="/checkout" />
            <Route element={<UpdatePlants plants={plant} setPlants={setPlant}/>} path="/admin/add-item"/>
            <Route element={<UpdatePlants plants={plant} setPlants={setPlant}/>} path="/admin/add-item/:itemId"/>
            <Route element={<UpdateUser user={user} setUser={setUser} />} path="/editinfo"/>
        </Routes>
    )
}


export default routes;