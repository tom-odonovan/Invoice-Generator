import React from 'react'
import '../css/ClientDetails.css'

export default function ClientDetails() {
  return (
    <div>
        <section className='client-details'>
          <h2>Client's Name</h2>
          <p>accounts@example.com.au</p>
          <p>2/1 Some Street</p>
          <p>Sydney, NSW 2000</p>  
        </section>
    </div>
  )
}
