import React from 'react'
import '../css/Notes.css'

export default function Notes({vendorName}) {
  return (
    <div>
        <section className='notes'>
          <h4>Thank You For Your Business</h4>
          <p><b>Additional notes:</b></p>
        <p>Thank you for choosing {vendorName || 'us'} for your project. Please let us know if there is anything else we can do for you in the future. We look forward to working with you again soon. </p>
        </section>
    </div>
  )
}
