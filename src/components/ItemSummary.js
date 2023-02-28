import React from 'react'
import '../css/ItemSummary.css'

export default function ItemSummary(props) {

  const { description, quantity, price, total } = props

  return (
    <div>
        <table className='item-summary'>
          <thead>
            <tr>
              <td>Item Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{ description }</td>
              <td>{ quantity }</td>
              <td>{ price }</td>
              <td>{ total }</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
