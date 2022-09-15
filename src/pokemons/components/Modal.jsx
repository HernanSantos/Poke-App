

export const Modal = ({isOpen,closeModal,counterFail}) => {

  setTimeout(() => {
    closeModal();
  }, 3000);

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <div className="modal_dialog">
        <span>Fallaste, quedan: {counterFail} intentos</span>
      </div>
    </div>
  )
}
