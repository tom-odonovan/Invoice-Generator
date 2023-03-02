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
  const [item, setItem] = useState({})
  const [itemList, setItemList] = useState([])

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

  const handleItem = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setItem((prevState) => ({
        ...prevState, [name]: value }))
    } else {
      setItem(e)
    }
  }

  useEffect(() => {
    setItem((prevState) => ({
      ...prevState,
      total: item.quantity * item.price || 0
    }));
  }, [item.price])

  const handleItemList = (newItem) => {
    setItemList([ ...itemList, newItem])
  }

  const handleDelete = (id) => {
    setItemList(itemList.filter((item, index) => index !== id))
  }

  const handleEdit = () => {
    
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
            invoiceDetails={invoiceDetails}
            vendorDetails={vendorDetails}
            clientDetails={clientDetails}
            item={item}
            itemList={itemList} 
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
            item={item}
            handleItem={handleItem}
            itemList={itemList}
            handleItemList={handleItemList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            showPreview={showPreview}
           />
        )}
        
      </main>
      
    </div>
  );
}

export default App;
