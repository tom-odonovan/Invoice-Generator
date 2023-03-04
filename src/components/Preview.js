import React from 'react'

import '../css/Preview.css'

import VendorDetails from './VendorDetails';
import ClientDetails from './ClientDetails';
import InvoiceDetails from './InvoiceDetails';
import ItemSummary from './ItemSummary'
import InvoiceTotals from './InvoiceTotals';
import Notes from './Notes';
import PaymentDetails from './PaymentDetails';
import ContactInfo from './ContactInfo';
import Footer from './Footer';
import Header from './Header';


export default function Preview(props) {

    const { invoiceDetails, vendorDetails, clientDetails, item, itemList, hidePreview } = props

    const handlePrint = () => {
        window.print()
    }

  return (
    <div>
        <Header handlePrint={handlePrint} />
        <InvoiceDetails invoiceDetails={invoiceDetails} />
        <div className='flex-components'>
          <VendorDetails vendorDetails={vendorDetails} />
          <ClientDetails clientDetails={clientDetails} />
        </div>
        <ItemSummary itemList={itemList} />
        <InvoiceTotals />
        <PaymentDetails />
        <div className='flex-components'>
          <ContactInfo
            phone={vendorDetails.phone}
            email={vendorDetails.email}
            website={vendorDetails.website} 
          />
          <Notes vendorName={vendorDetails.name}/>
        </div>
        <Footer hidePreview={hidePreview}/>
    </div>
  )
}
