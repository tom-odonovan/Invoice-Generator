import React from 'react'

import '../css/Preview.css'

import VendorDetails from './VendorDetails';
import ClientDetails from './ClientDetails';
import InvoiceDetails from './InvoiceDetails';
import ItemSummary from './ItemSummary'
import Notes from './Notes';
import Footer from './Footer';
import Header from './Header';

export default function Preview({ hidePreview }) {

    const handlePrint = () => {
        window.print()
    }

  return (
    <div>
        <Header handlePrint={handlePrint} />
        <InvoiceDetails />
        <div className='billing-info'>
        <VendorDetails />
        <ClientDetails />
        </div>
        <ItemSummary />
        <Notes />
        <Footer hidePreview={hidePreview}/>
    </div>
  )
}
