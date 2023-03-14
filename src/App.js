import './css/App.css'

import { useState, useEffect } from 'react'

import Form from './components/form/Form';
import Preview from './components/preview/Preview';


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

  const handleNotes = (e) => {
    setNotes(e.target.value)
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
            notes={notes}
            hidePreview={hidePreview}
          />
        ) : (
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
            notes={notes}
            handleNotes={handleNotes}
            showPreview={showPreview}
          />
        )}

      </main>

    </div>
  );
}

export default App;
