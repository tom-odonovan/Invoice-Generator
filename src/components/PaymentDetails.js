import React from 'react'
import '../css/PaymentDetails.css'

export default function PaymentDetails() {
  return (
    <div className='payment-details'>
        <h4>PAYMENT OPTIONS</h4>
        <ul>
            <li><b>Account Holder:</b> Tom O'Donovan</li>
            <li><b>BSB:</b> xxx xxx</li>
            <li><b>Account Number:</b> xxxx xxxx</li>
        </ul>
    </div>
  )
}
