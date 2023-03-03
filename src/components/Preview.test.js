import React from 'react';
import { render, screen } from '@testing-library/react';
import Preview from '../components/Preview';

const invoiceDetails = {
    number: '12345',
    date: '2022-02-01',
    dueDate: '2022-03-01',
};

const vendorDetails = {
    name: 'ABC Company',
    email: 'abc@example.com',
    address: '123 Main St',
    suburb: 'Anytown',
    state: 'NSW',
    postcode: '2000',
    phone: '0412-345-678',
    website: 'www.abc.com'
};

const clientDetails = {
    name: 'XYZ Corporation',
    email: 'xyz@example.com',
    address: '456 Old St',
    suburb: 'Newtown',
    state: 'NSW',
    postcode: '2042'
};

const itemList = [
    { description: 'Item description 1', quantity: 1, price: 10, total: 10, },
    { description: 'Item description 2', quantity: 2, price: 20, total: 40, },
];

test('renders invoice details', () => {
    render(<Preview invoiceDetails={invoiceDetails} />);
    const invoiceNumber = screen.getByText(/12345/i);
    const invoiceDate = screen.getByText(/February 1, 2022/i);
    const invoiceDueDate = screen.getByText(/March 1, 2022/i);
    expect(invoiceNumber).toBeInTheDocument();
    expect(invoiceDate).toBeInTheDocument();
    expect(invoiceDueDate).toBeInTheDocument();
});

test('renders vendor details', () => {
    render(<Preview vendorDetails={vendorDetails} />);
    const vendorName = screen.getByText(/ABC Company/i);
    const vendorEmail = screen.getByText(/abc@example.com/i);
    const vendorAddress = screen.getByText(/123 Main St/i);
    const vendorSuburb = screen.getByText(/Anytown/i);
    const vendorState = screen.getByText(/NSW/i);
    const vendorPostcode = screen.getByText(/2000/i);
    const vendorPhone = screen.getByText(/0412 345 678/i);
    const vendorWebsite = screen.getByText(/www.abc.com/i);


    expect(vendorName).toBeInTheDocument();
    expect(vendorEmail).toBeInTheDocument();
    expect(vendorAddress).toBeInTheDocument();
    expect(vendorSuburb).toBeInTheDocument();
    expect(vendorState).toBeInTheDocument();
    expect(vendorPostcode).toBeInTheDocument();
    expect(vendorPhone).toBeInTheDocument();
    expect(vendorWebsite).toBeInTheDocument();
});

test('renders client details', () => {
    render(<Preview clientDetails={clientDetails} />);
    const clientName = screen.getByText(/XYZ Corporation/i);
    const clientEmail = screen.getByText(/xyz@example.com/i);
    const clientAddress = screen.getByText(/456 Old St/i);
    const clientSuburb = screen.getByText(/Newtown/i);
    const clientState = screen.getByText(/NSW/i);
    const clientPostcode = screen.getByText(/2042/i);

    expect(clientName).toBeInTheDocument();
    expect(clientEmail).toBeInTheDocument();
    expect(clientAddress).toBeInTheDocument();
    expect(clientSuburb).toBeInTheDocument();
    expect(clientState).toBeInTheDocument();
    expect(clientPostcode).toBeInTheDocument();
});

test('renders item summary', () => {
    render(<Preview itemList={itemList} />);
    const description1 = screen.getByText(/Item description 1/i);
    const description2 = screen.getByText(/Item description 2/i);
    const quantity1 = screen.getByText(/1/i);
    const quantity2 = screen.getByText(/2/i);
    const price1 = screen.getByText(/10/i);
    const price2 = screen.getByText(/20/i);
    const total1 = screen.getByText(/10/i);
    const total2 = screen.getByText(/40/i);
    
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
    expect(quantity1).toBeInTheDocument();
    expect(quantity2).toBeInTheDocument();
    expect(price1).toBeInTheDocument();
    expect(price2).toBeInTheDocument();
    expect(total1).toBeInTheDocument();
    expect(total2).toBeInTheDocument();
});


