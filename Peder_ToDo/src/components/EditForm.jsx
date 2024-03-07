import { useState } from "react";
import { useModal } from "../context/modal";
import TaskModal from "./TaskModal";

const EditForm = ({ editTask, task }) => {

  const [updatedTask, setUpdatedTask] = useState(task.task);
  const { closeModal } = useModal();

  const handleSubimit = (e) => {
    e.preventDefault();
    editTask(updatedTask, task.id);
    console.log(`added task: ${task}`)
    setUpdatedTask('');
    closeModal('EditModal')
  }
  return (
    <TaskModal text="Edit Task" id='EditModal'>
      <form onSubmit={handleSubimit}className='flex flex-row justify-center items-center gap-5 p-5'>
        <input type="text" placeholder="Update the selected task" value={updatedTask} className="input input-bordered w-full max-w-xs" onChange={(e) => {setUpdatedTask(e.target.value)}} />
        <button className="btn" type="submit">Submit</button>
      </form>
    </TaskModal>
  )
}

export default EditForm
