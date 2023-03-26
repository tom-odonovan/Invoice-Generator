import React from 'react'
import '../../css/AddInvoiceItem.css'
import { GoPlus } from 'react-icons/go'
import { useRef } from 'react'
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


export default function AddInvoiceItems(props) {
    const { item, handleItem, handleItemList, error} = props

    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!item.description) {
            toast.error("Please add item description")
        } else if (!item.quantity) {
            toast.error("Please fill in item quantity")
        } else if (!item.price) {
            toast.error("Please fill in item price")
        } else {
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
    }

    return (
        <div className='add-item'>

            <ToastContainer position="top-right" theme="colored" />

            <form onSubmit={handleSubmit}>
                <div className='item-details'>
                    <div>
                        <label htmlFor='description'>Item description</label>
                        <input
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
                            type='number'
                            step={0.25}
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
                            type='number'
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
