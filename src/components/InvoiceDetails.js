import React from 'react'
import '../css/InvoiceDetails.css'

export default function InvoiceDetails({invoiceDetails}) {

  const { number, date, dueDate } = invoiceDetails

  return (
    <div>
        <section className='invoice-details'>
          <div className='invoice-id'>
            <h1>INVOICE</h1>
            <ul>
              <li><b>Invoice Number:</b>{ number }</li>
              <li><b>Invoice Date:</b>{ date }</li>
              <li><b>Due Date</b>{ dueDate }</li>
            </ul>
          </div>
          
        </section>
    </div>
  )
}
