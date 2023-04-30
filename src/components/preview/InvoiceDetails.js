import React from 'react'
import '../../css/InvoiceDetails.css'

export default function InvoiceDetails({invoiceDetails}) {

  const { number, date, dueDate } = invoiceDetails

  const dateStr = new Date(date).toLocaleString('en-us', { year: 'numeric', month: 'short', day: '2-digit' })
  const dueDateStr = new Date(dueDate).toLocaleString('en-us', { year: 'numeric', month: 'short', day: '2-digit' })

  return (
    <div>
        <section className='invoice-details'>
          <div className='invoice-id'>
            <ul>
              <li><b>Invoice Number:</b>{ number }</li>
              <li><b>Issue Date:</b>{ dateStr }</li>
              <li><b>Due Date:</b>{ dueDateStr }</li>
            </ul>
          </div>
          
        </section>
    </div>
  )
}
