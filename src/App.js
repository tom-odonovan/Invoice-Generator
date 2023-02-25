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

  const handleVendorDetails = (e) => {
    const { name, value } = e.target;
    setVendorDetails((prevState) => ({
      ...prevState, 
      [name]: value 
    }));
  }

  const handleClientDetails = (e) => {
    const { name, value } = e.target;
    setClientDetails((prevState) => ({
      ...prevState, 
      [name]: value 
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
          <Preview
            vendorDetails={vendorDetails}
            clientDetails={clientDetails} 
            hidePreview={hidePreview} 
          />
        : (
          <Form
            vendorDetails={vendorDetails}
            handleVendorDetails={handleVendorDetails}
            clientDetails={clientDetails}
            handleClientDetails={handleClientDetails}
            showPreview={showPreview}
           />
        )}
        
      </main>
      
    </div>
  );
}

export default App;
