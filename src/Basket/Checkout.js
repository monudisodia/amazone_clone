import React from 'react'
import { useDataValue } from '../CardsData/DataProvider'
import bannerimg from './banner.jpg'
import './Checkout.css'

const Checkout = () => {

  const {myReducer} =useDataValue();

  const [state] =myReducer;

  const getTotal =()=>{
    let total=0;
    state.cartList.map(item=>{
      return total= Number(total)+Number(item.price);
    })
    return total;
  }

  return (
    <div className='checkout'>
       <div className='banner'>
           <img src={bannerimg} alt='banner_image'/>
       </div>

       <div className='checkout_details'>
            <div className='total'>
                <p>Total(<strong>{state.cartList.length}</strong> :items): <strong>Rs.{getTotal()}</strong></p>
                <p><input type="checkbox"/>This order contains a gift</p>
                <button>Proceed to Checkout</button>
            </div>
       </div>
    </div>
  )
}

export default Checkout;
