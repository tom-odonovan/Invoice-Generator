import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VendorDetails from '../components/VendorDetails';

const vendorDetails = {
    name: 'ABC Company',
    email: 'abc@example.com',
    address: '123 Main St',
    suburb: 'Anytown',
    state: 'NSW',
    postcode: '2000',
};

test('renders vendor details', () => {
    render(<VendorDetails vendorDetails={vendorDetails} />);
    const vendorName = screen.getByText(/ABC Company/i);
    const vendorEmail = screen.getByText(/abc@example.com/i);
    const vendorAddress = screen.getByText(/123 Main St/i);
    const vendorSuburb = screen.getByText(/Anytown/i);
    const vendorState = screen.getByText(/NSW/i);
    const vendorPostcode = screen.getByText(/2000/i);

    expect(vendorName).toBeInTheDocument();
    expect(vendorEmail).toBeInTheDocument();
    expect(vendorAddress).toBeInTheDocument();
    expect(vendorSuburb).toBeInTheDocument();
    expect(vendorState).toBeInTheDocument();
    expect(vendorPostcode).toBeInTheDocument();
});
