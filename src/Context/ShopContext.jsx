import { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product'
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
      let cart={};
      for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;

      }
      return cart;
    }

const ShopContextProvider=(props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_products.find((product)=>product.id===Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    }
    

    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in CartItems)
        {
            console.log(item);
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_products,cartItems,removeFromCart,addToCart,getTotalCartAmount,getTotalCartItems};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;