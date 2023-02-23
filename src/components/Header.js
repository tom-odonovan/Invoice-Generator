import React from 'react'

export default function Header({handlePrint}) {
  return (
    <div>
        <header>
          <div>
            <h1>INVOICE</h1>
          </div>

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
