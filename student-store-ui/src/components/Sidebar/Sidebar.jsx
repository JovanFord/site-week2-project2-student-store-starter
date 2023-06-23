import * as React from "react"
import "./Sidebar.css"
import { useState } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar({products}) {

  const [closed, setClosed] = useState(false)

  const toggleSidebar = () => {
    setClosed(!closed)
  }
  return (
    <div onClick={toggleSidebar} className={`sidebar ${closed ? '' : 'closed'}`}>
      {
        closed ? (
          <div className="open-sidebar"> 
            <ShoppingCart products={products}/>
          </div>
        ) : (
          <div className="closed-sidebar">
            <div className="sidebar-header">
            Click here
            </div>
            <ul className="sidebar-menu">
              <img className='shopping-cart-icon' src="https://cdn-icons-png.flaticon.com/512/263/263142.png"/>
              <img className="payment-info" src="https://cdn-icons-png.flaticon.com/512/245/245904.png"/>
              <img className="checkout-info" src="https://cdn-icons-png.flaticon.com/512/1950/1950715.png"/>
            </ul>
          </div>
        )
      }
      
    </div>
  )
}
