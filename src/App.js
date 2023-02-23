import './App.css'

import { useState, UseEffect } from 'react'

import VendorDetails from './components/VendorDetails';
import ClientDetails from './components/ClientDetails';
import InvoiceDetails from './components/InvoiceDetails';
import ItemSummary from './components/ItemSummary'
import Notes from './components/Notes';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  const [preview, setPreview] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="App">
      <main>
        {preview ? <div>
          <Header handlePrint={handlePrint} />

          <VendorDetails />

          <ClientDetails />

          <InvoiceDetails />

          <ItemSummary />

          <Notes />

          <Footer />

          <button
            className='preview-btn'
            onClick={() => setPreview(false)}
          >Edit</button>
        </div> : (
          <div className='template-form'>
            <input type='text' placeholder='Enter your name'></input>
            <button 
              className='preview-btn'
              onClick={() => setPreview(true)}
            >Preview Invoice</button>
          </div>
        )}
        
      </main>
      
    </div>
  );
}

export default App;
