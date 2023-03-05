import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InvoiceDetails from '../components/InvoiceDetails';

const invoiceDetails = {
    number: '12345',
    date: '2022-02-01',
    dueDate: '2022-03-01',
};

test('renders invoice details', () => {
    render(<InvoiceDetails invoiceDetails={invoiceDetails} />);
    const invoiceNumber = screen.getByText(/12345/i);
    const invoiceDate = screen.getByText(/2022-02-01/i);
    const invoiceDueDate = screen.getByText(/2022-03-01/i);

    expect(invoiceNumber).toBeInTheDocument();
    expect(invoiceDate).toBeInTheDocument();
    expect(invoiceDueDate).toBeInTheDocument();
});
