
//import 'bootstrap/dist/css/bootstrap.css';
import React, {useRef,useState} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Body from './body';
const domNode = document.getElementById('root');

const Structure = ()=>{
  const interestRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  return(
  <div>
    {Body()} 
  </div>
)
}
const root = createRoot(domNode);
root.render(<Structure/>);

export default Structure;
