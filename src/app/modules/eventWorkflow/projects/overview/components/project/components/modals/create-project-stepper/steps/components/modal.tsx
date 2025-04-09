import { Field } from "formik";
import React from "react";
import { Modal } from "react-bootstrap";
import { KTSVG } from "../../../../../../../../../../../../_metronic/helpers";
import {createPortal} from 'react-dom'

type Props = {
  id?: string,
  show: boolean
  handleClose?: () => void,
  children: any
}

const modalsRoot = document.getElementById('root-modals') || document.body

const ProjectInnerModal = ({ handleClose, show, id, children }: Props) => {
  return createPortal(
    id != '' ? <Modal
      id='kt_modal_create_project_inner_modal'
      tabIndex={999}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={show}>
      {children}
    </Modal> : <></>, modalsRoot
  )
}

export default ProjectInnerModal