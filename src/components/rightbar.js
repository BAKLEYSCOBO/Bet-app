import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const rightbar = () => {
  return (
    <div className='container cont'>
        <h5>CHECK YOUR BET SLIP</h5>
        <form class="row g-3">
     <div class="col-auto">
     <input type="password" class="form-control" id="inputPassword2" placeholder="Bet slip" />
       </div>
       <Button className='bg-success ml-auto btn-1'>GO</Button> 
      </form>
    </div>
  )
}

export default rightbar