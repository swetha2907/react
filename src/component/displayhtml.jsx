import React from 'react';
import './display.css';

const Display = () => {
  return (
    
    <div className='display'>
        <div className='item'><img  className='jpg' src='market.jpg' alt='markrt' height='200px'></img></div>
        <div className='item'><img className='jpg'src='product.jpg' alt='pro'></img></div>
        <div className='item'><img className='jpg' src='web.jpg' alt='web'></img></div>
        <div className='item'><img className='jpg' src='letter.jpg' alt='let'></img></div>
        <div className='item'><img className='jpg' src='book.jpg' alt='book'></img></div>
        <div className='item'><img className='jpg' src='gift.jpg' alt='gift'></img></div>

</div>   
  );
}

export default Display;
