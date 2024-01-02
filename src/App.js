// Import the required modules 
import './App.css';
import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import { productData } from "./product";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const firstName = "Charles"; // My first name above the root component

function App() {
  return (
    <div className="App">
      <div className='center-container'> 
      <Card className='custom-card-style'>
      <Image />
      <Card.Body>
        <Name />
        <Price />
        <Description />
       </Card.Body>
       </Card>
       <p>Hello, {firstName || 'there'}!</p>
       {firstName && <img src={productData.image} 
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
       alt="Vegetable Chopper" />}
        </div>
    </div>
  );
}

export default App;
