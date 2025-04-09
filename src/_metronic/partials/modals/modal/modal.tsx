import React from 'react'
import {Modal} from 'react-bootstrap'
import {KTSVG} from '../../../helpers'

interface EWFModalProps {
  children: React.ReactNode
  show: boolean
  handleClose: () => void
  modalId: string
  modalTitle: string
  classes?: string
}

const EWFModal = ({show, children, handleClose, modalId, modalTitle, classes}: EWFModalProps) => {
  return (
    <Modal
      id={modalId}
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName={`modal-dialog modal-dialog-centered ${classes !== undefined ? classes : 'mw-300px'}`}
      show={show}
      onHide={handleClose}
    >
      <div className='modal-header'>
        <h2>{modalTitle}</h2>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className="modal-body">
        {children}
      </div>
    </Modal>
  )
}

export default EWFModal
