
const Patient = ({ patient }) => {

  const { namePet, name, email, date, symptoms } = patient;

  return (
    <div className="m-5 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold text-gray-700 uppercase mb-3">Nombre: <span className="font-normal normal-case">{namePet}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Propietario: <span className="font-normal normal-case">{name}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Email: <span className="font-normal normal-case">{email}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Fecha Alta: <span className="font-normal normal-case">{date}</span></p>
      <p className="font-bold text-gray-700 uppercase mb-3">Síntomas <span className="font-normal normal-case">{symptoms}</span></p>
    </div>
  )
}

export default Patient;