import React from 'react'
import '../../css/EditInvoiceItem.css'
import { useRef } from 'react'
import { BsCheck2 } from 'react-icons/bs'

export default function EditInvoiceItems(props) {
    const { index, item, editedItem, handleEditedItem, confirmEdit } = props

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        confirmEdit(editedItem || item, index)
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
                            value={editedItem.description || item.description || ''}
                            onChange={handleEditedItem}
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
                            value={editedItem.quantity || item.quantity || ''}
                            onChange={handleEditedItem}
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
                            value={editedItem.price || item.price || ''}
                            onChange={handleEditedItem}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor='total'>Total</label>
                        <input
                            type='number'
                            name='total'
                            placeholder='$ 0.00'
                            value={editedItem.quantity * editedItem.price || item.quantity * item.price || ''}
                            onChange={handleEditedItem}

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
