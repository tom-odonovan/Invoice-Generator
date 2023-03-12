import React from 'react'
import '../../css/ContactInfo.css'

export default function ContactInfo(props) {

    const { phone, email, website } = props

  return (
      <div className='contact-info'>
          <h4>Contact Information</h4>
          <ul>
            <li><b>Phone:</b>{phone}</li>
        <li><b>Email:</b><a href={`mailto:${email}`}>{email}</a></li>
            { website ? (
                  <li><b>Website:</b><a href={`${website}`}>{website}</a></li>
                ) : null 
            }
              
          </ul>
      </div>
  )
}
