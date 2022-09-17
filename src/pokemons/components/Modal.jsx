import { useMemo, useState } from "react";


export const Modal = ({isOpen,counterFail,setIsOpenModal}) => {

  console.log("counter", counterFail)
  console.log("open", isOpen)

  setTimeout(() => {
    setIsOpenModal(false)
  }, 3000);


  return (
    <div className={`modal ${isOpen && counterFail != 0 && "modal-open"}`}>
      <div className="modal_dialog">
        <span>Fallaste, intetos disponibles: {counterFail}</span>
      </div>
    </div>
  )
}
