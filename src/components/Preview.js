import React from 'react'

import '../css/Preview.css'

import VendorDetails from './VendorDetails';
import ClientDetails from './ClientDetails';
import InvoiceDetails from './InvoiceDetails';
import ItemSummary from './ItemSummary'
import Notes from './Notes';
import PaymentDetails from './PaymentDetails';
import ContactInfo from './ContactInfo';
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
        <div className='flex-components'>
          <VendorDetails />
          <ClientDetails />
        </div>
        <ItemSummary />
        <PaymentDetails />
        <div className='flex-components'>
          <ContactInfo />
          <Notes />
        </div>
        <Footer hidePreview={hidePreview}/>
    </div>
  )
}
