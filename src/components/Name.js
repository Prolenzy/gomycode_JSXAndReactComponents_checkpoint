import React from 'react'
import { productData } from '../product';

export default function Name() {
  return (
    <div>
        <h2 style={{ color: 'blue'}}>{productData.name}</h2>
    </div>
  )
}
