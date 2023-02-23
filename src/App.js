import './App.css'

function App() {

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="App">
      <main>
        <header>
          <div>
            <h1>INVOICE</h1>
          </div>

          <div>
            <ul className="publish-btns">
              <li>
                <button
                  className='print-btn' 
                  onClick={handlePrint}
                >Print</button>
              </li>
              <li>
                <button
                  className='download-btn' 
                >Download</button>
              </li>
              <li>
                <button
                  className='send-btn' 
                >Send</button>
              </li>
            </ul>
          </div>
        </header>

        <section className='vendor-details'>
          <h2>Tom O'Donovan</h2>
          <p>Your Address</p>
        </section>

        <section className='client-details'>
          <h2>Client's Name</h2>
          <p>Client's Address</p>  
        </section>

        <section className='invoice-id'>
          <ul>
            <li><b>Invoice Number:</b></li>
            <li><b>Invoice Date:</b></li>
            <li><b>Due Date</b></li>
          </ul>
        </section>

        <section>
          {/* Table */}
          <p>Insert table here</p>
        </section>

        <section>
          {/* Text area */}
          <p>Notes to the client...</p>
        </section>

        <footer>
          <ul>
            <li><b>Your name:</b> Tom O'Donovan</li>
            <li><b>Your email:</b> tom@amcco.com.au</li>
            <li><b>Phone number:</b> 0413 543 309</li>
            <li><b>Bank:</b> Commonwealth</li>
            <li><b>Account holder:</b> Tom O'Donovan</li>
            <li><b>Account number:</b> xxxx xxxx</li>
            <li><b>Website:</b> tom.odonovan.com.au</li>
          </ul>
        </footer>
      </main>
      
    </div>
  );
}

export default App;
