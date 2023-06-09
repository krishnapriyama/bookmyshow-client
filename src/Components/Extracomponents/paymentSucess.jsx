import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

const paymentSucess = () => {

  const location = useLocation();
  const paymentResp = location.state ? location.state.paymentResp : null;



  return (
    <>
    <div className='h-screen w-full bg-gray-800 flex justify-center items-center'>
  <div className="bg-white p-6 w-1/4 items-center justify-center mx-auto">
    <div className='justify-center'>
      <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
        <path fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
        </path>
      </svg>
      <div className="text-center">
        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
        <p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
        <p> Have a great day! </p>
        <h2 className='mt-4 text-2xl font-bold '>
        {paymentResp[0].movie.moviename} <br></br>
        {paymentResp[0].theater.name}
        </h2>
        <div className='h-full w-full items-center justify-center flex mt-4 '>
        <QRCode value={paymentResp[0].show.SeatNumber[0]}/>
        </div>
        <h3 className='mt-5 font-bold text-xl'>{paymentResp[0].show.SeatNumber.map((seat, index) => (<div key={index}>{seat}</div>))}</h3>
        <div className="py-10 text-center">
          <Link to='/'>
            <button href="#" className="px-12 bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default paymentSucess
