import React from 'react'
import '../../css/ClientDetails.css'

export default function ClientDetails({clientDetails}) {

  const { name, email, address, suburb, state, postcode } = clientDetails

  return (
    <div>
        <section className='client-details'>
          <h2>{ name }</h2>
          <p>{ email }</p>
          <p>{ address }</p>
          <p>{suburb}, {state} {postcode}</p>  
        </section>
    </div>
  )
}
