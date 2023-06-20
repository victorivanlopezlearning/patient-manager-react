import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className='container mx-auto px-4 mt-20'>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-12'>
        <Form />
        <PatientList />
      </div>
    </div>
  )
}

export default App