import React, { useState } from 'react'
import  "./ProductCard.css"
import { Link } from 'react-router-dom'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const ProductCard = ({product, handleAddItem, shoppingCart}) => {

  return (
    
      <div className="product-card">
        <Link to={`/product/${product.id}`}>
          <img className="product-img" src={product.image}/> <br/>
          <div className="product-info">
            <p className="product-name">{product.name}</p> <br/>
            <p className="product-price">${product.price}</p> <br/>
          </div>
        </Link>
          <div className="buttons">
            <p>{shoppingCart.quantity}</p>
            <button onClick={() => handleAddItem(product.id)}>+</button> 
            <button onClick={handleAddItem}>-</button>
          </div>
      </div>
    
   
  )
}

export default ProductCard