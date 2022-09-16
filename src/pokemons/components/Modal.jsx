

export const Modal = ({isOpen,closeModal,counterFail}) => {

  // setTimeout(() => {
  //   closeModal(false);
  // }, 3000);

  return (
    <div className={`modal ${isOpen && "modal-open"}`}>
      <div className="modal_dialog">
        <span>Fallaste, intetos disponibles: {counterFail}</span>
      </div>
    </div>
  )
}
