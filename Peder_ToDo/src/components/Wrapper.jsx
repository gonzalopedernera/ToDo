import Form from './Form'
import TodoTask from './TodoTask'
import { ModalProvider } from '../context/modal';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Alert from './Alert'
import { useAlert } from '../context/alert'
uuidv4();
  
  let noTasks = `
  You don't have any tasks yet.
  To add a new task, click on the button above.
  `;
  const Wrapper = () => {
    const [todos, setTodos] = useState([])

  const addTask = (task) => {
    setTodos([...todos, 
      {
        id: uuidv4(), 
        name: task.name,
        description: task.description, 
        completed: false
      }])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    )
  }
  const { isAlertOpen, showAlert, hideAlert } = useAlert();

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    showAlert('deleteAlert');
    hideAlert('deleteAlert');
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, name: task.name, description: task.description} : todo
      )
    )
  }
  
  return (
    <div className='flex items-center justify-center shadow-md'>
      {isAlertOpen('editAlert') ? (<Alert msg='Succesfully edited the task!' id='editAlert' />) : null}
      {isAlertOpen('deleteAlert') ? (<Alert msg='Succesfully deleted the task!' id='deleteAlert' />) : null}
      <div className="flex flex-col bgList gap-5 p-5 justify-center items-center rounded-2xl border border-black w-full text-gray-800">
      <div className='flex flex-col  gap-5 px-5 py-2 w-2/3'>
        <h1>My ToDo List</h1>
        <h3>Click on "Add Task" to create a new task</h3>
        <h3>After created, you can visualize, edit or delete an existing task easily!</h3>
      </div>
      <div className="flex flex-row gap-5 justify-center items-center">
        <Form addTask={addTask}/>
      </div>
      <h2 className='text-2xl'>My Tasks:</h2>
      {todos.length === 0 ? (
        <p className='flex justify-center items-center text-xl whitespace-pre-line break-words'>
          {noTasks}
        </p>
        ) : (
        <div className='flex flex-col m-5 gap-5'>
          {todos.map((task, index) => (
            <TodoTask 
              key={index} 
              task={task} 
              toggleComplete={toggleComplete} 
              deleteTask={deleteTask} 
              editTask={editTask}
            />
          ))}
        </div>
      )}
    </div>
  </div>
  )
}

export default Wrapper
