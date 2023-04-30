import React from 'react'
import '../../css/SuperDetails.css'

export default function SuperDetails({ superDetails }) {

    const { fundName, fundABN, usi, memberNumber } = superDetails

    return (
        <div className='super-details'>
            <h4>Nominated Super Fund</h4>
            <ul>
                <li><b>Fund name:</b> {fundName || ''}</li>
                <li><b>ABN:</b> {fundABN ? `${fundABN.slice(0, 2)} ${fundABN.slice(2, 5)} ${fundABN.slice(5, 8)} ${fundABN.slice(8, 11)}` : ''}</li>
                <li><b>USI:</b> {usi || ''}</li>
                <li><b>Membership number:</b> {memberNumber || ''}</li>
            </ul>
        </div>
    )
}