import React from 'react'
import nike from '../assets/nike.png';


function Header() {
  return (
    <>
        <div className='head-container'>
            <div className=' logo'>
                <img style={{height:60, width: 200}} src="https://banner2.cleanpng.com/20180716/xck/kisspng-nike-free-swoosh-logo-lauras-girls-karlsruhe-karlsruhe-5b4d5b3f803c05.9518714915317962875253.jpg" alt="nike img " />    
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