import './css/App.css'

import { useState } from 'react'

import Form from './components/Form';
import Preview from './components/Preview';


function App() {
  const [preview, setPreview] = useState(false)

  const showPreview = () => {
    setPreview(true)
  }

  const hidePreview = () => {
    setPreview(false)
  }

  return (
    <div className="App">
      <main>
        {preview ? 
          <Preview hidePreview={hidePreview} />
        : (
          <Form showPreview={showPreview} />
        )}
        
      </main>
      
    </div>
  );
}

export default App;
