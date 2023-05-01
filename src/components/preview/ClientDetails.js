import React from 'react'
import '../../css/ClientDetails.css'

export default function ClientDetails({clientDetails}) {

  const { name, email, address, suburb, state, postcode } = clientDetails

  return (
      <section className='client-details'>
        <span>Bill to:<h2>{name}</h2></span>
        <p>{ email }</p>
        <p>{ address }</p>
        <p>{suburb}, {state} {postcode}</p>  
      </section>
  )
}
