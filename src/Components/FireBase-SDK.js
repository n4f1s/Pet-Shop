import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,FacebookAuthProvider,getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,createUserWithEmailAndPassword,
  sendPasswordResetEmail,signOut} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc}
  from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCAt3Xp1vWylkpLUZ3RUtodKjGsDPtZfiU",
  authDomain: "pet-shop-e81bd.firebaseapp.com",
  projectId: "pet-shop-e81bd",
  storageBucket: "pet-shop-e81bd.appspot.com",
  messagingSenderId: "1097782397241",
  appId: "1:1097782397241:web:626aa2e3b0339787be80e8",
  measurementId: "G-ECS23TNTHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

  /*********** User authentication ***********/

        /*********Google auth*********/

  const signInWithGoogle = async (setShowSignInModal) => {

    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    } catch (err) {
        console.error(err);
        alert(err.message);
      }
      setShowSignInModal(prev => !prev)  
  };

  const signInWithFacebook = async () => {
    signInWithPopup(auth, facebookProvider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
      }
  };
    
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
  };

  const logout = () => {
    signOut(auth);
  };


  export {
    auth,
    db,
    signInWithGoogle,
    signInWithFacebook,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };