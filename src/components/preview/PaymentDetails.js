import React from 'react'
import '../../css/PaymentDetails.css'

export default function PaymentDetails({paymentDetails}) {

  const { accHolder, bsb, accNumber } = paymentDetails

  return (
    <div className='payment-details'>
        <h4>PAYMENT OPTIONS</h4>
        <ul>
        <li><b>Account holder:</b> {accHolder || ''}</li>
        <li><b>BSB number:</b> {bsb ? `${bsb.slice(0, 3)} ${bsb.slice(3, 6)}` : ''}</li>
        <li><b>Account number:</b> {accNumber ? `${accNumber.slice(0, 4)} ${accNumber.slice(4, 8)}` : ''}</li>
        </ul>
    </div>
  )
}
