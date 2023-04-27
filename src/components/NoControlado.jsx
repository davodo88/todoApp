import { useRef, useState } from "react";

const NoControlado = () => {
  

  const form = useRef(null)
  const [error, setError] = useState()

  const handlesubmit = (e) => {
    e.preventDefault()
    setError('')
    
    
    //capturar datos
    const data = new FormData(form.current);
          // console.log(...data.entries());
    const { title, description, state } = Object.fromEntries([...data.entries()])
    
    
    
    //validar datos
    if(!title.trim() || !description.trim() || !state.trim()) {
      setError('llena todo los campos porfavor')
      console.log('rellena este campo');
    }
    
    //enviar datos



    console.log(title, description, state);
  }
  
  
  
  return (
    <form onSubmit={handlesubmit} ref={form}>
      <input 
        type="text"
        placeholder="Ingrese tarea" 
        className="form-control m-2"
        name="title"
      />
      <textarea className="form-control m-2"
        placeholder="ingrese descripcion"
        name="description"
      />
      <select className="form-select m-2" name="state">
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button 
        type="submit"
        className="btn btn-primary m-2">
          Procesar
      </button>
      {
        error !== '' && error
      }
    </form>
  )
}

export default NoControlado