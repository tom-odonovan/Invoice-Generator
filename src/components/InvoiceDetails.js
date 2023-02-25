import React from 'react'
import '../css/InvoiceDetails.css'

export default function InvoiceDetails() {
  return (
    <div>
        <section className='invoice-id'>
          <div>
            <h1>INVOICE</h1>
          </div>
          <ul>
            <li><b>Invoice Number:</b></li>
            <li><b>Invoice Date:</b></li>
            <li><b>Due Date</b></li>
          </ul>
        </section>
    </div>
  )
}
