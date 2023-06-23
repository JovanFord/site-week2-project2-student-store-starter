import React from 'react'
import ProductCard from "../ProductCard/ProductCard"
import  "./ProductGrid.css"

const ProductGrid = ({products}, {handleAddItem}) => {
  return (
    <div className ="product-grid">
      <h2>Best Sellers</h2>
        {
            products?.map((product, id) => <ProductCard key={id} product={product} handleAddItem={handleAddItem}/>)
        }
    </div>
  )
}

export default ProductGrid