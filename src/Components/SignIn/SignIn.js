import React,{useRef, useState, useEffect} from 'react';
import './SignIn.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  signInWithFacebook
} from "../FireBase-SDK";


export const SignIn = ({ showSignInModal, setShowSignInModal }) => {

  const modalRef = useRef()
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowSignInModal(false);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!address) alert("Please enter address");
    registerWithEmailAndPassword(address, email, password);
    setShowSignInModal(prev => !prev)
  };

  const googleSignUp = () => {
    signInWithGoogle();
    setShowSignInModal(prev => !prev)
  }

  const facebookSignUp = () => {
    signInWithFacebook();
    setShowSignInModal(prev => !prev)
  }

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>{ showSignInModal ? (

        <div className='modal-bg' ref={modalRef} onClick={closeModal}>
          <div className='modal-container'>

            <div className='modal-header'>
              <div className='modal-header-text'>Sign Up</div> 
              <i class="fa-solid fa-xmark modal-exit" 
              onClick={() => setShowSignInModal(prev => !prev)}></i>
            </div>

            <div className='modal-input-header-text'>
              Email<span style={{"color":"rgba(41, 191, 18, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   xyz@gmail.com" className='modal-input'
              value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <div className='modal-input-header-text'>
              Password<span style={{"color":"rgba(41, 191, 18, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   **********" className='modal-input'
              value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <div className='modal-input-header-text'>
              Confirm Password<span style={{"color":"rgba(41, 191, 18, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   **********" className='modal-input'></input>

            <div className='modal-input-header-text'>
              Address<span style={{"color":"rgba(41, 191, 18, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   current address..." className='modal-input'
              value={address} onChange={(e) => setAddress(e.target.value)}></input>

            <button className='modal-btn' style={{"backgroundColor":"rgba(132, 181, 159, 1)"}}
              onClick={register}>
              Sign Up
            </button>

            <div className='modal-login-with'>Or Sign up with</div>

            <button className='modal-btn' style={{"backgroundColor":"#485A96"}}
              onClick={facebookSignUp }>
              <img src={require('../Images/facebook-icon.png')} alt='Logo'
               className='modal-btn-icon'/>
              Facebook
            </button>
            <button className='modal-btn' style={{"backgroundColor":"#79ACFF"}}
              onClick={googleSignUp}>
              <img src={require('../Images/google-icon.png')} alt='Logo'
               className='modal-btn-icon'/>
              Google
            </button>

            <div className='modal-login-with'>
              Have an account?
            </div>

            <div className='modal-creacte-account'>
              Please Login into your Account
            </div>

          </div> 
        </div>

    ) : null} </>
    
  )
}

