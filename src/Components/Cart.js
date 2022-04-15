import React,{useState} from 'react'
import './Cart.css'
import { Items } from './Items'
import { products } from './products'


export const Cart = () => {
    const [item, setitem] = useState(products);
  return (
    <>
    <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt='arrow' className='arrow-icon'/>
            <h3> Shopping Product</h3>
        </div>
        <div className='cart-icon'>
            <img src='./images/cart.png' alt ='cart'/>
            <p>7</p>
        </div>
    </header>
    <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>48 </span>items in shopping cart</p>
        <div className='cart-items'>
            <div className='cart-items-container'>
                {
                    item.map((curItem)=>{
                     return <Items key={curItem.id} {...curItem}/>
                    })
                }
                
                
            </div>
        </div>
        <div className='card-total'>
            <h3>Cart Total : <span>2200rs</span></h3>
            <button>checkout</button>
        </div>
    </section>
    
    </>
  )
}
