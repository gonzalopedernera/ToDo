import { useState } from "react";
import { useModal } from "../context/modal";
import TaskModal from "./TaskModal";
import { useAlert } from "../context/alert";

const EditForm = ({ editTask, task }) => {

  const [updatedTask, setUpdatedTask] = useState({name: task.name, description: task.description});
  const { closeModal } = useModal();
  const { showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(updatedTask, task.id);
    closeModal('EditModal')
    showAlert('editAlert');
    hideAlert('editAlert');
  }

  const handleCancel = () => {
    setUpdatedTask({name: task.name, description: task.description});
    closeModal('EditModal')
  }

  return (
    <TaskModal text="Edit Task" id='EditModal' isBttn={true}>
      <div className="flex flex-col justify-center items-center gap-5 p-5 rounded-2xl">
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 p-5 text-white'>
          <input 
            type="text" 
            name="name"
            placeholder="Task name" 
            value={updatedTask.name} 
            onChange={handleChange}
            className="input input-bordered w-full max-w-xs" 
            maxLength={35} 
          />
          <textarea 
            type="text" 
            name="description"
            placeholder="Task description" 
            value={updatedTask.description} 
            onChange={handleChange}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs text-base"  
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

export default EditForm
