import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import img1 from "../image/Logo 2.png"

function navbar() {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light nav-color">
                <div className='col col-md-3'>
                    <img className=' image1' src={img1} />
                </div>
                <div className='col col-md-6'>
                    <div className='row row-1'>
                        <div className='col-1'>
                            <h2>HOME</h2>
                        </div>
                        <div className='col-1'>
                            <h2>LIVE</h2>
                        </div>
                        <div className='col-1'>
                            <h2>UPCOMING</h2>
                        </div>
                        <div className='col-1'>
                            <h2>POPULAR</h2>
                        </div>
                    </div>
                </div>
                <div className='col col-xs-3'>
                    <Button className='bg-success'>LOGIN</Button>
                    <span className='text-white px-2'>JOIN NOW</span>
                </div>
            </nav>
        </div>
    );
}

export default navbar;