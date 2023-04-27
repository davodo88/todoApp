import Todo from "./todo"

const Todos = ({ todo, deleteTodo, updateTodo }) => { 
  return (
      <div>
        <h2 className="text-center">Todos</h2>
        <ul className="list-group">
          {
            todo.map((todo)=> (
              <Todo key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))
          }
          { //aviso de sin tareas
            todo.length === 0 && (
              <li className="list-group-item text-center">
            Sin Tareas
            </li>
            )
          }
        </ul>
      </div>
      ) 
    }

export default Todos