import React from 'react'
import ItemSummary from './ItemSummary'
import '../css/AddInvoiceItem.css'
import { GoPlus } from 'react-icons/go'
import { useRef } from 'react'


export default function AddInvoiceItems(props) {
    const { item, handleItem, itemList, handleItemList } = props

    const inputRef = useRef(null)

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

        // Set focus back to first input field
        inputRef.current.focus()
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
                        ref={inputRef}
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
                <div>
                    <button type='submit' className='add-item-btn'>
                        <GoPlus size={15} />Add
                    </button>
                </div>
            </div>

            

        </form>
    </div>
  )
}
