import React from 'react'
import '../css/ClientDetails.css'

export default function ClientDetails(props) {

  const { name, email, address } = props

  return (
    <div>
        <section className='client-details'>
          <h2>{ name }</h2>
          <p>{ email }</p>
          <p>{ address }</p>
          <p>Sydney, NSW 2000</p>  
        </section>
    </div>
  )
}
