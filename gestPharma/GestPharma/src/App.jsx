import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Products from "./pages/products";
import SingleProduct from "./pages/singleProduct";
import ProductsList from "./pages/ProductsList";
import NavBar from "./components/navBar";

function App() {

  return (

    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
