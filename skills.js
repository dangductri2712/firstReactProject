import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Index from './index.js';
import Body from './body.js';
const Skills = ()=>{
    const domNode = document.getElementById('root');
    const root = createRoot(domNode);
    return(
        
        <section id="skillsContainer">
            <img src="https://static.vecteezy.com/system/resources/previews/006/631/117/original/bright-cloudy-sky-cartoon-illustration-background-free-vector.jpg"></img>
        
        
    <div id="skills">
    <ul className="nav" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"onClick = {()=>{
                function home(){
                    return(
                        <>
                        {Body()}
                        </>
                    )
                }
                root.render(<home/>)
              }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
          </ul>
        <div id="coding">
            <h1> Languages</h1>
            <p>I am proficient in these following languages:</p>
            <ul>
                <li>
                    C++
                </li>
                <li>
                    Java
                </li>
                <li>
                    JS
                </li>
                <li>
                    JQuery
                </li>
                <li>
                     MySQL
                </li>
            </ul>
        </div>
        <div id="tools">

            <h1> Coding tools</h1>
            <p>I am also familiar with the following coding software:</p>
            <ul>
                <li>
                    Visual Studio Code
                </li>
                <li>
                    Jetbrain
                </li>
                <li>
                    SQL Database
                </li>
            </ul>
        </div>
    </div>
    </section>

    )
}

export default Skills;