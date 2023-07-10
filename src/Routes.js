import React from "react";
import { Route, Routes } from "react-router-dom";

import { PageHome } from './app/pages/Home.jsx';
import { PageAbout } from "./app/pages/About.jsx";
import { PageRegister } from "./app/pages/Register.jsx";
import { PageLogin } from "./app/pages/Login.jsx";
import { PagePassword } from "./app/pages/RecoverPassword.jsx";
import { ErrorPage } from "./app/pages/ErrorPage.jsx";

import { PageProfile } from "./app/pages/user/Profile.jsx";
import { UpdateUser } from "./app/pages/user/UpdateUser.jsx";
import { PageOrders } from "./app/pages/user/Orders.jsx";

import { UpdatePlants } from "./app/pages/admin/UpdatePlants.jsx";
import { UserTable } from "./app/pages/admin/UpdateUsers.jsx";

import { PageItem } from './app/pages/Item.jsx';
import { PageShopList } from "./app/pages/ShopList.jsx";
import { PageCart } from "./app/pages/Cart.jsx";
import { Checkout }  from "./app/pages/Checkout.jsx";
import { ThankYouPage } from "./app/pages/CheckoutFinish.jsx";

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