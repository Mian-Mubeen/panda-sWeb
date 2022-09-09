import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from"./mycomponents/Header"
import Home from"./mycomponents/Home"
import Footer from"./mycomponents/Footer"
import Sign from"./mycomponents/Sign"
import Templates from"./mycomponents/Templates"
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
function App() {
  return (
<>
{/* <Header/> */}
 <Router>
<Header/>
 <Routes>
        <Route exact path="/" element={<Home/>}> </Route>
            <Route exact path="/find" element={<Templates/>} >  </Route>
            <Route exact path="/signin" element={<Sign/>} >  </Route>
          </Routes>
    <Footer/>
    </Router>  
    </>
  );
}

export default App;

