import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageHome } from './pages/Home.jsx';
import { PageAbout } from "./pages/About.jsx";
import { PageRegister } from "./pages/Register.jsx";
import { PageLogin } from "./pages/Login.jsx";
import { PagePassword } from "./pages/RecoverPassword.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";

import { PageProfile } from "./pages/user/Profile.jsx";
import { UpdateUser } from "./pages/user/UpdateUser.jsx";
import { PageOrders } from "./pages/user/Orders.jsx";

import { UpdatePlants } from "./pages/admin/UpdatePlants.jsx";
import { UserTable } from "./pages/admin/UpdateUsers.jsx";

import { PageItem } from './pages/Item.jsx';
import { PageShopList } from "./pages/ShopList.jsx";
import { PageCart } from "./pages/Cart.jsx";
import { Checkout }  from "./pages/Checkout.jsx";
import { ThankYouPage } from "./pages/CheckoutFinish.jsx";

export function MyRoutes({ user, setUser, cart, setCart, updateCart}) {
  const isAdmin = user && user.adm; 
  
  return (
    <Routes>
      <Route element={<PageHome />} path="/" exact />
      <Route element={<PageAbout />} path="/about" />
      <Route element={<PageRegister />} path="/register" />
      <Route element={<PageLogin setUser={setUser} />} path="/login" />
      <Route element={<PagePassword />} path="/recoverpassword" />
      
      {/* User Routes */}
      <Route path="/user">
          <Route element={<PageProfile user={user} setUser={setUser} />} path="" />
          <Route element={<UpdateUser user={user} setUser={setUser} />} path="editinfo" />
          <Route element={<PageOrders user={user} setUser={setUser} />} path="myorders" />
      </Route>
      
      {/* Admin Routes */}
      {isAdmin && (
        <Route path="/admin">
            <Route element={<UpdatePlants />} path="add-item/" />
            <Route element={<UpdatePlants />} path="add-item/:itemId" />
            <Route element={<UserTable />} path="getUsers" />
        </Route>
      )}
      
      {/* Shared Routes */}
      <Route path="/">
          <Route element={<PageItem updateCart={updateCart} cart={cart} setCart={setCart} />} path="item/:itemId" />
          <Route element={<PageShopList user={user} />} path="shoplist" />
          <Route element={<PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />} path="cart" />
          <Route element={<Checkout updateCart={updateCart} cart={cart} setCart={setCart} user={user} />} path="checkout" />
          <Route element={<ThankYouPage />} path="thanks" />
      </Route>
      
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}