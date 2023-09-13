

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import './index.css';

function App() {
  
  return (
      <div className="body">
       
          <Navbar/>
           <Routes>
             <Route path='/' element= {<Home/>}/>
             <Route path='/contact' element= {<Contact/>}/>
             <Route path="/dentista/:id" element={<Detail/>} />
             <Route path='/favs' element = {<Favs/>}/>
           </Routes>
          <Footer/>
      
      </div>
  );
}

export default App;
            
            
