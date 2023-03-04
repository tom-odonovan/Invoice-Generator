import React from 'react'
import '../css/Footer.css'
import { FaRegEdit } from 'react-icons/fa'

export default function Footer({ hidePreview }) {
  return (
    <div>
        <footer>
          <button className='preview-btn' onClick={hidePreview}>
            <FaRegEdit size={15} />Edit
          </button>
        </footer>
    </div>
  )
}
