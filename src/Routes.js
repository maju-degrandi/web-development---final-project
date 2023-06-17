import React from "react";
import { Route, Routes, Router, Outlet } from "react-router-dom";

import { PageItem } from './pages/Item.jsx';
import { PageHome } from './pages/Home.jsx';
import { PageShopList } from "./pages/ShopList.jsx";
import { PageAbout } from "./pages/About.jsx";
import { PageLogin } from "./pages/Login.jsx";
import { PageRegister } from "./pages/Register.jsx";
import { PageProfile } from "./pages/user/Profile.jsx";
import { PageCart } from "./pages/Cart.jsx";
import { Checkout }  from "./pages/Checkout.jsx";
import { UpdatePlants } from "./pages/admin/UpdatePlants.jsx";
import { PageOrders } from "./pages/user/Orders.jsx";
import { UpdateUser } from "./pages/user/UpdateUser.jsx";
import { PagePassword } from "./pages/RecoverPassword.jsx";
import { ThankYouPage } from "./pages/CheckoutFinish.jsx";

export function MyRoutes({ user, setUser, cart, setCart, updateCart, plant, setPlant }) {
    const isAdmin = user && user.admin; // Assuming you have an `isAdmin` property on the user object
    
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
              <Route element={<PageOrders user={user} setUser={setUser} plants={plant} />} path="myorders" />
        </Route>
        
        {/* Admin Routes */}
        {isAdmin && (
          <Route path="/admin">
                <Route element={<UpdatePlants plants={plant} setPlants={setPlant} />} path="" />
                <Route element={<UpdatePlants plants={plant} setPlants={setPlant} />} path="add-item/:itemId" />
          </Route>
        )}
        
        {/* Shared Routes */}
        <Route path="/">
            <Route element={<PageItem plants={plant} updateCart={updateCart} cart={cart} setCart={setCart} />} path="item/:itemId" />
            <Route element={<PageShopList user={user} plants={plant} />} path="shoplist" />
            <Route element={<PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />} path="cart" />
            <Route element={<Checkout updateCart={updateCart} cart={cart} setCart={setCart} user={user} />} path="checkout" />
            <Route element={<ThankYouPage />} path="thanks" />
        </Route>
      </Routes>
    );
  }
  


// 
// export function MyRoutes({user, setUser, cart, setCart, updateCart, plant, setPlant}) {
    // return (
        // <Routes>
            {/* <Route element={<PageHome />} path="/" exact /> */}
            {/* <Route element={<PageAbout />} path="/about" /> */}
            {/* <Route element={<PageRegister />} path="/register" /> */}
            {/* <Route element={<PageLogin setUser={setUser} />} path="/login" /> */}
            {/* <Route element={<PageProfile user={user} setUser={setUser} />} path="/profile" /> */}
            {/* <Route element={<UpdateUser user={user} setUser={setUser} />} path="/editinfo"/> */}
            {/* <Route element={<PagePassword />} path="/recoverpassword"/> */}
            {/* <Route element={<PageOrders user={user} setUser={setUser} plants={plant}/>} path="/myorders" /> */}
            {/*  */}
            {/* <Route element={<PageItem plants={plant} updateCart={updateCart} cart={cart} setCart={setCart}/>} path="/item/:itemId" /> */}
            {/* <Route element={<PageShopList user={user} plants={plant}/>} path="/shoplist" /> */}
            {/* <Route element={<PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />} path="/cart" /> */}
            {/* <Route element={<Checkout updateCart={updateCart} cart={cart} setCart={setCart} user={user}/>} path="/checkout" /> */}
            {/* <Route element={<ThankYouPage/>} path="/thanks" /> */}
            {/*  */}
            {/* <Route element={<UpdatePlants plants={plant} setPlants={setPlant}/>} path="/admin/add-item"/> */}
            {/* <Route element={<UpdatePlants plants={plant} setPlants={setPlant}/>} path="/admin/add-item/:itemId"/> */}
        {/* </Routes> */}
    // )
// }
// 
// 
export default MyRoutes;