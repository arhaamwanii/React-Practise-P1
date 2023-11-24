import React from 'react'

function Hero() {
  return (
    <>
    <div className='hero-container' >
        <div className='left'>
            <h1>There is only one Way Forward thats Straight UP</h1>
            <h3 style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur a incidunt odio nam blanditiis cum, voluptatem, sunt nostrum id deleniti! Asperiores, impedit nisi? Quidem architecto recusandae iusto modi deleniti!</h3>
            <div>
              <button className='left-button'>
                Shop Now
              </button>
              <button className='right-button'>
              Category
              </button>
            </div>
        </div>

        <div className='right'>
              <img className='hero-img' src="https://images.pexels.com/photos/19229575/pexels-photo-19229575/free-photo-of-beach-stretch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="man standing on the rod " />
        </div>
       </div>
    </>
  )
}

export default Hero