import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Register from './Register'
import './App.css';
import Login from './Login';
import Landing from './Landing';
import { useState } from 'react';

function App() {

    return (
      <div>
        <BrowserRouter>
        <div>
          <Routes>
          <Route path='/' element={<Landing/>}></Route>
            <Route path='/Home.js' element={<Home/>}></Route>
            <Route path='/About.js' element={<About/>}></Route>
            <Route path='/Service.js' element={<Service/>}></Route>
            <Route path='/Register.js' element={<Register/>}></Route>
            <Route path='/Login.js' element={<Login/>}></Route>
            <Route path='/Landing.js' element={<Landing />}></Route>
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    );
}

export default App;
