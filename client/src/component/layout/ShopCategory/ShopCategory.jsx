import React, { useContext, useState } from 'react'
import './ShopCategory.css'
import { ShopContext } from '../../../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Item/Item'

export const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order is ascending
  const [sortedProducts, setSortedProducts] = useState(all_product);

  // Function to sort products by price
  const sortProductsByPrice = (order) => {
    const sorted = all_product.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.new_price - b.new_price;
      } else {
        return b.new_price - a.new_price;
      }
    });
    setSortedProducts(sorted);
  };

  // Handle sorting order change
  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    sortProductsByPrice(newSortOrder);
  };

  return (
    <div className='shop-category'>
   
      <div className="shopcategory-indexSort">
      <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
        <label htmlFor="sort-select">Sort by Price:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
      {sortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
    
    </div>
  )
}
export default ShopCategory