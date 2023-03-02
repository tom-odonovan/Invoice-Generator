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


export default function Preview(props) {

    const { invoiceDetails, vendorDetails, clientDetails, item, itemList, hidePreview } = props

    const handlePrint = () => {
        window.print()
    }

  return (
    <div>
        {/* <Header handlePrint={handlePrint} /> */}
        <InvoiceDetails
          number={invoiceDetails.number} 
          date={invoiceDetails.date} 
          dueDate={invoiceDetails.dueDate} 
        />
        <div className='flex-components'>
          <VendorDetails
            name={vendorDetails.name}
            email={vendorDetails.email}
            address={vendorDetails.address} 
          />
          <ClientDetails
            name={clientDetails.name}
            email={clientDetails.email}
            address={clientDetails.address} 
          />
        </div>
        <ItemSummary itemList={itemList} />
        <PaymentDetails />
        <div className='flex-components'>
          <ContactInfo
            phone={vendorDetails.phone}
            email={vendorDetails.email}
            website={vendorDetails.website} 
          />
          <Notes />
        </div>
        <Footer hidePreview={hidePreview}/>
    </div>
  )
}
