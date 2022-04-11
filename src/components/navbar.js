import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import img1 from "../image/Logo 2.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from "@fortawesome/free-solid-svg-icons";
import {faFire} from "@fortawesome/free-solid-svg-icons";
import {faTowerBroadcast} from "@fortawesome/free-solid-svg-icons";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";




function navbar() {
    return (
        <div classNameNameName='container '>
            <nav className="navbar navbar-expand-lg navbar-light nav-color container-fluid">
                <img className='image1' src={img1} />
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>
  <div className="collapse  navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item  active">
        <a className="nav-link text-success" href="#"> <span className='text-white'><FontAwesomeIcon icon={faHouse} /></span> Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-success" href="#"> <span className='text-white'><FontAwesomeIcon icon={faTowerBroadcast} /></span> Live</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-success" href="#"> <span className='text-white'><FontAwesomeIcon icon={faCalendarDays} /></span> Upcoming</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-success" href="#"> <span className='text-white'><FontAwesomeIcon icon={faFire} /></span> Popular</a>
      </li>
    </ul>
  </div>
  <div className="login mx-4">
    <div>
         <Button className='btn btn-login btn-success'>LOGIN</Button>
    </div>
    <div>
          <p>JOIN NOW</p>
    </div>
</div>
</nav>
        </div>
    );
}

export default navbar;