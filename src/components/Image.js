import React from 'react'
import { productData } from '../product';

export default function Image() {
  return (
    <div>
        <img src={productData.image} 
        style={{ 
            width: '150px', 
            height: '170px',
            display: 'block',       // To center the image
            margin: 'auto',         // To center the image
            paddingTop: '20px',     // Add padding to the top
            paddingBottom: '20px',  // Add padding to the bottom
            paddingLeft: '20px',    // Add padding to the left
            paddingRight: '20px'    // Add padding to the right
          }} 
        alt="Vegetable Chopper" />
    </div>
  )
}