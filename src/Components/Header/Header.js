import React from 'react';
import './Header.css';

function header() {
  return (
    <div className='header'>
        <ul>
            <i class="fa-regular fa-phone"></i>
            <li className='header-item'>
                <span className='top-text'>Contact Us</span> <br></br> +8801234567895
            </li>
            <div className='white-line' />
        
            <i class="fa-regular fa-envelope"></i>
            <li className='header-item'>
                <span className='top-text'>Email</span> <br></br> xyz@gmail.com
            </li>
            <div className='white-line' />

            <li className='header-item'>
                <span className='time'>Time : 9AM - 10PM</span>
            </li>
            <div className='white-line' />

            <li className='header-item '>
                <div className='header-icons'>
                    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                </div>
                <div className='header-icons'>
                    <i class="fa-brands fa-linkedin-in fa-lg"></i>
                </div>
                <div className='header-icons'>
                    <i class="fa-brands fa-twitter fa-lg"></i>
                </div>               
                 <div className='header-icons'>
                    <i class="fa-brands fa-instagram fa-lg"></i>
                </div>                    
            </li>
        </ul>


        <div className='header-btn'>
            <div className='sign-up-btn'>
                Sign Up
            </div>
            <div className='log-in-btn'>
                Login
            </div>
        </div>

    </div>
  )
}

export default header;