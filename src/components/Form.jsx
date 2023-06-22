
import { useState, useEffect } from 'react';
import ErrorLabel from './ErrorLabel';

const Form = ({ patients, setPatients, patient, setPatient }) => {

  const [ namePet, setNamePet ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ date, setDate ] = useState('');
  const [ symptoms, setSymptoms ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect( () => {
    if( Object.keys( patient ).length > 0 ) {
      const { namePet, name, email, date, symptoms } = patient;

      setNamePet(namePet);
      setName(name);
      setEmail(email);
      setDate(date);
      setSymptoms(symptoms);
    };
  }, [ patient ] );

  const generateID = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if( [ namePet, name, email, date, symptoms ].includes('') ) {
      setError(true);
      return;
    }
    setError(false);

    const objPatient = { namePet, name, email, date, symptoms };

    if(patient.id) {
      // Updated Patient
      objPatient.id = patient.id;
      const updatedPatients  = patients.map( patientState => patientState.id === patient.id ? objPatient : patientState);

      setPatients(updatedPatients);
      setPatient({});
    } else {
      // Create new Patient
      objPatient.id = generateID();

      setPatients([...patients, objPatient]);
    }

    // Reset Form
    setNamePet('');
    setName('');
    setEmail('');
    setDate('');
    setSymptoms('');
  }

  return (
    <div>
      <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg m-5 text-center">Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-5 mx-3"
        onSubmit={ handleSubmit }
      >
        { error &&  <ErrorLabel><p>Todos los campos son obligatorios</p></ErrorLabel> }
        <div className="mb-5">
          <label htmlFor="namePet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="namePet" 
            name="namePet" 
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={ namePet }
            onChange={ (e) => setNamePet(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electrónico</label>
          <input 
            id="email" 
            name="email" 
            type="email"
            placeholder="email@gmail.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input 
            id="date" 
            name="date" 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
            value={ date }
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
            id="symptoms"
            name="symptoms" 
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none h-24"
            value={ symptoms }
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase cursor-pointer hover:bg-indigo-700 transition-colors"
          value={ patient.id ? 'Guarda Cambios' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Form;