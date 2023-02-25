import React from 'react'
import '../css/Form.css'

export default function Form(props) {

  const { vendorDetails, handleVendorDetails,
          clientDetails, handleClientDetails,
          showPreview } = props

  const handleLogDetails = () => {
    console.log(vendorDetails);
    console.log(clientDetails)
  };

  return (
    <div>
        <form className='template-form'>

          {/* VENDOR DETAILS */}

          <label htmlFor='name'>Your Full Name</label>
          <input 
            type='text'
            name='name'
            required 
            placeholder='Enter your name'
            value={vendorDetails.name || ''}
            onChange={handleVendorDetails}
          ></input>

          <label htmlFor='email'>Email address</label>
          <input 
            type='email'
            name='email'
            required
            placeholder='Enter your email'
            value={vendorDetails.email || ''}
            onChange={handleVendorDetails}
          ></input>

          <label htmlFor='address'>Address</label>
          <input 
            type='text'
            name='address'
            required 
            placeholder='Enter your address'
            value={vendorDetails.address || ''}
            onChange={handleVendorDetails}
          ></input>

          <label htmlFor='suburb'>Suburb</label>
          <input 
            type='text'
            name='suburb'
            required 
            placeholder='Suburb'
            value={vendorDetails.suburb || ''}
            onChange={handleVendorDetails}
          ></input>

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

          <label htmlFor='postcode'>Postcode</label>
          <input 
            type='text'
            name='postcode'
            required 
            placeholder='Postcode'
            value={vendorDetails.postcode || ''}
            onChange={handleVendorDetails}
          ></input>

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


          {/* CLIENT DETAILS */}

          <label htmlFor='clientName'>Client's Name</label>
          <input 
            type='text'
            name='name'
            required 
            placeholder="Enter your client's name"
            value={clientDetails.name || ''}
            onChange={handleClientDetails}
          ></input>

          <label htmlFor='clientEmail'>Client's email address</label>
          <input 
            type='email'
            name='email'
            required
            placeholder="Enter your client's email"
            value={clientDetails.email || ''}
            onChange={handleClientDetails}
          ></input>

          <label htmlFor='clientAddress'>Client's Address</label>
          <input 
            type='text'
            name='address'
            required 
            placeholder="Enter your client's address"
            value={clientDetails.address || ''}
            onChange={handleClientDetails}
          ></input>

          <label htmlFor='clientSuburb'>Suburb</label>
          <input 
            type='text'
            name='suburb'
            required 
            placeholder='Suburb'
            value={clientDetails.suburb || ''}
            onChange={handleClientDetails}
          ></input>

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

          <label htmlFor='clientPostcode'>Postcode</label>
          <input 
            type='text'
            name='postcode'
            required 
            placeholder='Postcode'
            value={clientDetails.postcode || ''}
            onChange={handleClientDetails}
          ></input>

          <button 
            className='preview-btn'
            onClick={showPreview}
          >Preview Invoice</button>

          <button 
            className='preview-btn'
            type='button'
            onClick={handleLogDetails}
          >Log details</button>
        </form>
    </div>
  )
}
