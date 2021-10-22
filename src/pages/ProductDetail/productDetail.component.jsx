import React from 'react';

import './productDetail.styles.scss'

const ProductDetail = () => {
    return (
        <div className='product-details'>
            <div className="product-detail-main-title">
                <h1 className='product-title'>Product Name</h1>
            </div>
            <div className="product-detail-container">
                <div className="product-detail-card">
                    <div className="product-detail-card-img">
                        <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="" />
                    </div>
                    <div className="product-detail-card-name">
                        <h2>Product Name</h2>
                        <span>$200.00</span>
                    </div>
                </div>
            </div>
            <div className="related-items-slider">
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
                <div className="item1"></div>
            </div>
        </div>
    );
};

export default ProductDetail;