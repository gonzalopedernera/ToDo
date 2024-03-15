import TaskModal from './TaskModal'
import EditForm from './EditForm'
import { useModal } from '../context/modal'
import closeIcon from '../assets/closeIcon.svg';

const TodoTask = ({task, index, toggleComplete, deleteTask, editTask}) => {
  const { closeModal } = useModal()

  const taskId = `Task - ${task.name}`

  const deleteId = `Delete - ${task.name}`

  const handleDelete = () => {
    closeModal(deleteId)
    closeModal(taskId)
    deleteTask(task.id)
    
  }


  
  return (
    <TaskModal text={task.name} id={taskId} isCompleted={task.completed}>
        
        <div className='flex flex-col justify-center items-center p-5 gap-5 taskContainer relative overflow-auto'>
          <div className='w-2 h-2 absolute top-4 right-7'>
            <button className="btn btn-error  p-0 w-6 min-h-6 h-6 overflow-auto flex justify-center items-center border border-black" onClick={() => closeModal(taskId)}>
              <img src={closeIcon} alt="delete" className='svg-icon' />
            </button>
          </div>
          <div className='overflow-auto taskContent'>
            <ul className='left-0 text-left text-xl whitespace-pre-line break-words'>
              <li><strong>Name:</strong> "{task.name}"</li>
              <br className='text-md'/>
              <li>
                <strong>Description:</strong><br></br>
                "{task.description}"
              </li>
            </ul>
          </div>
          <div className='flex flex-row justify-center items-center gap-2 '>
            Completed task
            <input type="checkbox" className="checkbox checkbox-success" onChange={() => toggleComplete(task.id)} checked={task.completed} />
          </div>
          <div className='flex justify-center items-center gap-5'>
            <EditForm task={task} editTask={editTask}/>
            <TaskModal text="Delete" id={deleteId} isBttn={true}>
              <div className='flex flex-col justify-center items-center p-5 gap-5 text-xl '>
                <h2>Are you sure you want to delete the current task?</h2>
                <div className='flex flex-row justify-center items-center gap-5'>
                  <button className="btn btn-success" onClick={handleDelete}>Yes</button>
                  <button className="btn btn-error" onClick={() => closeModal(deleteId)}>No</button>
                </div>
              </div>
            </TaskModal>
          </div>
        </div>

      
    </TaskModal>
  )
}

export default TodoTask
