import React from 'react'
import '../css/VendorDetails.css'

export default function VendorDetails({vendorDetails}) {

    const { name, email, address, suburb, state, postcode } = vendorDetails

  return (
    <div>
        <section className='vendor-details'>
          <h2>{ name }</h2>
          <p>{ email }</p>
          <p>{ address }</p>
          <p>{suburb}, {state} {postcode}</p>
        </section>
    </div>
  )
}
