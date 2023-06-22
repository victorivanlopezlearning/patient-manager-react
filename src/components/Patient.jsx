
const Patient = ({ patient, setPatient, deletePatient }) => {

  const { namePet, name, email, date, symptoms, id } = patient;

  // Format Date
  const objDate = new Date(date);

  const month = objDate.getMonth();
  const day = objDate.getDate() + 2;
  const year = objDate.getFullYear();

  const dateUTC = new Date(Date.UTC(year, month, day));

  const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  };
  const dateFormatted = dateUTC.toLocaleDateString('es-MX', options);

  const handleDelete = () => {
    const isConfirm = confirm('¿Desea eliminar paciente?');

    if(isConfirm) {
      deletePatient( id );
      return;
    }
  };

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">Nombre: <span className="font-normal normal-case">{namePet}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Propietario: <span className="font-normal normal-case">{name}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Email: <span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Fecha Alta: <span className="font-normal normal-case">{dateFormatted}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Síntomas <span className="font-normal normal-case">{symptoms}</span></p>

      <div className="flex content-center justify-between md:justify-start md:gap-4 mt-6">
        <button
          type="button"
          className="py-2 px-8 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold uppercase rounded-lg"
          onClick={ () => setPatient(patient) }
        >Editar</button>

        <button
          type="button"
          className="py-2 px-8 bg-red-600 hover:bg-red-700 transition-colors text-white font-bold uppercase rounded-lg"
          onClick={ handleDelete }
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Patient;