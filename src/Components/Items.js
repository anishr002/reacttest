import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase ,decrease,remove} from './redux/actions';

export const Items = ({id,title,type,description,filename,price,quantity}) => {

    const dispatch = useDispatch();
  return (
    <>
     <div className='items-info'>
                    <div className='product-img'>
                        <img src={filename} alt='image'/>
                    </div>
                    <div className='title'>
                        <h2>{title}</h2>
                        <h3>type : {type}</h3>
                        <p>{description}</p>
                    </div>
                    <div className='add-minus-quantity'>
                        <i className='fas fa-minus minus' onClick={()=>dispatch(decrease(id))} ></i>
                        <input type='text' placeholder={quantity}/>
                        <i className='fas fa-plus add' onClick={()=>dispatch(increase(id))}></i>
                    </div>
                    <div className='price'>
                        <h3> {price}rs</h3>
                    </div>

                    <div className='remove-item'>
                    <i className='fas fa-trash-alt remove'  onClick={()=>dispatch(remove(id))}></i>
                    </div>
                    
                </div>
                <hr/></>
  )
}
