import React from 'react';
import '../App.css'; 

function Navbar() {
  return (
    <>
      <nav className='bg-orange-800 h-13 flex items-center justify-between p-3'>
        <div className='flex items-center'>
         
        </div>
        <div className='space-x-4 text-white text-right'>
          <a href='/Menu' className='text-white'>Menu</a> 
          <a href='/Account' className='text-white'>Account</a>
          <a href='/Settings' className='text-white'>Settings</a>
          <a href='/Help' className='text-white'>Help</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

