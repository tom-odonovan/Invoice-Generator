import React from 'react'
import '../css/ItemSummary.css'

export default function ItemSummary(props) {

  const { preview, itemList } = props

  return (
    <div>
      
      <div className='preview-item-summary'>
          <div className='flex-table header'>
            <div className='flex-row first'>Description</div>
            <div className='flex-row'>Quantity</div>
            <div className='flex-row'>Price ($)</div>
            <div className='flex-row'>Total ($)</div>
          </div>

          {itemList.map(({ description, quantity, price, total }, index) => (

            <div className='flex-table row' key={index}>
              <div className='flex-row first'>{description}</div>
              <div className='flex-row'>{quantity}</div>
              <div className='flex-row'>{price}</div>
              <div className='flex-row'>{total}</div>
            </div>
            
          ))}

          
      </div>

    </div>
  )
}
