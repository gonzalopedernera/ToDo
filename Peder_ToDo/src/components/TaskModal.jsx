import { useModal } from "../context/modal"

const TaskModal = ({ text, img, children, isBttn, id, isCompleted}) => {
  const { isModalOpen, openModal } = useModal()

  return (
    <div>
      <button className={`${isBttn ? 
      'btn  btn-neutral' : 
      `p-5 text-black min-w-72 justify-center items-start ${isCompleted ? 'line-through bgTaskCompleted' : 'bgTask'}`}`} 
      onClick={() => openModal(id)}>
        {
        img ? <img src={img} alt={text} className='svg-icon'/> : text
      }
      </button>
      {isModalOpen(id) ?
      (
      <div className='flex fixed bg-black  justify-center items-center w-full h-full top-0 left-0 bg-opacity-60 backdrop-blur-sm'>
        <div className='flex bg-white border border-black text-black rounded-2xl justify-center items-center'>
          {children}
        </div>
      </div>

      ) : null
  }
    </div>
  )
}

export default TaskModal
