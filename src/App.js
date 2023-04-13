import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import HomePage from '../src/Components/Home-page/Home-page';
import Header from '../src/Components/Header/Header';
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
                <Header />
                <Routes>
                <Route path="/" element={<HomePage/>} />
                </Routes>
            </Router>
        )
    
}

export default App;