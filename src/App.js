import './css/App.css'

import { useState } from 'react'

import Form from './components/Form';
import Preview from './components/Preview';


function App() {
  const [preview, setPreview] = useState(false)

  const [invoiceDetails, setInvoiceDetails] = useState({})
  const [vendorDetails, setVendorDetails] = useState({})
  const [clientDetails, setClientDetails] = useState({})
  const [paymentDetails, setPaymentDetails] = useState({})
  const [contactInfo, setContactInfo] = useState({})
  const [notes, setNotes] = useState({})

  const setName = (e) => {
    setClientDetails((prevState) => ({
      ...prevState, 
      name: e.target.value 
    }));
  }

  const setEmail = (e) => {
    setClientDetails((prevState) => ({
      ...prevState,
      email: e.target.value
    }));
  }

  const setAddress = (e) => {
    setClientDetails((prevState) => ({
      ...prevState,
      address: e.target.value
    }));
  }

  const setSuburb = (e) => {
    setClientDetails((prevState) => ({
      ...prevState,
      suburb: e.target.value
    }));
  }

  const setStateTerritory = (e) => {
    setClientDetails((prevState) => ({
      ...prevState,
      stateTerritory: e.target.value
    }));
  }

  const setPostcode = (e) => {
    setClientDetails((prevState) => ({
      ...prevState,
      postcode: e.target.value
    }));
  }

  const showPreview = () => {
    setPreview(true)
  }

  const hidePreview = () => {
    setPreview(false)
  }

  return (
    <div className="App">
      <main>
        {preview ? 
          <Preview hidePreview={hidePreview} />
        : (
          <Form
            name={clientDetails.name}
            handleName={setName}
            email={clientDetails.email}
            handleEmail={setEmail}
            address={clientDetails.address}
            handleAddress={setAddress}
            suburb={clientDetails.suburb}
            handleSuburb={setSuburb}
            stateTerritory={clientDetails.stateTerritory}
            handleStateTerritory={setStateTerritory}
            postcode={clientDetails.postcode}
            handlePostcode={setPostcode}

            showPreview={showPreview}
            details={clientDetails}
           />
        )}
        
      </main>
      
    </div>
  );
}

export default App;
