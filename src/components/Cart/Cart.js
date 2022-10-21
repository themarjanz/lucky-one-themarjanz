
import './Cart.css'
// 10
const Cart = (props) => {
  const { cart, randomHeadphone, random, allRemoveHeadphone } = props;
  return (
    <div className='cart'>
      <h4>Select<br></br> Headphone</h4>
      {
        cart.map(product => <h5 key={product.id}>{product.name}</h5>)
      }
      <h5>{random.name}</h5>
      {/* 9 */}
      <button onClick={() => randomHeadphone(cart)} className='c-btn-one'>CHOOSE <br></br> 1 FOR ME</button><br></br>
      {/* 9 */}
      <button onClick={() => allRemoveHeadphone(cart)} className='c-btn-two'>CHOOES AGAIN</button>
    </div>
  );
};
export default Cart;