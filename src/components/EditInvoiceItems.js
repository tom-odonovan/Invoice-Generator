import React from 'react'
import '../css/EditInvoiceItem.css'
import { useRef } from 'react'
import { BsCheck2 } from 'react-icons/bs'

export default function EditInvoiceItems(props) {
    const { index, item, handleItem, itemList, confirmEdit } = props

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedItemIndex = index

        confirmEdit(item)

        // Reset state of item
        // handleItem({ description: '', quantity: '', price: '', total: '' });

        // Set focus back to first input field
        // inputRef.current.focus()
    }

    return (
        <div>
            <form className='edit-item' onSubmit={handleSubmit}>
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
                            <BsCheck2 size={15} />
                        </button>
                    </div>
                </div>



            </form>
        </div>
    )
}
