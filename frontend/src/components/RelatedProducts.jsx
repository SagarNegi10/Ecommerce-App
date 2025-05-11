import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category,subCategory}) => {

    const {products} = useContext(ShopContext);
    const {related,setRelated} = useState([]);

    useEffect(()=>{
        if (products.legth > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item)=>category === )
        }
    },[products])

  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
