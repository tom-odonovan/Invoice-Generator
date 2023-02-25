import React from 'react'
import '../css/Form.css'

export default function Form(props) {

  const { name, handleName, 
          email, handleEmail,
          address, handleAddress,
          suburb, handleSuburb,
          stateTerritory, handleStateTerritory,
          postcode, handlePostcode,
          showPreview, details } = props

  const handleLogDetails = () => {
    console.log(details);
  };

  return (
    <div>
        <form className='template-form'>
          <label htmlFor='name'>Full Name</label>
          <input 
            type='text'
            name='name'
            required 
            placeholder='Enter your name'
            value={name || ''}
            onChange={handleName}
          ></input>

          <label htmlFor='email'>Email address</label>
          <input 
            type='email'
            name='email' 
            placeholder='Enter your email'
            value={email || ''}
            onChange={handleEmail}
          ></input>

          <label htmlFor='email'>Address</label>
          <input 
            type='text'
            name='address' 
            placeholder='Enter your address'
            value={address || ''}
            onChange={handleAddress}
          ></input>

          <label htmlFor='email'>Suburb</label>
          <input 
            type='text'
            name='suburb' 
            placeholder='Suburb'
            value={suburb || ''}
            onChange={handleSuburb}
          ></input>

          <label htmlFor='email'>State/territory</label>
          <select 
            name='State' 
            value={stateTerritory || ''}
            onChange={handleStateTerritory}
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

          <label htmlFor='email'>Postcode</label>
          <input 
            type='text'
            name='postcode' 
            placeholder='Postcode'
            value={postcode || ''}
            onChange={handlePostcode}
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
