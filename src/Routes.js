import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageItem } from './pages/Item.jsx';
import { PageHome } from './pages/Home.jsx';
import { PageShopList } from "./pages/ShopList.jsx";
import { About } from "./components/About/index.jsx";
import { PageLogin } from "./pages/Login.jsx";
import { PageRegister } from "./pages/Register.jsx";
import { PageProfile } from "./pages/Profile.jsx";

export function routes() {
    return (
        <Routes>
            <Route element={<PageHome />} path="/" exact />
            <Route element={<PageItem />} path="/item/:itemId" />
            <Route element={<About />} path="/about" />
            <Route element={<PageShopList />} path="/shoplist" />
            <Route element={<PageLogin />} path="/login" />
            <Route element={<PageRegister />} path="/register" />
            <Route element={<PageProfile />} path="/profile" />
        </Routes>
    )
}


export default routes;