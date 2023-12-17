import React,{useRef, useEffect, useState} from 'react';
import './Login.css';
import { signInWithGoogle,logInWithEmailAndPassword,
  signInWithFacebook,auth,
  sendPasswordReset,logout }from '../FireBase-SDK';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

export const LogIn = ({ showLogInModal, setShowLogInModal }) => {
  const modalRef = useRef()

  const closeModal = e => {
    document.body.style.overflow = 'unset';
    if (modalRef.current === e.target) {
      setShowLogInModal(false);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  const logIn = () => {
    logInWithEmailAndPassword(email, password);
    setShowLogInModal(prev => !prev);
  }
  const googleLogIn = () => {
    signInWithGoogle();
    setShowLogInModal(prev => !prev);
  }

  const facebookLogIn = () => {
    signInWithFacebook();
    setShowLogInModal(prev => !prev);
  }
  return (
    <>{ showLogInModal ? (

        <div className='modal-bg' ref={modalRef} onClick={closeModal}>
          <div className='modal-container'>

            <div className='modal-header'>
              <div className='modal-header-text'>Login</div> 
              <i class="fa-solid fa-xmark modal-exit" 
              onClick={() => setShowLogInModal(prev => !prev)}></i>
            </div>

            <div className='modal-input-header-text'>
              Email<span style={{"color":"rgba(231, 29, 54, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   xyz@gmail.com" className='modal-input'
              value={email} onChange={(e) => setEmail(e.target.value)}></input>

            <div className='modal-input-header-text'>
              Password<span style={{"color":"rgba(231, 29, 54, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   **********" className='modal-input'
              value={password} onChange={(e) => setPassword(e.target.value)}></input>

            <div className='modal-checkbox'>
              <input type="checkbox" id="save-password" name="save-password"
               style={{"accent-color":"rgba(132, 181, 159, 1)"}}></input>

              <label for="save-password" className='modal-remember-me'>Remember me</label>
              <div className='modal-forget-pass'>
              <Link to="/reset">Forgot Password?</Link>

              </div>
            </div>

            <button className='modal-btn' style={{"backgroundColor":"rgba(132, 181, 159, 1)"}}
              onClick={logIn}>
              Login
            </button>

            <div className='modal-login-with'>Or Login with</div>

            <button className='modal-btn' style={{"backgroundColor":"#485A96"}}
              onClick={facebookLogIn}>
              <img src={require('../Images/facebook-icon.png')} alt='Logo'
               className='modal-btn-icon'/>
              Facebook
            </button>
            <button className='modal-btn' style={{"backgroundColor":"#79ACFF"}}
              onClick={googleLogIn}>
              <img src={require('../Images/google-icon.png')} alt='Logo'
               className='modal-btn-icon'/>
              Google
            </button>

            <div className='modal-login-with'>
              You have no account?
            </div>

            <div className='modal-creacte-account'>
                Please Create An Account
            </div>

          </div> 
        </div>

    ) : null} </>
    
  )
}

