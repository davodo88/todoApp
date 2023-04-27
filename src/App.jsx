import { useState, useEffect } from "react"
import Formulario from "./components/formulario"
import Todos from "./components/todos"

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [
  
]


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

    const addTodo = (todo) => {
      // setTodos([...todo, todo])
      setTodos((prev) => [...prev, todo])
    }

    const deleteTodo = (id) => {
      
      const newArray = todos.filter(todo => todo.id !== id)
      
      setTodos(newArray)
    }

  const updateTodo = (id) => {
    console.log('click')

    // const  newArray = todos.map(todo => {
    //   if (todo.id === id) {
    //     todo.estado = !todo.estado
    //   }
    //   return todo
    // })



    //ternary option
    const newArray = todos.map(todo => todo.id === id ? 
      {...todo, estado : !todo.estado} 
        : todo)
    setTodos(newArray)
  }

  const orderTodo = (arrayTodos) => {
    return arrayTodos.sort((a, b)=>{
      if(a.priority === b.priority) return 0
      if(a.priority) return -1
      if(!a.priority) return 1
    })
  }



  return (
    <div>
      <h1 className="text-center">Formulario</h1>
      <Formulario addTodo={addTodo} />
      <Todos todo={orderTodo(todos)} deleteTodo={deleteTodo} updateTodo={updateTodo}
      />
    </div>
  )
}

export default App
