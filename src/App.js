import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import HomePage from '../src/Components/Home-page/Home-page';
import Reset from '../src/Components/Reset-password/reset';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


function App(showModal, setShowModal){

        return(

            <Router>

                <Navbar />
                <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/reset" element={<Reset/>} />
                </Routes>
            </Router>
        )
    
}

export default App;