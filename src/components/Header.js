import React from 'react'
import '../css/Header.css'

export default function Header({ handlePrint }) {
  return (
    <div>
        <header>
          <div>
            <ul className="publish-btns">
              <li>
                <button
                  className='print-btn' 
                  onClick={handlePrint}
                >Print</button>
              </li>
              <li>
                <button
                  className='download-btn' 
                >Download</button>
              </li>
              <li>
                <button
                  className='send-btn' 
                >Send</button>
              </li>
            </ul>
          </div>
        </header>
    </div>
  )
}
