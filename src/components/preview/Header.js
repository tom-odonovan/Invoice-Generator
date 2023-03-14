import React from 'react'
import '../../css/Header.css'
import { BiPrinter } from 'react-icons/bi'
import { FiDownload } from 'react-icons/fi'
import { FiShare2 } from 'react-icons/fi'

export default function Header(props) {

  const { handlePrint, handleDownload, handleShare } = props

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
                <button className='download-btn' onClick={handleDownload}>
                  <FiDownload size={20} />Download
                </button>
              </li>
              <li>
                <button className='share-btn' onClick={handleShare}>
                  <FiShare2 size={20} />Share
                </button>
              </li> */}
            </ul>
          </div>
        </header>
    </div>
  )
}
