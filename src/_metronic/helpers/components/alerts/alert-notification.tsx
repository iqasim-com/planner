import React from "react"
import { useAppDispatch } from "../../../../setup/store"
import { resetSubmit } from "../../../../app/modules/eventWorkflow/projects/redux/projectBoard/createProjectSlice"
import { Link } from "react-router-dom"

interface AlertNotificationProps {
  backgroundColor?: string,
  title: string,
  icon: string,
  pathToNewlyProject?: string
}

const AlertNotification = ({ backgroundColor, title, icon, pathToNewlyProject }: AlertNotificationProps) => {
  const dispatch = useAppDispatch()

  const onClose = () => {
    dispatch(resetSubmit())
  }
  return (
    <div className={`alert alert-dismissible ${backgroundColor} border border-1 border-success d-flex flex-column align-items-center flex-sm-row p-5 mb-10`}>
      <span className="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><i className={`${icon}`}></i></span>
      <div className="d-flex justify-content-between w-100 align-items-center text-primary pe-0 pe-sm-10">
        <h5 className="mb-1">{title}</h5>
        <Link to={pathToNewlyProject != '' ? `/projects/project/days/${pathToNewlyProject}` : ''}>
          <button className="btn btn-sm btn-dark">View Project</button>
        </Link>
      </div>

      <button onClick={onClose} type="button" className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto">
        <span className="svg-icon svg-icon-1 svg-icon-primary">
          <i className="fa fa-close fa-2xl text-white"></i>
        </span>
      </button>
    </div>
  )
}

export default AlertNotification