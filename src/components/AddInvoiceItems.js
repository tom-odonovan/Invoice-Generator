import React from 'react'
import ItemSummary from './ItemSummary'
import '../css/AddInvoiceItem.css'


export default function AddInvoiceItems(props) {
    const { item, handleItem, itemList, handleItemList } = props

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            description: item.description,
            quantity: item.quantity,
            price: item.price,
            total: item.total
        }

        handleItemList(newItem)

        // Reset state of item
        handleItem({ description: '', quantity: '', price: '', total: '' });
    }

  return (
    <div>
        <form className='add-item' onSubmit={handleSubmit}>
            <div className='item-details'>
                <div>
                    <label htmlFor='description'>Item description</label>
                    <input
                        required
                        type='text'
                        name='description'
                        placeholder='Item description'
                        value={item.description || ''}
                        onChange={handleItem}
                    ></input>
                </div>
                <div>
                    <label htmlFor='quantity'>Quantity</label>
                    <input
                        required
                        type='float'
                        min='0'
                        name='quantity'
                        placeholder='0'
                        value={item.quantity || ''}
                        onChange={handleItem}
                    ></input>
                </div>
                <div>
                    <label htmlFor='price'>Price</label>
                    <input
                        required
                        type='float'
                        min='0'
                        name='price'
                        placeholder='$ 0.00'
                        value={item.price || ''}
                        onChange={handleItem}
                    ></input>
                </div>
                <div>
                    <label htmlFor='total'>Total</label>
                    <input
                        type='number'
                        name='total'
                        placeholder='$ 0.00'
                        value={item.quantity * item.price || ''}
                        onChange={handleItem}

                    ></input>
                </div>
            </div>

            <button type='submit' className='add-item-btn'>+ Add Item</button>

        </form>
    </div>
  )
}
