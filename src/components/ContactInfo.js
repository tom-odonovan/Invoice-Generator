import React from 'react'
import '../css/ContactInfo.css'

export default function ContactInfo() {
  return (
      <div className='contact-info'>
          <h4>Contact Information</h4>
          <ul>
              <li><b>Phone:</b> 0412 345 678</li>
              <li><b>Email:</b> tom@example.com.au</li>
              <li><b>Website:</b><a>www.tom.odonovan.com.au</a></li>
          </ul>
      </div>
  )
}
