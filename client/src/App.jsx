import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
import ReturnSearch from './components/ReturnSearch';

function App() {
  const [userSelect, setUserSelect] = useState('people');
  const [id, setId] = useState('');
  const [result, setResult] = useState([]);



  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* route for the form */}
          <Route path='/' element={<Form
            userSelect={userSelect}
            setUserSelect={setUserSelect}
            id={id}
            setId={setId}
          />} />
          {/* route for the result page */}
          <Route path='/:search/:id' element={<ReturnSearch
            result={result}
            setResult={setResult}
            userSelect={userSelect}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
