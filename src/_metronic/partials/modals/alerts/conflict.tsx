import { ReactNode, useEffect, useState } from 'react'
import { KTSVG } from "../../../helpers"
import { useAppDispatch } from '../../../../setup/store';
import { setErrorNull } from '../../layout/taskGroupCreation-drawer/taskGroupSlice';

interface ConflictDataAlertProps {
  show: boolean;  // Prop to control modal visibility
  message: ReactNode
}

const ConflictDataAlert = ({ show, message }: ConflictDataAlertProps) => {
  const [isModalOpen, setIsModalOpen] = useState(show)
  const dispatch = useAppDispatch()

  // Function to toggle modal visibility
  const toggleModal = (status: boolean) => {
    setIsModalOpen(status)
    dispatch(setErrorNull())
  }

  return (
    <div>
      {/* Modal */}
      <div className={`modal fade ${isModalOpen ? 'show d-block' : ''}`} role="dialog">
        <div className='modal-dialog modal-md modal-dialog-centered'>
          <div className='modal-content rounded border'>
            <div className='modal-header justify-content-end border-0 pb-0'>
              <button className='btn btn-sm btn-icon btn-active-color-primary' onClick={() => toggleModal(false)}>
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
              </button>
            </div>
            <div className='modal-body d-flex flex-column justify-content-center align-items-center pt-0 pb-15 px-5 px-xl-20'>
              <p><i className="fa text-danger fa-6x fa-exclamation-circle" aria-hidden="true"></i></p>
              <h1 className="mb-0 fw-bold">{message}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for modal background */}
      {isModalOpen && <div className="modal-backdrop fade show"></div>}
    </div>
  )
}

export { ConflictDataAlert };
