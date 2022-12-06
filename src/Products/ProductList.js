import React from 'react'
import Cards from './Cards'
import './ProductList.css'
import { useDataValue } from '../CardsData/DataProvider'

export default function ProductList() {

  const {initialData} = useDataValue();

  return (
    <div className='productlist'>

     {initialData.productList.map((item,idx)=>(<Cards key={idx} {...item}/>)
      
     )}
      
      
    </div>
  )
}
