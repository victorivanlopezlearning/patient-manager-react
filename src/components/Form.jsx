
const Form = () => {
  return (
    <div>
      <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg m-5 text-center">Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span></p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
        <div className="mb-5">
          <label htmlFor="namePet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="namePet" 
            name="namePet" 
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
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
          />
        </div>

        <div className="mb-5">
          <label htmlFor="discharged" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input 
            id="discharged" 
            name="discharged" 
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea 
            id="symptoms"
            name="symptoms" 
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none h-24" 
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase cursor-pointer hover:bg-indigo-700 transition-colors"
          value="Agregar Paciente" 
        />
      </form>
    </div>
  )
}

export default Form;