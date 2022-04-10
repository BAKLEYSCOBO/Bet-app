import React from 'react'
import Tigo from "../image/tigo.jpg"
import Mpesa from "../image/Mpesa.jpg"
import Airtel from "../image/airtel.jpg"

const leftbar = () => {
  return (
      <div className='container cont'>
          <h5>HOW TO DEPOSIT IN KOCHA BET BINGO</h5>
          <ol>
              <li>Inter your mobile money menu</li>
              <li>Make payments</li>
              <li>Then pick Enter Business Number</li>
              <li>Enter your deposit amount and PIN</li>
              <li>Bet once you've received your SMS confirmation</li>
          </ol>
          <div>
              <h5>PAYMENTS NUMBER</h5>
              <div className='container'>
              <ul>
                  <img className='wakala' src={Tigo} /> <br />
                  <img className='wakala' src={Mpesa} /> <br />
                  <img className='wakala' src={Airtel} />
              </ul>
              </div>

          </div>
      </div>
  )
}

export default leftbar