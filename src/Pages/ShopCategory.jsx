// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

// function ShopCategory({ banner, category }) {
//   const {all_product} = useContext(ShopContext)
//   return (
//     <div className='shop-category'>
//        <img src={banner} alt="" />
//        <div className='shopcategory-indexSort'>
//          <p>
//           <span>Showing 1-12</span> out of 36 products
//          </p>
//          <div className='shopcategory-sort'>
//           sort by <img src={dropdown_icon} alt="" />
//          </div>
//        </div>
//        <div className='shopcategory-products'>
//          {
//           all_product.map((item,i)=>{
//             if (category===Item.category) {
//               return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//             }
//             else {
//               return null}
//           })
//          }
//        </div>
//     </div>
//   )
// }

// export default ShopCategory;

import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

function ShopCategory({ banner, category }) {
  const { all_products } = useContext(ShopContext);
  const filteredProducts = all_products.filter(item => item.category === category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="Category Banner" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_products.length} products
        </p>
        <div className='shopcategory-sort'>
          sort by <img src={dropdown_icon} alt="Sort Dropdown" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {filteredProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
