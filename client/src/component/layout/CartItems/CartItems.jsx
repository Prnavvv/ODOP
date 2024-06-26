import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product'
const CartItems = () => {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart ,addToCart} = useContext(ShopContext);
    const handleCheckoutClick = () => {
        const totalAmount = getTotalCartAmount();
        alert(`You are proceeding to checkout. Total amount to be paid: ₹${totalAmount}`);
        // You can replace the alert above with any logic for actual payment processing
        // For example, you can redirect to a payment gateway or process payment within your application
    }
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p className='price'>Price</p>
                <p>Quantity</p>
                <p>Total</p>
         
                <p className='remove'>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitems-format">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>₹{e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                           
                            <p>₹{e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <a href='https://forms.gle/UxPtYm94hgJtD9GC7' target="_blank">
                    <button onClick={handleCheckoutClick}>PROCEED TO CHECKOUT</button>
      </a>
                </div>

            </div>
        </div>
    )
}

export default CartItems