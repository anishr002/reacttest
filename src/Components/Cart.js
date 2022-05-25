import React,{useEffect} from 'react'
import './Cart.css'
import { Items } from './Items'
// import CartData from './products'
// import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCartTotal,clearItems } from './redux/actions'


export const Cart  = () => {

    const {cart,totalAmount,totalCount} = useSelector(state => state.cart);
    // const {totalCount} = useSelector(state=>state.Cart);
    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(getCartTotal())
},[cart])


    if(cart.length === 0){
        return (
            <h1 style={{marginTop :"20px"}} className='total-items'> Your Cart is Empty</h1>
        )
    }

    // const [item, setItem] = useState(products);
  return (
    <>
    <header>
        <div className='continue-shopping'>
            <img src='./images/arrow.png' alt ='arrow' className='arrow-icon' />
            <h3>continue shopping</h3>
        </div>
        <div className='cart-icon'>
            <img src='./images/cart.png' alt='cart' />
            <p>{totalCount}</p>
        </div>
    </header>

    <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>you have <span className='total-items-count'>{totalCount}</span> items in shopping cart</p>
        <div className='cart-items'>
            <div className='cart-items-container'>
                {
                    cart.map((curItem)=>{
                        return <Items key={curItem.id} {...curItem}/>
                    })
                }
               
            </div>
        </div>
        <div className='card-total'>
            <h3>Cart Total : <span>$ {totalAmount}</span></h3>
            <button color='dangere'  onClick={()=>dispatch(clearItems())}>Clear Cart</button>
            

        </div>
        
    </section>
     </>
  )
}
