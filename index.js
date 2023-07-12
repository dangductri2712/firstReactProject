import 'bootstrap/dist/css/bootstrap.css';
import React, {useRef,useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Body from './body.js';
import Skills from './skills.js';
import Interests from './interest.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
const domNode = document.getElementById('root');

const Structure = ()=>{
  const interestRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Body/>}/>
        <Route path = "/body" element = {<Body/>}></Route>
        <Route path = "/interests" element = {<Interests/>}></Route>
        <Route path = "/skills" element = {<Skills/>}></Route>
        <Route path = "/education" element = {<Body/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)
}
const root = createRoot(domNode);
root.render(<Structure/>);

export default Structure;
