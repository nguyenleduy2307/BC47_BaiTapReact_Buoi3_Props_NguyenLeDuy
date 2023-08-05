import React from 'react'

const ProductDetail = (prop) => {
    const {productDetail} = prop
    console.log("productDetail: ", productDetail);
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Detailed product</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-4">
                                <img 
                                    src={productDetail.image}
                                    className='img-fluid' 
                                    alt="..." />
                            </div>
                            <div className="col-8 text-start">
                                <p className='fw-bold fs-3'>{productDetail.name}</p>
                                <p className='mt-3'>{productDetail.description}</p>
                                <p className='mt-3 fw-bold'>Giá: {productDetail.price} $</p>
                                <p className='mt-3'>Số lượng: {productDetail.quantity}</p>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail