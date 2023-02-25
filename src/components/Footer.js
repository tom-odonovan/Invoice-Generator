import React from 'react'
import '../css/Footer.css'

export default function Footer({ hidePreview }) {
  return (
    <div>
        <footer>
          <button
            className='preview-btn'
            onClick={hidePreview}
          >Edit</button>
        </footer>
    </div>
  )
}
