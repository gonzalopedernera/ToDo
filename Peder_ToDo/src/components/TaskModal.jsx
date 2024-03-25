import { useModal } from "../context/modal"

const TaskModal = ({ text, children, isBttn, id, isCompleted}) => {
  const { isModalOpen, openModal } = useModal()

  return (
    <div>
      <button className={`${isBttn && text !== "Add new Task" ? 
      'btn  btn-neutral' : isBttn && text === "Add new Task" ? 'btn  bg-teal-500 hover:bg-teal-400 text-black ' :
      `p-5 text-black text-xl min-w-72 justify-center items-start border border-black hover:bg-opacity-50 ${isCompleted ? 'line-through bgTaskCompleted' : 'bgTask'}`}`} 
      onClick={() => openModal(id)}>
        {text}
      </button>
      {isModalOpen(id) ?
      (
      <div className='flex fixed bg-black  justify-center items-center w-full h-full top-0 left-0 bg-opacity-60 backdrop-blur-sm'>
        <div className='flex bg-white border border-black text-black rounded-2xl justify-center items-center shadow-lg'>
          {children}
        </div>
      </div>
      ) : null
  }
    </div>
  )
}

export default TaskModal
