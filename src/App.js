import './App.css'
import VendorDetails from './components/VendorDetails';
import ClientDetails from './components/ClientDetails';
import InvoiceDetails from './components/InvoiceDetails';
import ItemSummary from './components/ItemSummary'
import Notes from './components/Notes';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="App">
      <main>
        <Header handlePrint={handlePrint}/>

        <VendorDetails />

        <ClientDetails />

        <InvoiceDetails />

        <ItemSummary />

        <Notes />

        <Footer />
      </main>
      
    </div>
  );
}

export default App;
