import React,{useRef, useEffect, useCallback} from 'react';
import './Login.css';

export const SignIn = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };


  return (
    <>{ showModal ? (

        <div className='modal-bg' ref={modalRef} onClick={closeModal}>
          <div className='modal-container'>

            <div className='modal-header'>
              <div className='modal-header-text'>Login</div> 
              <i class="fa-solid fa-xmark modal-exit" 
              onClick={() => setShowModal(prev => !prev)}></i>
            </div>

            <div className='modal-input-header-text'>
              Email<span style={{"color":"rgba(231, 29, 54, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   xyz@gmail.com" className='modal-input'></input>

            <div className='modal-input-header-text'>
              Password<span style={{"color":"rgba(231, 29, 54, 1)"}}>*</span>
            </div>
            <input type="text" placeholder="   **********" className='modal-input'></input>

            <div className='modal-checkbox'>
              <input type="checkbox" id="save-password" name="save-password"
               style={{"accent-color":"rgba(132, 181, 159, 1)"}}></input>

              <label for="save-password" className='modal-remember-me'>Remember me</label>
              <div className='modal-forget-pass'>
                Forget password?
              </div>
            </div>

            <button className='modal-btn' style={{"backgroundColor":"rgba(132, 181, 159, 1)"}}>
              Login
            </button>

            <div className='modal-login-with'>Or Login with</div>

            <button className='modal-btn' style={{"backgroundColor":"#485A96"}}>
              Facebook
            </button>
            <button className='modal-btn' style={{"backgroundColor":"#79ACFF"}}>
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

