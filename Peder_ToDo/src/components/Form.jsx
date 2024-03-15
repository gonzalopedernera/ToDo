import { useState } from "react"
import TaskModal from "./TaskModal"
import { useModal } from "../context/modal"

const Form = ({ addTask }) => {
  const [task, setTask] = useState({name: '', description: ''})
  const { closeModal } = useModal()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    console.log(`added task: ${task.name}`)
    setTask({name: '', description: ''});
    closeModal('CreateModal')
  }

  const handleCancel = () => {
    setTask({name: '', description: ''});
    closeModal('CreateModal')
  }

  return (
    <TaskModal text="Add new Task" isBttn={true} id='CreateModal'>
      <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-2xl">
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 p-5 text-white'>
          <input 
            type="text" 
            name="name"
            placeholder="Task name" 
            value={task.name} 
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs" 
            maxLength={35} 
          />
          <textarea 
            type="text" 
            name="description"
            placeholder="Task description" 
            value={task.description} 
            onChange={handleChange}
            className="textarea textarea-bordered w-full max-w-xs"  
          />
          <div className="flex flex-row gap-5 justify-center items-center">
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-error" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </TaskModal>
  )
}

export default Form
