import React from 'react'
import nike from '../assets/nike1.png';


function Header() {
  return (
    <>
        <div className='head-container'>
            <div className=' logo'>
                <img style={{height:60, width: 200}} src={nike} alt="nike img " />    
            </div>

            <div className='middle-options '>
                <div>Menu</div>
                <div>Location</div>
                <div>About</div>
                <div>Contact</div>
             </div>

            <div className='login-right'>
                <img style={{height:50 , width: 50}} src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Header