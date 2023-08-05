import React from 'react'
import ProductItem from './ProductItem';

const ProductList = (props) => {

  const {prdList, handleProductDetail, handleCart} = props;

  return (
    <div className='row mb-5'>
      {prdList.map((product) => (
        <ProductItem 
          key={product.id} 
          product={product} 
          handleProductDetail={handleProductDetail}
          handleCart = {handleCart}
        />
      ))}
    </div>
  )
}

export default ProductList