import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const cartItems = [
    {
      name: "Wireless Mouse",
      price: 29.99,
      detail: "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI."
    },
    {
      name: "Bluetooth Headphones",
      price: 59.99,
      detail: "Over-ear headphones with active noise cancellation and 20-hour battery life."
    },
    {
      name: "Laptop Stand",
      price: 25.99,
      detail: "Adjustable aluminum laptop stand compatible with 11-17 inch laptops."
    },
    {
      name: "USB-C Hub",
      price: 34.99,
      detail: "7-in-1 USB-C hub with HDMI, SD card reader, and multiple USB 3.0 ports."
    },
    {
      name: "Smartphone Holder",
      price: 12.99,
      detail: "Flexible gooseneck smartphone holder for desk and bedside use."
    },
    {
      name: "Mechanical Keyboard",
      price: 89.99,
      detail: "Compact mechanical keyboard with RGB backlighting and hot-swappable switches."
    },
    {
      name: "Portable Charger",
      price: 49.99,
      detail: "10,000mAh portable charger with fast charging and USB-C compatibility."
    },
    {
      name: "4K Monitor",
      price: 299.99,
      detail: "27-inch 4K UHD monitor with HDR support and ultra-slim bezel design."
    },
    {
      name: "Gaming Mouse Pad",
      price: 15.99,
      detail: "Large gaming mouse pad with stitched edges and anti-slip base."
    },
    {
      name: "Webcam",
      price: 69.99,
      detail: "1080p HD webcam with autofocus and built-in dual stereo microphones."
    }
  ];
  
const App = () => {
    const [items, setItems] = useState(cartItems);
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(()=>{
        setTotalAmount(Math.floor(items.reduce((a, b)=>{
            return a + b.price;
        }, 0)))
    }, [items, setItems])
  return (
    <div id='app'>
        <nav>
            <h1>Header</h1>
            <h1 id='nav-cart-item-count'>Total Items: {items.length}</h1>
            <h1 id='cart-total-amount'>Totoal cart amount: {totalAmount}</h1>
            <button id='clear-all-cart' onClick={()=>{setItems([])}}>Clear Cart</button>
        </nav>
        <ul className='cartContainer' id='cart-items-list'>
            {
                items.length > 0 ? items.map((item, index) => {
                    return <Cart item={item} index={index} items={items} setItems={setItems}/>
                }) :
                <h1>Cart is currently empty</h1>
            }
        </ul>
    </div>
  );
}

export default App;

function Cart({item, index, items, setItems}){
    const [count, setCount] = useState(0);

    function handleRemove(index){
        setItems(items.filter((item, i) => i != index));
    }
    return (
        <li className='cart'>
            <h2>{item.name}</h2>
            <p>{item.detail}</p>
            <h2 id={'cart-amount-'+index}>{item.price}</h2>
            <div>
                <span>count: {count}</span>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
            <button onClick={()=>{handleRemove(index)}}>Remove Item</button>
        </li>
    )
}
