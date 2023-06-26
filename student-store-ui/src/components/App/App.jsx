import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useState, useEffect } from "react"
import axios from 'axios'
import ProductDetail from "../ProductDetail/ProductDetail"

// api link: https://codepath-store-api.herokuapp.com/store

export default function App() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  function handleAddItem(productId){
    let alreadyInCart = shoppingCart.some(
      (product) => product.itemId === productId
    )
    if (alreadyInCart){
      let i = shoppingCart.findIndex((product) => product.itemId === productId)
      let updatedCart = [...shoppingCart]
      updatedCart[i] = {
        itemId: updatedCart[i].itemId,
        quantity: ++updatedCart[i].quantity
      }
      setShoppingCart(updatedCart)
    }
    else {
      setShoppingCart([...shoppingCart,{itemId:productId, quantity: 1}])
    }
  }

  function handleRemoveItem(){
    
  }
  
  console.log(shoppingCart)
  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProducts(response.data.products);
        console.log(products)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route 
        path="/"
        element={
          <main>
            <Navbar/>
            <Sidebar />
            <Home products={products} handleAddItem={handleAddItem} shoppingCart={shoppingCart}/>
          </main>
        }>
        </Route>

        <Route
        path="/product/:productId"
        element={
          <main>
            <Navbar/>
            <Sidebar />
            <ProductDetail/>
          </main>
        }>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

// if run-dev doesn't work type "npm install react-router-dom"