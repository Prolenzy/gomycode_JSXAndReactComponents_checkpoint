import React from 'react'
import { productData } from '../product';

export default function Description() {
  return (
    <div>
        <p>{productData.description}</p>
    </div>
  )
}