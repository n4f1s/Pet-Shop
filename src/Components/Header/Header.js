import React,{useEffect, useState} from 'react';
import './Header.css';
import { SignIn} from '../SignIn/SignIn';
import { LogIn } from '../LogIn/LogIn';
import {auth} from '../FireBase-SDK';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Header(user) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user)
            } 
            else {
                setAuthUser(null)
            }
        })
    })

    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
            console.log(error);
        });
    }

    /******* Pupup modal ********/

    const [showLogInModal, setShowLogInModal] = useState(false)
    const openLogInModal = () => {
        setShowLogInModal(prev => !prev);
    };

    const [showSignInModal, setShowSignInModal] = useState(false)
    const openSignInModal = () => {
        setShowSignInModal(prev => !prev);
    };
    /*******End *******/
  return (

    <div className='header'>
        <LogIn showLogInModal={showLogInModal} setShowLogInModal={setShowLogInModal} />
        <SignIn showSignInModal={showSignInModal} setShowSignInModal={setShowSignInModal} />
        <ul className='header-margin'>
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

        { !authUser ? 
        <div className='header-btn'>
            <button className='sign-up-btn' onClick={openSignInModal}>
                Sign Up
            </button>

            <button className='log-in-btn' onClick={openLogInModal}>
                LogIn
            </button>
        </div>
        :   
        <div>
            <p className='user-name'>{`${authUser.email}`}</p>
            <button className='log-out-btn' onClick={handleLogout}>
                LogOut
            </button>
        </div>
        }

    </div>
  )
}

export default Header;