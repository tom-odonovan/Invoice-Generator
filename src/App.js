import './css/App.css'

import { useState, useEffect } from 'react'

import Form from './components/Form';
import Preview from './components/Preview';


function App() {
  const [preview, setPreview] = useState(false)

  const [invoiceDetails, setInvoiceDetails] = useState({date: new Date().toLocaleDateString('en-CA')})
  const [vendorDetails, setVendorDetails] = useState({})
  const [clientDetails, setClientDetails] = useState({})
  const [paymentDetails, setPaymentDetails] = useState({})
  const [contactInfo, setContactInfo] = useState({})
  const [notes, setNotes] = useState({})
  const [itemSummary, setItemSummary] = useState({})

  const handleInvoiceDetails = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevState) => ({
      ...prevState, 
      [name]: value 
    }));
  }

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

  const handleItemSummary = (e) => {
    const { name, value } = e.target;
    setItemSummary((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  useEffect(() => {
    setItemSummary((prevState) => ({
      ...prevState,
      total: itemSummary.quantity * itemSummary.price || 0
    }));
  }, [itemSummary])

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
            invoiceDetails={invoiceDetails}
            vendorDetails={vendorDetails}
            clientDetails={clientDetails}
            itemSummary={itemSummary} 
            hidePreview={hidePreview} 
          />
        : (
          <Form
            invoiceDetails={invoiceDetails}
            handleInvoiceDetails={handleInvoiceDetails}
            vendorDetails={vendorDetails}
            handleVendorDetails={handleVendorDetails}
            clientDetails={clientDetails}
            handleClientDetails={handleClientDetails}
            itemSummary={itemSummary}
            handleItemSummary={handleItemSummary}
            showPreview={showPreview}
           />
        )}
        
      </main>
      
    </div>
  );
}

export default App;
