import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import MainRoutes from "./MainRoutes"
import Footer from "./Footer"
import { CartProvider } from "./Context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header></Header>
        <MainRoutes></MainRoutes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App