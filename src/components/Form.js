import React from 'react'
import '../css/Form.css'

export default function Form({ showPreview }) {
  return (
    <div>
        <div className='template-form'>
            <input type='text' placeholder='Enter your name'></input>
            <button 
              className='preview-btn'
              onClick={showPreview}
            >Preview Invoice</button>
        </div>
    </div>
  )
}
