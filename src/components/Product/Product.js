import React from 'react';
import './Product.css';
// 6
// react fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
// 3
const Product = (props) => {

  const { product, addSelectHeadphone } = props; //4

  const { name, price, img } = product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <h4>name:{name}</h4>
        <p>Price:{price}</p>

        {/* 4 */}
        <button onClick={() => addSelectHeadphone(product)} className='btn-text'>Add to Cart
          {/* 6 */}
          <FontAwesomeIcon className='icon' icon={faShoppingBasket} />
        </button>
      </div>
    </div>
  );
};

export default Product;