import React from 'react'
import '../css/ItemSummary.css'

export default function ItemSummary({ itemList }) {

  return (
    <div>
      <table className='item-summary preview'>
        <thead>
          <tr>
            <td className='description'>Description</td>
            <td>Quantity</td>
            <td>Price ($)</td>
            <td>Total ($)</td>
          </tr>
        </thead>

        {itemList.map(({ description, quantity, price, total }, index) => (
          <tbody key={index}>
            <tr>
              <td>{description}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{total}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
