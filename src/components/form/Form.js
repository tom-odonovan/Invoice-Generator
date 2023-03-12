import React from 'react'
import '../../css/Form.css'
import ItemSummary from '../preview/ItemSummary'
import AddInvoiceItems from './AddInvoiceItems';
import EditInvoiceItems from './EditInvoiceItems';
import InvoiceTotals from '../preview/InvoiceTotals';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { FaRegEdit } from 'react-icons/fa'

export default function Form(props) {

  const { invoiceDetails, handleInvoiceDetails,
    vendorDetails, handleVendorDetails,
    clientDetails, handleClientDetails,
    item, handleItem,
    itemList, handleItemList,
    handleDelete, handleEdit,
    isEditingItem, editedItem,
    handleEditedItem, confirmEdit,
    totals, handleTotals,
    paymentDetails, handlePaymentDetails,
    notes, handleNotes,
    preview, showPreview } = props

  return (

    <div className='template-form'>

      <h2>New Invoice</h2>

      {/* INVOICE DETAILS */}

      <div className='form-invoice-details'>
        <div>
          <label htmlFor='invoiceNo'>Invoice number</label>
          <input
            type='text'
            name='number'
            required
            placeholder='Invoice number'
            value={invoiceDetails.number || ''}
            onChange={handleInvoiceDetails}
          ></input>
        </div>

        <div>
          <label htmlFor='date'>Invoice date</label>
          <input
            type='date'
            name='date'
            required
            placeholder='Invoice date'
            value={invoiceDetails.date}
            onChange={handleInvoiceDetails}
          ></input>
        </div>

        <div>
          <label htmlFor='invoiceNo'>Due date</label>
          <input
            type='date'
            name='dueDate'
            required
            placeholder='Due date'
            value={invoiceDetails.dueDate || ''}
            onChange={handleInvoiceDetails}
          ></input>
        </div>
      </div>

      {/* VENDOR DETAILS */}

      <h3>Personal Details</h3>

      <div className='form-vendor-details'>
        <div>
          <div>
            <label htmlFor='name'>Your Full Name</label>
            <input
              type='text'
              name='name'
              required
              placeholder='Enter your name'
              value={vendorDetails.name || ''}
              onChange={handleVendorDetails}
            ></input>
          </div>

          <div>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              name='email'
              required
              placeholder='Enter your email'
              value={vendorDetails.email || ''}
              onChange={handleVendorDetails}
            ></input>
          </div>

        </div>


        <label htmlFor='address'>Address</label>
        <input
          type='text'
          name='address'
          required
          placeholder='Enter your address'
          value={vendorDetails.address || ''}
          onChange={handleVendorDetails}
        ></input>

        <div className='address-ln-2'>
          <div>
            <label htmlFor='suburb'>Suburb</label>
            <input
              type='text'
              name='suburb'
              required
              placeholder='Suburb'
              value={vendorDetails.suburb || ''}
              onChange={handleVendorDetails}
            ></input>
          </div>

          <div>
            <label htmlFor='state'>State/territory</label>
            <select
              name='state'
              required
              value={vendorDetails.state || ''}
              onChange={handleVendorDetails}
            >
              <option value=''>Select State/territory</option>
              <option value='ACT'>ACT</option>
              <option value='NSW'>NSW</option>
              <option value='NT'>NT</option>
              <option value='QLD'>QLD</option>
              <option value='SA'>SA</option>
              <option value='TAS'>TAS</option>
              <option value='VIC'>VIC</option>
              <option value='WA'>WA</option>
            </select>
          </div>

          <div>
            <label htmlFor='postcode'>Postcode</label>
            <input
              type='text'
              name='postcode'
              required
              placeholder='Postcode'
              value={vendorDetails.postcode || ''}
              onChange={handleVendorDetails}
            ></input>
          </div>
        </div>

        <label htmlFor='phone'>Phone number</label>
        <input
          type='text'
          name='phone'
          placeholder='Enter your phone number'
          value={vendorDetails.phone || ''}
          onChange={handleVendorDetails}
        ></input>

        <label htmlFor='website'>Website (optional)</label>
        <input
          type='text'
          name='website'
          placeholder='Your website url'
          value={vendorDetails.website || ''}
          onChange={handleVendorDetails}
        ></input>
      </div>


      {/* CLIENT DETAILS */}

      <h3>Client Details</h3>

      <div className='form-client-details'>
        <div>
          <div>
            <label htmlFor='clientName'>Client's Name</label>
            <input
              type='text'
              name='name'
              required
              placeholder="Enter your client's name"
              value={clientDetails.name || ''}
              onChange={handleClientDetails}
            ></input>
          </div>

          <div>
            <label htmlFor='clientEmail'>Client's email address</label>
            <input
              type='email'
              name='email'
              required
              placeholder="Enter your client's email"
              value={clientDetails.email || ''}
              onChange={handleClientDetails}
            ></input>
          </div>
        </div>



        <label htmlFor='clientAddress'>Client's Address</label>
        <input
          type='text'
          name='address'
          required
          placeholder="Enter your client's address"
          value={clientDetails.address || ''}
          onChange={handleClientDetails}
        ></input>

        <div className='address-ln-2'>
          <div>
            <label htmlFor='clientSuburb'>Suburb</label>
            <input
              type='text'
              name='suburb'
              required
              placeholder='Suburb'
              value={clientDetails.suburb || ''}
              onChange={handleClientDetails}
            ></input>
          </div>

          <div>
            <label htmlFor='clientState'>State/territory</label>
            <select
              name='state'
              required
              value={clientDetails.state || ''}
              onChange={handleClientDetails}
            >
              <option value=''>Select State/territory</option>
              <option value='ACT'>ACT</option>
              <option value='NSW'>NSW</option>
              <option value='NT'>NT</option>
              <option value='QLD'>QLD</option>
              <option value='SA'>SA</option>
              <option value='TAS'>TAS</option>
              <option value='VIC'>VIC</option>
              <option value='WA'>WA</option>
            </select>
          </div>

          <div>
            <label htmlFor='clientPostcode'>Postcode</label>
            <input
              type='text'
              name='postcode'
              required
              placeholder='Postcode'
              value={clientDetails.postcode || ''}
              onChange={handleClientDetails}
            ></input>
          </div>
        </div>
      </div>

      {itemList.length > 0 ? (
        <div>
          <h3>Item Summary</h3>

          <ItemSummary preview={preview} itemList={itemList} />

          {itemList.map((item, index) => (

            isEditingItem === item ? (

              <div className='edit-items' key={index}>
                <EditInvoiceItems
                  index={index}
                  item={item}
                  handleEditedItem={handleEditedItem}
                  editedItem={editedItem}
                  confirmEdit={confirmEdit}
                />
              </div>

            ) : (

                <div className='form-item-summary body' key={index}>
                <div className='flex-table row' >
                  <div className='flex-row first'>{item.description}</div>
                  <div className='flex-row'>{item.quantity}</div>
                  <div className='flex-row'>{item.price}</div>
                  <div className='flex-row'>{item.total}</div>

                  <div className='btn-container'>
                    <button className='edit-btn' onClick={() => handleEdit(index)}>
                      <FaRegEdit size={20} />
                    </button>
                    <button className='delete-btn' onClick={() => handleDelete(index)}>
                      <RiDeleteBin5Line size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )

          ))}

          {/* <InvoiceTotals totals={totals} /> */}
        </div>

      ) : null}

      <h3>Add Invoice Items</h3>
      <AddInvoiceItems
        item={item}
        handleItem={handleItem}
        itemList={itemList}
        handleItemList={handleItemList}
        handleTotals={handleTotals}
      />

      <h3>Payment Options</h3>

      <div className='form-payment-details'>
        <div>
          <label htmlFor='accHolder'>Account holder</label>
          <input
            id='accHolder'
            type='text'
            name='accHolder'
            required
            placeholder='Account holder'
            value={paymentDetails.accHolder || ''}
            onChange={handlePaymentDetails}
          ></input>
        </div>

        <div>
          <label htmlFor='bsb'>BSB number</label>
          <input
            id='bsb'
            type='text'
            name='bsb'
            required
            placeholder='BSB Number'
            value={paymentDetails.bsb || ''}
            onChange={handlePaymentDetails}
          ></input>
        </div>

        <div>
          <label htmlFor='accNumber'>Account number</label>
          <input
            id='accNumber'
            type='text'
            name='accNumber'
            required
            placeholder='Account Number'
            value={paymentDetails.accNumber || ''}
            onChange={handlePaymentDetails}
          ></input>
        </div>
      </div>

      <h3>Notes</h3>
      <label htmlFor='notes'>Additional notes</label>
      <textarea
        id='notes' 
        className='client-notes'
        placeholder='Additional notes for the client'
        value={notes || ''}
        onChange={handleNotes}
      ></textarea>

      <button
        className='preview-btn'
        onClick={showPreview}
      >Preview Invoice</button>

        
    </div>

  )
}
