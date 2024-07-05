import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    //access data and function using contextAPI
    const {all_products, cartItems, removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((e)=>{
            if(cartItems[e.id]>0){
            return <div key={e}>
            <div className="cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} />
            </div>
        </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
            <div className='certitems-total-item'>
                 <p>Subtotal</p>
                 <p>${getTotalCartAmount()}</p>
              </div>
          <hr />
             <div className='cartitems-total-item'>
                 <p>Shipping Fee</p>
                 <p>Free</p>
             </div>
          <hr />
             <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
             </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
         </div>
         <div className='cartitems-promocode'>
          <p>If you have  promo code, Enter it here</p>
          <div className='cartitems-promobox'>
             <input type="text" placeholder='promo code'/>
             <button>submit</button>
          </div>
         </div>
        </div>
</div>
  )
}

export default CartItems