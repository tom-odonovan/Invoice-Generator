import React from 'react'
import '../../css/InvoiceDetails.css'

export default function InvoiceDetails({abn, invoiceDetails}) {

  const { number, date, dueDate } = invoiceDetails

  const dateStr = new Date(date).toLocaleString('en-us', { year: 'numeric', month: 'short', day: '2-digit' })
  const dueDateStr = new Date(dueDate).toLocaleString('en-us', { year: 'numeric', month: 'short', day: '2-digit' })

  return (
    <div>
        <section className='invoice-details'>
          <div className='abn'>
          {/* Add spaces between digits for readability */}
          <p><b>ABN:</b>{abn ? `${abn.slice(0, 2)} ${abn.slice(2, 5)} ${abn.slice(5, 8)} ${abn.slice(8, 11)}` : ''}</p>
          </div>

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
