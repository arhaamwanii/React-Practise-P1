import React from 'react'
import nike from '../assets/nike.png';


function Header() {
  return (
    <>
        <div className='head-container'>
            <div className=' logo'>
                <img style={{height:100, width: 100}} src={nike} alt="nike img " />    
            </div>

            <div className='middle-options '>
                <div>Menu</div>
                <div>Location</div>
                <div>About</div>
                <div>Contact</div>
             </div>

            <div className='login-right'>
                <img style={{height:50 , width: 50}} src="https://www.svgrepo.com/show/166680/login-button.svg" alt="" />
            </div>
        </div>
    </>
  )
}

export default Header