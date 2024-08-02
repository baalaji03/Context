import React, { useContext } from 'react';
import { mycontext } from '../App';

const Cart = () => {
    const [data,setData]=useContext(mycontext)
    const totalPrice = data.reduce((total,data)=>total+data.price*(data.quantity || 1),0);
    const totalQuantity = data.reduce((total,data)=>total+(data.quantity || 1),0);
    const handleInc =(id,quantity)=>{
    setData(curr=>{
        return curr.map((element)=>{
          if(element.id===id){
            return{...element,quantity:(element.quantity+1 || quantity+1)}
          }
          return element
        })
    })

    }
    const handleDec =(id,quantity)=>{
        setData(curr=>{
            return curr.map((element)=>{
              if(element.id===id && quantity>0){
                return{...element,quantity:(element.quantity-1 || quantity-1)}
              }
              return element
            })
        })
    }
    return (
        <div>
            
            {data.map((element,index)=>{
                return(
                   <div key={index}>
                    <div className='heading'>
                    <h1>{element.id}.</h1>
                    <h1>{element.title}</h1>
                    </div>
                    <h3>{element.description}</h3>
                    <h3>{element.category}</h3>
                    {element.images.map((ele,i)=>{
                        return(
                            <div key={i}>
                                <img src={ele} className='imgg' />
                            </div>
                        )
                    })}
                    <button onClick={()=>handleInc(element.id,element.quantity || 1)}>+</button>
                    <button onClick={()=>handleDec(element.id,element.quantity || 1)}>-</button>
                   </div>
                )
            })}
            <hr />
            <div className='space'>
            <h3> Sub-Total :</h3> 
            <h3>{totalPrice}</h3>
            </div>
            <div className='space'>
            <h3>SHIPPING :</h3>
            <h3>FREE</h3>
            </div>
            <hr />
            
             <h2>Total Quantity:{totalQuantity}</h2> 
              <h2>Total Price:{totalPrice}</h2>
              
        </div>
       
    );
};

export default Cart;