import React, {useState,  useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.css';
import Skills from './skills.js';
import Axios from 'axios';
import FormData from 'form-data';
const Body = ()=>{
    const rootModule = document.getElementById('root');
    const root = createRoot(rootModule);
    const [mcOpen,setMcOpen] = useState(false);
    const [fvOpen,setFvOpen] = useState(false);
    const [data1,setPostData1] = useState('');
    const [data2,setPostData2] = useState('');
    
    useEffect(()=>{
        postData();
    })
    const postData = ()=>{
      if(document.getElementById('email').value!=undefined && document.getElementById('password').value!=undefined){
        fetch('http://localhost:5000/postData',{
          method: "post",
          headers:{
            'Content-type':'application/json'
          },
          body: JSON.stringify({"email": ''+data1, "password": ''+data2})
        })
        .then(
          res=>res.json()
        )
        .then(
          data=>{
            console.log(data)
          }
        )
      }
    }
    return(
      
      <section className="all">
      <section id="background" >
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./body">Home</a>
            </li>
          {/* reminder: in the href part, don't use something like ./body.js. Just use './body so that it will come out exactly like on the browser's url  */}
            <li className="nav-item">
              <a className="nav-link" href="#experiences">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./education">Education</a>
            </li>
          </ul>
            <img src="https://static.vecteezy.com/system/resources/previews/006/631/117/original/bright-cloudy-sky-cartoon-illustration-background-free-vector.jpg" width="100%" height="100%"alt="background"></img>
  
            <div id="introduction">
              <h1 id="headline">
              Hi there
              I'm Danny Dang
              </h1>
              <span>I am into</span><p>web developing. PLease review my page to know more about me</p>
              
            </div>
            <div id="avatar">
              <img src="https://images6.alphacoders.com/106/thumb-1920-1067005.jpg"></img>
            </div>
        </section>
      <section id="about" className="row">
            <div className="row ">
              <div className="card col-6  " id="experiences">
                <img src="https://www.tailieuielts.com/wp-content/uploads/2022/01/experience-di-voi-gioi-tu-gi.jpg" alt='hobby' className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">Experiences</h5>
                    
                      <p onClick={()=>{setMcOpen(!mcOpen)}} className="experienceCompany">McDonald</p>
                      {mcOpen && <ul>
                        <li>
                          Position: Part-time team member
                        </li>
                        <li>
                          Salary: 16.5$/hour
                        </li>
                        <li>
                          Duration: 4 months
                        </li>
                      </ul>}
                    <br></br>
                      <p onClick={()=>{
                        setFvOpen(!fvOpen)
                      }} className="experienceCompany">FV Hospital</p>
                      {fvOpen && <ul>
                        <li>
                          Position: Intern at ICT position
                        </li>
                        <li>
                          Salary: 222$/month
                        </li>
                        <li>
                          Duration: 2 months
                        </li>
                      </ul>}
                </div>
                
              </div>
              <div className="card col-6">
                <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2019/08/02070937/skills-for-resume.png" alt='skills' className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">Skills</h5>
                  <ul>
                    <li>
                      Coding
                    </li>
                    <li>
                      Problem-solving
                    </li>
                    <li>
                      Time management
                    </li>
                  </ul>
                </div>
                <a href="./skills">
                <button  className="btn btn-primary" >See more</button>
                </a>
              </div>
              <div className="card col-6">
                <img src="https://nv.edu.vn/wp-content/uploads/2021/06/Education-la-gi-3-1170x800.jpg" alt='education' className="card-img-top"></img>
                <div className="card-body">
                  <h5 className="card-title">Education</h5>
                  <ul>
                    <li>
                      <a href="https://belmont.web.sd62.bc.ca/">Belmont Secondary School</a>
                    </li>
                    <li>
                      <a href="https://camosun.ca/">Camosun College</a>
                    </li>
                  </ul>
                </div>
                <a href='./education'>
                <button  className="btn btn-primary" >See more</button>
                </a>
              </div>
              
              </div>
      </section>
      <div className="row">
      <div id="communication" className="col" >   {/*this is the communication part*/}
        <h1> Contact Me</h1>
        <div className="mt-2 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send " viewBox="0 0 16 16">
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
        </svg> <span className="ml-2">012345678</span>
        </div>

        <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                <a href="https://www.facebook.com/profile.php?id=100040919797592"></a>
              </svg><span className="ml-2">Tri Dang</span>
        </div>

        <div className="mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
              </svg><span className="ml-2">dangductri2712@gmail.com</span>
        </div>
              
        </div>

      <section index="email" className="mt-5 col">
      <form action = "http://localhost:5000/postData"method="post" id="form">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={()=>{
          if(document.getElementById('email').value!=undefined && document.getElementById('password').value!=undefined){
            setPostData1(document.getElementById('email').value);
            setPostData2(document.getElementById('password').value);
          }
        }}className="btn btn-primary">Submit</button>
      </form>
      </section>
      </div>
      </section>

    );
  }

  export default Body;
