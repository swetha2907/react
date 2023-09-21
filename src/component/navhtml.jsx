import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    
     <div>
   
    <div className="background-container">
     
    
      <nav className="navbar">
        <div className='rrr'>
        <div className='align'>
          <div className='items'><img src="iconblog.png" alt="icon" className="icon" /></div>
          <div className='items'>HOME</div>

          <div className='items'>About</div>
          <div className='items'>services</div>
          <div className='items'>contact</div>
          <div className='items'>menu</div>
          <div className='items'>Search</div>
            <div className='items'>login</div>
            <div className='items'><img src="search1.png"  alt="search" className='icon' /></div>

          </div>
          {/* <div className='align1'>
           
          </div> */}
        
       {/* <ul className="navbar-list"> 
      <li className="navbar-item">
         
            <img src="iconblog.png" alt="icon" className="icon" />
          
        </li>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Contact</li>
        <div className='left'>
        <li className='navbar-item1' ><div className='menu'></div>
        <div className='menu'>
        </div>
        <div className='menu'>

        </div>
        </li>
        <li className='navbar-item1'><img src="search1.png"  alt="search" className='icon' /></li>
        </div>
      </ul>
       */}
       </div>
    </nav> 
    <div className='header'>
      <div className='innertext'>
      <h1>STORY THEME</h1><br/>
      <p>blog app</p><br/>
      <p>
      <button className='read'>Read More  &gt;</button>
      <button className='contact'>Contact Info  &gt;</button><br/>
      </p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
