import React from 'react'
import { productData } from '../product';

export default function Price() {
  return (
    <div>
        <h4 style={{ color: '#007f00'}}>{productData.price}</h4>
    </div>
  )
}