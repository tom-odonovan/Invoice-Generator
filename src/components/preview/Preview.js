import React, { useRef } from 'react'

import '../../css/Preview.css'

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
import SuperDetails from './SuperDetails';

export default function Preview(props) {

  const { preview, invoiceDetails, vendorDetails, clientDetails, itemList, totals, paymentDetails, superDetails, notes, hidePreview } = props

  const pdfContent = useRef(null)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    
  }

  const handleShare = async () => {
    
  };

  return (
    <div className='invoice-preview' ref={pdfContent}>
      <Header
        handlePrint={handlePrint}
        handleDownload={handleDownload}
        handleShare={handleShare}
      />
      <div>
        
        <div className='flex-components'>
          <VendorDetails vendorDetails={vendorDetails} />
          <InvoiceDetails invoiceDetails={invoiceDetails} />
        </div>
        <div className='flex-components'>
          <SuperDetails superDetails={superDetails} />
          <ClientDetails clientDetails={clientDetails} />
        </div>
      </div>

      <div className='table'>
        <ItemSummary preview={preview} itemList={itemList} />
        <div className='flex-components'>
          <PaymentDetails paymentDetails={paymentDetails} />
          <InvoiceTotals totals={totals} />
        </div>
      </div>

      <div>
        <div className='flex-components'>
          <ContactInfo
            phone={vendorDetails.phone}
            email={vendorDetails.email}
            website={vendorDetails.website}
          />
          <Notes notes={notes} />
        </div>
        <Footer hidePreview={hidePreview} />
      </div>


    </div>
  )
}
