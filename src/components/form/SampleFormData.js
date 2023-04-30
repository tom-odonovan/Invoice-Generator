const sample = {
    
    invoiceDetails: {
        number: '0001',
        date: new Date().toLocaleDateString('en-CA'),
        dueDate: new Date().toLocaleDateString('en-CA'),
    },
    vendorDetails: {
        abn: '01234567891',
        name: 'ABC Company',
        email: 'info@abc.com.au',
        address: '123 Main Street',
        suburb: 'Anytown',
        state: 'NSW',
        postcode: '2000',
        phone: '0412345678',
        website: 'www.abc.com'
    },
    clientDetails: {
        name: 'XYZ Corporation',
        email: 'info@xyz.com.au',
        address: '456 Old Street',
        suburb: 'Newtown',
        state: 'NSW',
        postcode: '2042',
    },
    paymentDetails: {
        accHolder: 'ABC Company',
        bsb: '012345',
        accNumber: '98765432'
    },
    superDetails: {
        fundName: 'Super Fund',
        fundABN: '09876543212',
        usi: 'SUP1001210',
        memberNumber: '01234567'
    }
};

export default sample;