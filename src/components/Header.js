import React from 'react'
import '../css/Header.css'
import { BiPrinter } from 'react-icons/bi'

export default function Header({ handlePrint }) {
  return (
    <div>
        <header>
          <h1>INVOICE</h1>
          <div>
            <ul className="publish-btns">
              <li>
                <button className='print-btn' onClick={handlePrint}>
                  <BiPrinter size={20} />Print
                </button>
              </li>
              {/* <li>
                <button
                  className='download-btn' 
                >Download</button>
              </li>
              <li>
                <button
                  className='send-btn' 
                >Send</button>
              </li> */}
            </ul>
          </div>
        </header>
    </div>
  )
}
