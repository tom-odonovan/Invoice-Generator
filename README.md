# Invoice Generator

<div style="height: 400px; overflow: auto;">
  <img src="./public/form_screenshot2.png" alt="Form demo screenshot" style="min-height: 1050px; min-width: 100%">
</div>
</br>

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Features](#features)
- [Improvements](#improvements)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Licence](#licence)
</br>

## Introduction <a name="introduction"></a>

Invoice Generator is a web application built with React that allows users to generate and manage invoices. The app provides a simple and intuitive interface for users to input invoice details and generate a professional-looking invoice that can be printed or saved as a PDF.
</br>

## Demo <a name="demo"></a>


Demo the latest build <button style="color: white;
    font-weight: bold;
    margin: 5px 0;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    border: 2px solid #3b82f6;
    background-color: #3b82f6;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.1);
    transition: all;
    transition-duration: 300ms;
    user-select: none;">[here](https://tom-odonovan.github.io/Invoice-Generator/)</button>
</br>
</br>

## Features <a name="features"></a>

- Input and save vendor and client details
- Input and save invoice details (invoice number, date, due date)
- Add and edit line items (item name, quantity, price)
- Calculate totals and taxes automatically
- Add notes and payment details
- Preview and print invoices
- Download invoices as PDF files
</br>

## Planned Improvements <a name="improvements"></a>

- Add input for payment details
- Calculate invoice totals
- Edit Vendor Notes
- Save and retrieve invoices from database
- Save Client/Vendor information to database
- Upload logo image to invoices 
- Implement download button to download PDF file
- Implement Signup/Login functionality to accomodate multiple users 
- Create user sales reports to visualise business success
</br>

## Installation and Setup <a name="installation-and-setup"></a>

1. Clone this repository:
    ```bash
    git clone https://github.com/tom-odonovan/Invoice-Generator.git 
    ```

2. Install dependencies:
    ```bash
    cd invoice-generator
    yarn install
    ```

3. Run the app:
    ```bash
    yarn start
    ```

4. Open http://localhost:3000 in a web browser to view the app.
</br>

## Usage <a name="usage"></a>

1. Enter the invoice details in the top section of the form.
2. Fill out the vendor and client details in the form.
3. Add line items by filling out the item name, quantity, and price and clicking the "Add Item" button.
4. The app will calculate the totals and taxes automatically.
5. Add any additional notes or payment details in the bottom section of the form.
6. Preview the invoice by clicking the "Preview" button.
7. Print the invoice using the Print button or Download by selecting 'save as a PDF' via the print preview.
</br>

## Contributing <a name="contributing"></a>


Contributions to the Invoice Generator app are welcome and encouraged! To contribute, follow these steps:

1. Fork the repository
2. Create a new branch 
    ```bash
    git checkout -b my-new-feature
    ```
3. Make changes and commit
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch
    ```bash
    git push origin my-new-feature
    ```
5. Create a new Pull Request
</br>

## Testing <a name="testing"></a>

Testing is an important part of this project, and helps ensure that everything is working as expected. To run tests, you'll need to have Node.js and npm installed on your machine. You can install them by following the instructions here.

Once you have Node.js and npm installed, you can run tests with the following command:

```bash
npm run test
```

Successful tests will show a list of passing tests and exit with a status of 0. If any tests fail, you'll see an error message explaining what went wrong. If you need help troubleshooting failed tests, please reach out or check the issue tracker for any known issues.
</br>

## Licence <a name="licence"></a>

This project is licenced under [...project licence here](#) 
</br>
</br>