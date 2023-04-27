import {useState} from "react"
import Swal from "sweetalert2"



const Formulario = ({addTodo}) => {

  const [todo, setTodo] = useState({
    title: '', 
    description: '', 
    estado: 'pendiente', 
    priority: true
  })

  const {title, description, estado, priority} = todo


  //funcion que valida-envia datos
  const handlesubmit = (e) => {
    e.preventDefault()


    if(!title.trim() || !description.trim() ) {
      return ( 
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill all inputs, Please!',
        })
        )
      }

    addTodo({
      id: Date.now(),
      ...todo, estado: estado === 'completado' 
    })

    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tarea agregada',
      showConfirmButton: false,
      timer: 2000
    })

  }


  //funcion que setea los inputs
  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)

    const {name, type, checked, value} = e.target

    setTodo({ 
      ...todo, 
      [name]: type === 'checkbox' ? checked : value 
    })
  }

  return (
    <form onSubmit={handlesubmit} >
      <input
        type="text"
        placeholder="Ingrese tarea"
        className="form-control m-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea className="form-control m-2"
        placeholder="ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check m-2">
        <input 
          type="checkbox" 
          name="priority"
          className="form-check-input" 
          id="input-check"
          checked={priority} 
          onChange={handleChange}
        />
        <label htmlFor="input-check" className="">
          dar Prioridad
        </label>
      </div> 
      <select className="form-select m-2" 
        name="estado" 
        value={estado}
        onChange={handleChange}
      >
        <option value="pendiente">pendiente</option>
        <option value="completado">completado</option>
      </select>
      <button
        type="submit"
        className="btn btn-primary m-2">
        Procesar
      </button>
    </form>
  )
}

export default Formulario