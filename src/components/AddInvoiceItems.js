import React from 'react'
import ItemSummary from './ItemSummary'
import '../css/AddInvoiceItem.css'


export default function AddInvoiceItems(props) {
    const { itemSummary, handleItemSummary } = props

  return (
    <div className='new-item'>
        <div>
            <label htmlFor='description'>Item description</label>
            <input
                type='text'
                name='description'
                placeholder='Item description'
                value={itemSummary.description || ''}
                onChange={handleItemSummary}
            ></input>
        </div>
        <div>
            <label htmlFor='quantity'>Quantity</label>
            <input
                type='number'
                name='quantity'
                placeholder='0'
                value={itemSummary.quantity || ''}
                onChange={handleItemSummary}
            ></input>
        </div>
        <div>
            <label htmlFor='price'>Price</label>
            <input
                type='number'
                name='price'
                placeholder='$ 0.00'
                value={itemSummary.price || ''}
                onChange={handleItemSummary}
            ></input>
        </div>
        <div>
              <label htmlFor='total'>Total</label>
            <input
                type='number'
                name='total'
                placeholder='$ 0.00'
                value={itemSummary.quantity * itemSummary.price || ''}
                onChange={handleItemSummary}
                
            ></input>
        </div>
    </div>
  )
}


// How can I trigger the handleItemSummary function for the 'Total' input if It's value is auto-populated by the 'quantity' and 'price' inputs?