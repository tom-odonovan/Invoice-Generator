import React from 'react'
import '../../css/VendorDetails.css'

export default function VendorDetails({vendorDetails}) {

    const { name, abn, email, address, suburb, state, postcode } = vendorDetails

  return (
      <section className='vendor-details'>
        <h2>{ name }</h2>
        <p className='abn'><b>ABN:</b> {abn ? `${abn.slice(0, 2)} ${abn.slice(2, 5)} ${abn.slice(5, 8)} ${abn.slice(8, 11)}` : ''}</p>
        <p>{ email }</p>
        <p>{ address }</p>
        <p>{suburb}, {state} {postcode}</p>
      </section>
  )
}
