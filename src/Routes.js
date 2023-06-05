import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// import {Sobre} from "./components/Sobre";
// import {Usuario} from "./components/Usuario";
import { Header } from "./components/Header";
import { PageItem } from './pages/Item.jsx';
import { ErrorPage } from "./pages/ErrorPage.jsx";

const routes = () => {
   return(
    <>
       <BrowserRouter>
            <Routes>
                <Route element = { <Header/> }  path="/" exact />
                {/* <Route component = { Sobre }  path="/sobre" />
                    <Route component = { Usuario }  path="/usuario" /> */}
                <Route element = { <PageItem/> }  path="/item/:itemId" />
                
                <Route element = { <ErrorPage/> } path="*"/>
            </Routes>
       </BrowserRouter>
    </>
   )
}

export default routes;