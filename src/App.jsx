import { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {

  const [ patients, setPatients ] = useState( JSON.parse(localStorage.getItem('patients')) ?? [] );
  const [ patient, setPatient ] = useState({});

  useEffect( () => {
    localStorage.setItem('patients', JSON.stringify( patients ));
  }, [ patients ])

  const deletePatient = ( id ) => {
    const updatedPatients =  patients.filter( patient => patient.id !== id );
    setPatients( updatedPatients );
  };

  return (
    <div className='container mx-auto md:px-14 mt-20'>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-12'>
        <Form
          patients={ patients }
          setPatients={ setPatients }
          patient={ patient }
          setPatient={ setPatient }
        />
        <PatientList 
          patients={ patients }
          setPatient={ setPatient }
          deletePatient={ deletePatient }
        />
      </div>
    </div>
  )
}

export default App;