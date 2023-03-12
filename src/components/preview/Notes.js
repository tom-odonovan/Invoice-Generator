import React from 'react'
import '../../css/Notes.css'

export default function Notes({notes}) {
  return (
    <div>
        <section className='notes'>
          <h4>Thank You For Your Business</h4>
          <p>Additional notes:</p>
          <div className='notes-cont'>{notes}</div>
        </section>
    </div>
  )
}
