import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Index from './index.js';
//import 'bootstrap/dist/css/bootstrap.css';
const Interests = ()=>{
    return(
        <>
        <ul className="nav" >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./body">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
          </ul>
    <h1>Movies/TV Shows</h1> still don't know what is the reason for it to not work
    
        <div id="carouselExampleAutoplaying" className="carousel drive" data-bs-drive="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://visanuocngoai.vn/wp-content/uploads/2022/06/gioi-thieu-ve-harry-potter-3.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src="https://static.wikia.nocookie.net/hannibal/images/f/f6/HBL_Complete_Series_Poster.jpg/revision/latest?cb=20200625050724" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item active">
              <img src="https://upload.wikimedia.org/wikipedia/vi/a/a1/Cyberpunk_Edgerunners_poster.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
      

</>
)
}

export default Interests;
