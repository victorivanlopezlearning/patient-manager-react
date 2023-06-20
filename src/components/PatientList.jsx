import Patient from './Patient';


const PatientList = () => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-center font-black text-3xl">Lista de Pacientes</h2>
      <p className="text-lg m-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

      <div className='md:h-screen md:overflow-y-scroll'>
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
    </div>
  )
}

export default PatientList;