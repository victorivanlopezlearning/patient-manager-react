import Patient from './Patient';


const PatientList = ({ patients, setPatient }) => {
  return (
    <div className="lg:col-span-2">

      { patients && patients.length ? (
        <>
            <h2 className="text-center font-black text-3xl">Lista de Pacientes</h2>
            <p className="text-lg m-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes y Citas</span></p>

            <div className='md:h-screen md:overflow-y-scroll'>
              { patients.map(( patient ) => (
                <Patient
                  key={ patient.id }
                  patient={ patient }
                  setPatient={ setPatient }
                /> 
              )) }
            </div>
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">No hay pacientes</h2>
          <p className="text-lg m-5 text-center">Comienza agregando tus pacientes para <span className="text-indigo-600 font-bold">Administrarlos</span></p>
        </>
      )}

    </div>
  )
}

export default PatientList;