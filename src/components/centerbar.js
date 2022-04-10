import React from 'react'
import Center from "../image/center.jpg"
import { Button } from 'react-bootstrap'

const centerbar = () => {
  return (
      <div className='container content'>
          <img className='img' src={Center} />
        <div className='form-center'>
            <h3>JOIN NOW</h3>
            <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                 <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
         </div>
         <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="inputPassword" />
         </div>
        </div>
        <Button className='bg-success btn-center mx-auto'>JOIN NOW</Button> 
        <h6 className='terms'>By creating account you accept <a href='#'> Terms and Condition </a></h6>
      </div>
  )
}

export default centerbar