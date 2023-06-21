import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {

  const [ patients, setPatients ] = useState([]);

  return (
    <div className='container mx-auto md:px-14 mt-20'>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12'>
        <Form
          patients={ patients }
          setPatients={ setPatients }
        />
        <PatientList 
          patients={ patients }
        />
      </div>
    </div>
  )
}

export default App;