import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDetails from '../components/ClientDetails';

const clientDetails = {
    name: 'XYZ Corporation',
    email: 'xyz@example.com',
    address: '456 Old St',
    suburb: 'Newtown',
    state: 'NSW',
    postcode: '2042'
};

test('renders client details', () => {
    render(<ClientDetails clientDetails={clientDetails} />);
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
