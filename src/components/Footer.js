import React from 'react'
import '../css/Footer.css'

export default function Footer({ hidePreview }) {
  return (
    <div>
        <footer>
          <ul>
            <li><b>Your name:</b> Tom O'Donovan</li>
            <li><b>Your email:</b> tom@amcco.com.au</li>
            <li><b>Phone number:</b> 0413 543 309</li>
            <li><b>Bank:</b> Commonwealth</li>
            <li><b>Account holder:</b> Tom O'Donovan</li>
            <li><b>Account number:</b> xxxx xxxx</li>
            <li><b>Website:</b> tom.odonovan.com.au</li>
          </ul>

          <button
            className='preview-btn'
            onClick={hidePreview}
          >Edit</button>
        </footer>
    </div>
  )
}
