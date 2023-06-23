import React from 'react'
import "./ShoppingCart.css"
import { useState } from 'react'

const ShoppingCart = ({products}) => {
  
  const CartItems = []


  const [selectedProducts, setSelectedProducts] = useState({})

  return (
    <div>
      <div className="shopping-cart">
        Shopping Cart
        <div className='cart-table'>
          {CartItems.length === 0 ? (
            <p> Shopping cart is empty</p>
          ) : ( 
          <div className='product-header'>
            <div className='header-row'>
              <span className='name'> Name </span>
              <span className='quantity'> Quantity </span>
              <span className='unit-price'> Unit Price </span>
              <span className='cost'> Cost </span>
            </div>
            <div className='product-row'>
              <span className='product-name'> Name </span>
              <span className='product-quantity'> Quantity </span>
              <span className='product-unit-price'> Unit Price </span>
              <span className='product-cost'> Cost </span>
            </div>
          </div>
          )}
          
        </div>

        <div className='payment-info'>
          PAYMENT
        </div>

        <div className='checkout-info'>
          CHECKOUT
        </div>
      </div>
    </div>
  )
}
export default ShoppingCart