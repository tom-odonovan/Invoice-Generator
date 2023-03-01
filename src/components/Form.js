import React from 'react'
import '../css/Form.css'
import AddInvoiceItems from './AddInvoiceItems';

export default function Form(props) {

  const { invoiceDetails, handleInvoiceDetails,
          vendorDetails, handleVendorDetails,
          clientDetails, handleClientDetails,
          item, handleItem,
          itemList, handleItemList,
          showPreview } = props

  const handleLogDetails = () => {
    console.log(invoiceDetails)
    console.log(vendorDetails);
    console.log(clientDetails)
    console.log(itemList)
  };

  return (

    <div className='template-form'>

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

      <h3>Item Summary</h3>

      {itemList.length > 0 ? (

        <table className='item-summary'>
          <thead>
            <tr>
              <td>Description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>

          <tbody>
            {itemList.map(({description, quantity, price, total}, index) => (
              <tr key={index}>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      ) : null }
      
      <AddInvoiceItems
        item={item}
        handleItem={handleItem}
        itemList={itemList}
        handleItemList={handleItemList}
      />
      

      <button 
        className='preview-btn'
        onClick={showPreview}
      >Preview Invoice</button>

      <button 
        className='preview-btn'
        type='button'
        onClick={handleLogDetails}
      >Log details</button>
    </div>

  )
}
