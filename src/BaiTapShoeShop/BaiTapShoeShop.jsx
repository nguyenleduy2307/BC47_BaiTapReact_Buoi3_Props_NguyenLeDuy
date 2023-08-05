import React, { useState } from 'react'

// import data.json:
import prdList from './Data.json'

import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

const BaiTapShoeShop = () => {

  // Tạo state: để bấm btn => product detail thay đổi và show ra
  /**
   * 1. Xác định nội dung/ vị trí cần thay đổi => ProductDetail
   * 2. Xác định nơi xảy ra sự kiện => ProductItem
   * 
   * 3. Xác định nơi đặt stat => Component gần nhất chứa cả 2 component 1 và 2
   * => Component BaiTapShoeShop
   */

  // Tạo state product detail:
  const [productDetail, setProductDetail] = useState(prdList[0])

  const handleProductDetail = (product) => {
    setProductDetail(product)
  }

  // Tạo state cart:
  const [cart, setCart] = useState([])

  const handleCart = (product) => {
    setCart((currentState) => {

      // Kiểm tra trong cart đã tồn tại sản phẩm hay chưa:
      const index = currentState.findIndex((item) => item.id === product.id)

      if (index !== -1) {
        // Sản phẩm đã tồn tại, tăng số lượng lên 1
        currentState[index].cartQuantity += 1;
      } else {
        currentState.push({ ...product, cartQuantity: 1 })
      }
      return [...currentState]

    })
  }
  // Giá trị trả về của callback trả về sẽ là giá trị mới của state


  // Tạo hàm + - tăng giảm số lượng:
  const handleCartQuantity = (id, quantity) => {
    // quantity: +1 => btn +
    // quantity: -1 => btn -

    setCart((currentState) => {

      // Tìm kiếm sản phẩm đang muốn thay đổi số lượng:
      const index = currentState.findIndex((item) => item.id === id)

      currentState[index].cartQuantity = currentState[index].cartQuantity + quantity || 1
      // Xử lý số lượng nhỏ nhất phải bằng 1: 1 - 1 = 0 || 1 (false || 1) => in ra 1

      return [...currentState]
    })

  }

  // Tạo hàm xóa cart:

  const handleDeleteCart = (id) => {
    setCart((currentState) => {
      return currentState.filter((item) => item.id !== id)
    })
  }


  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-between'>
        <h1 className='text-danger'>Shoes Shop</h1>
        <button
          className='btn btn-outline-primary'
          data-bs-toggle="modal" data-bs-target="#cart"
        >Cart</button>

      </div>

      {/* Truyền setproduct detail */}
      <ProductList
        prdList={prdList}
        handleProductDetail={handleProductDetail}
        handleCart={handleCart}
      />

      {/* Modal detail */}
      {/* Truyền state vào: */}
      <ProductDetail productDetail={productDetail} />

      {/* Modal giỏ hàng */}
      <Cart
        cart={cart}
        handleCartQuantity={handleCartQuantity}
        handleDeleteCart={handleDeleteCart}
      />

    </div>
  )
}

export default BaiTapShoeShop