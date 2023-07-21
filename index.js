import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect,useState,useRef} from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {Carousel} from 'react-bootstrap';
import Body from './body.js';
import Skills from './skills.js';
import Education from './education.js';
import Axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
const domNode = document.getElementById('root');

const Structure = ()=>{
  const [data,setData] = useState("");
  // useEffect(()=>{
  //   fetch("/api").then(
  //     response=>response.json()
  //   ).then(
  //     data=>{
  //       setBackendData(data)
  //     }
  //   )
  // })
  const getData=async()=>{
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }
  
  useEffect(()=>{
    getData();
  },[]);
  const interestRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  return(
  <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>
    <BrowserRouter>
      <Routes>
         <Route index element = {<Body/>}/>   {/*this is to indicate that the main page is Body */}
        <Route path = "/body" element = {<Body/>}></Route>
        <Route path = "/skills" element = {<Skills/>}></Route>
        <Route path = "/education" element = {<Education/>}></Route>
      </Routes>
    </BrowserRouter>
    {/* {(typeof backendData.users === 'undefined')? (
      <p>Loading...</p>
    ): (
      backendData.users.map((user,i)=>{
        <p key={i}>{user}</p>
      })
    )} */}
    <p>{data}</p>
  </div>
)
}
const root = createRoot(domNode);
root.render(<Structure/>);

export default Structure;
