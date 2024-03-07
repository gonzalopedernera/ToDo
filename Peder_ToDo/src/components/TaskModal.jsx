import { useModal } from "../context/modal"

const TaskModal = ({ text, img, children, isBttn, id }) => {
  const { isModalOpen, openModal } = useModal()

  return (
    <div>
      <button className={`${isBttn ? 'btn btn-outline btn-primary' : 'p-5 text-black bg-purple-400 min-w-72'}`} onClick={() => openModal(id)}>{
        img ? <img src={img} alt={text} className='svg-icon'/> : text
      }</button>
      {isModalOpen(id) ?
      (
      <div className='flex fixed bg-black justify-center items-center w-full h-full top-0 left-0 bg-opacity-60 backdrop-blur-sm'>
        <div className='flex bg-white opacity-100 text-black'>
          {children}
        </div>
      </div>

      ) : null
  }
    </div>
  )
}

export default TaskModal
