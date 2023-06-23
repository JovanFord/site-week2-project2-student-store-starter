import React, { useState } from 'react'
import  "./ProductCard.css"
import { Link } from 'react-router-dom'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

const ProductCard = ({product}, {handleAddItem}) => {

  const [count, setCount] = useState(0)

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
            <p>{count}</p>
            <button onClick={handleAddItem}>+</button> 
            <button onClick={handleAddItem}>-</button>
          </div>
      </div>
    
   
  )
}

export default ProductCard