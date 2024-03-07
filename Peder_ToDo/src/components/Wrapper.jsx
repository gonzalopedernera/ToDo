import EditForm from './EditForm';
import Form from './Form'
import TodoTask from './TodoTask'
import { ModalProvider } from '../context/modal';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

const Wrapper = () => {
  const [todos, setTodos] = useState([])

  const addTask = (task) => {
    setTodos([...todos, 
      {
        id: uuidv4(), 
        name: task.name,
        description: task.description, 
        completed: false, 
        isEditing: false
      }])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleEdit = (id) => {
    setTodos(
      todos.map((task) => 
        task.id === id ? {...task, isEditing: !task.isEditing} : task
      )
    )
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
      )
    )
  }
  return (
      <div className="flex flex-col bg-white gap-5 p-5 justify-center items-center">
        <div className="flex flex-row gap-5 justify-center items-center">
          <Form addTask={addTask}/>
        </div>
        {todos.map((task, index) => (
          task.isEditing ? ( <EditForm editTask={editTask} task={task}/> ) :
          ( <TodoTask 
            key={index} 
            task={task} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask} 
            toggleEdit={toggleEdit}/> 
            )
        ))}
      </div>
  )
}

export default Wrapper
