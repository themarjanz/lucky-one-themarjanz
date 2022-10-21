import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

// 2nd step
const Shop = () => {
  const [products, setProducts] = useState([]); //2

  const [cart, setCart] = useState([]); //5
  const [random, setRandom] = useState([]);

  // 2
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  // 4

  const addSelectHeadphone = (product) => {
    const newCart = [...cart, product]; //5
    // 7
    if (newCart.length > 4) {
      alert('you cannot add more than 4 item')
      return;
    }
    setCart(newCart);//5
  }
  // 8
  const randomHeadphone = (cart) => {
    if (cart.length === 0) {
      return;
    }
    else {
      setCart([]);
      const randomCount = cart[Math.floor(Math.random() * cart.length)];
      setRandom(randomCount);
    }
  }
  // 9
  const allRemoveHeadphone = () => {
    setCart([]);
    setRandom([]);
  }
  return (
    // 1st step
    <div className='shop-container'>
      <div className="product-container">
        {
          // 3
          products.map(product => <Product product={product}
            addSelectHeadphone={addSelectHeadphone}
            key={product.id}
          ></Product>)
        }
      </div>
      <div className='cart-container'>
        {/* 5 */}
        <Cart randomHeadphone={randomHeadphone} random={random} allRemoveHeadphone={allRemoveHeadphone} cart={cart} ></Cart>
        {/* 8 randomHeadPhone and 9 allremoveHeadphone */}
      </div>

    </div>
  );
};

export default Shop;