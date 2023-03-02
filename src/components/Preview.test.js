import { render, screen } from '@testing-library/react';
import Preview from './Preview'

test('Renders invoice details', () => {

    const mockData = {}

    render(
        <Preview invoiceDetails={mockData} />
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});