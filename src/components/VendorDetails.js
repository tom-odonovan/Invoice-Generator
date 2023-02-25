import React from 'react'
import '../css/VendorDetails.css'

export default function VendorDetails(props) {

    const { name, email, address } = props

  return (
    <div>
        <section className='vendor-details'>
          <h2>{ name }</h2>
          <p>{ email }</p>
          <p>{ address }</p>
          <p>Manly, NSW 2095</p>
        </section>
    </div>
  )
}
