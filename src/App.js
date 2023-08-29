import './css/App.css'

import { useState, useEffect } from 'react'

import Form from './components/form/Form';
import Preview from './components/preview/Preview';
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import sample from './components/form/SampleFormData';



function App() {
  const [preview, setPreview] = useState(false)

  const [invoiceDetails, setInvoiceDetails] = useState({ date: new Date().toLocaleDateString('en-CA') })
  const [vendorDetails, setVendorDetails] = useState({})
  const [clientDetails, setClientDetails] = useState({})
  const [paymentDetails, setPaymentDetails] = useState({})
  const [notes, setNotes] = useState('')
  const [item, setItem] = useState({})
  const [itemList, setItemList] = useState([])
  const [isEditingItem, setIsEditingItem] = useState(null)
  const [editedItem, setEditedItem] = useState({})
  const [totals, setTotals] = useState({})
  const [error, setError] = useState(false)
  const [superDetails, setSuperDetails] = useState({})
  const [isChecked, setIsChecked] = useState(false)
  const [showSuper, setShowSuper] = useState(false)

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
        ...prevState, [name]: value
      }))
    } else {
      setItem(e)
    }
  }

  useEffect(() => {
    setItem((prevState) => ({
      ...prevState,
      total: item.quantity * item.price || 0
    }));
  }, [item.quantity, item.price])

  const handleItemList = (newItem) => {
    setItemList([...itemList, newItem])
  }

  const handleDelete = (id) => {
    setItemList(itemList.filter((item, index) => index !== id))
  }

  const handleEdit = (id) => {
    const itemToEdit = itemList.find((item, index) => index === id)
    setIsEditingItem(itemToEdit)
    setEditedItem(itemToEdit)
  }

  const handleEditedItem = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setEditedItem((prevState) => ({
        ...prevState, [name]: value
      }))
    } else {
      setEditedItem(e)
    }
  }

  useEffect(() => {
    setEditedItem((prevState) => ({
      ...prevState,
      total: editedItem.quantity * editedItem.price || 0
    }));
  }, [editedItem.quantity, editedItem.price])

  const confirmEdit = (updatedItem, index) => {
    const updatedList = [...itemList]
    updatedList[index] = updatedItem;
    setItemList(updatedList);

    setIsEditingItem(null);
    setEditedItem({});
  }

  useEffect(() => {
    const invoiceTotal = itemList.reduce((result, item) => result + item.total, 0);
    setTotals({ subtotal: invoiceTotal, total: invoiceTotal })
  }, [itemList])

  const handlePaymentDetails = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSuperDetails = (e) => {
    const { name, value } = e.target;
    setSuperDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleNotes = (e) => {
    setNotes(e.target.value)
  }

  const showPreview = () => {
    if (!invoiceDetails.number || !invoiceDetails.dueDate || !vendorDetails.abn || !vendorDetails.name || !vendorDetails.email || !vendorDetails.address || !vendorDetails.suburb || !vendorDetails.state || !vendorDetails.postcode || !clientDetails.name || !clientDetails.email || !clientDetails.address || !clientDetails.suburb || !clientDetails.state || !clientDetails.postcode || !paymentDetails.accHolder || !paymentDetails.bsb || !paymentDetails.accNumber) {
      setError(true)
      toast.error("Please fill in required feilds")
    } else {
      setPreview(true)
      setError(false)
    }
    
  }

  const hidePreview = () => {
    setPreview(false)
  }

  const handleAutofill = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    {isChecked ? setInvoiceDetails(sample.invoiceDetails) : setInvoiceDetails({})}
    {isChecked ? setVendorDetails(sample.vendorDetails) : setVendorDetails({})}
    {isChecked ? setClientDetails(sample.clientDetails) : setClientDetails({})}
    {isChecked ? setPaymentDetails(sample.paymentDetails) : setPaymentDetails({})}
    {isChecked ? setSuperDetails(sample.superDetails) : setSuperDetails({})}
    
  }, [isChecked])

  return (
    <div className="App">
      
      <main>
        {preview ? (
          <Preview
            preview={preview}
            invoiceDetails={invoiceDetails}
            vendorDetails={vendorDetails}
            clientDetails={clientDetails}
            item={item}
            itemList={itemList}
            totals={totals}
            paymentDetails={paymentDetails}
            showSuper={showSuper}
            superDetails={superDetails}
            notes={notes}
            hidePreview={hidePreview}
          />
        ) : (
          <>
            <ToastContainer position="top-right" theme="colored" />

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
              isEditingItem={isEditingItem}
              editedItem={editedItem}
              handleEditedItem={handleEditedItem}
              confirmEdit={confirmEdit}
              totals={totals}
              paymentDetails={paymentDetails}
              handlePaymentDetails={handlePaymentDetails}
              superDetails={superDetails}
              handleSuperDetails={handleSuperDetails}
              notes={notes}
              handleNotes={handleNotes}
              showPreview={showPreview}
              error={error}
              isChecked={isChecked}
              handleAutofill={handleAutofill}
              showSuper={showSuper}
              setShowSuper={setShowSuper}
            />
          </>
        )}

      </main>

    </div>
  );
}

export default App;
