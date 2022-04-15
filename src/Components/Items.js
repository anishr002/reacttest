import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { incNumber,decNumber } from '../actions/index';


export const Items = ({title,type,description,filename,price,rating}) => {

    const myState = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();
    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img src={filename} alt='image' />
                </div>
                <div className='title'>
                    <h2>{title}</h2>
                    <h3>type : {type }</h3>
                    <p>{description}</p>
                    
                </div>
                

                <div className='add-minus-quantity'>
                    
                    <i className='fas fa-minus minus' onClick={()=>dispatch(decNumber())}></i>
                    <input type='text' placeholder={myState} />
                    <i className='fas fa-plus add' onClick={()=>dispatch(incNumber())}></i>

                </div>
                <div className='price'>
                    <h3>{price}</h3>
                </div>

                <div className='card-total'>
        
            <button>Add To Cart</button>
            </div>

                
            </div>
            
        
            <hr/>
            
        </>
    )
}
