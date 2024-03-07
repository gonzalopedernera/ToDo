import deleteIcon from '../assets/delete.svg'
import editIcon from '../assets/edit.svg'
import TaskModal from './TaskModal'
import { useModal } from '../context/modal'

const TodoTask = ({task, index, toggleComplete, deleteTask, toggleEdit}) => {
  const { closeModal } = useModal()
  return (
    // <div>
    // <div className='flex flex-row justify-between items-center gap-5 p-5 text-black bg-purple-400 min-w-72'>
    //   <p onClick={() => toggleComplete(task.id)} 
    //   className={`${task.completed ? 'line-through text-opacity-75' : ''}`}>{task.task}</p>
    //   <div className='flex flex-row gap-5 justify-center items-center'>
    //     <img src={editIcon} alt="edit" className='svg-icon' onClick={() => toggleEdit(task.id)}/>
    //     <img src={deleteIcon} alt="delete" className=' svg-icon' onClick={() => deleteTask(task.id)}/>
    //   </div>
    // </div>
    // </div>
    <TaskModal text={task.name} id='TodoModal'>
      <div>
        <p>Name: {task.name}</p>
        <p>Description: {task.description}</p>
        <button className="btn" onClick={() => closeModal('TodoModal')}>Close</button>
      </div>
      
    </TaskModal>
  )
}

export default TodoTask
