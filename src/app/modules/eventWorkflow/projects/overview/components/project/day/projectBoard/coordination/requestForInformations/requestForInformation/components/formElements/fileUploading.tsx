import React from 'react'
import {useAppDispatch} from '../../../../../../../../../../../../../../setup/store'
import {deleteRfiDocument} from '../../../../../../../../../../redux/projectBoard/Coordination/RequestForInformation/requestForInformationSlice'

interface FileUploadingProps {
  index: number
  doc: {id: number; name: string; path: string}
  removeDocument: () => any
}

const FileUploading = ({index, doc, removeDocument}: FileUploadingProps) => {
  const dispatch = useAppDispatch()
  return (
    <div className='card bg-gray-100 card-bordered'>
      <div className='card-header'>
        <h3 className='card-title'>{index + 1}</h3>
        <div className='card-toolbar'>
          <button
            type='button'
            onClick={(e) => {
              if (window.confirm(`Are you sure you want to delete? This operation can't be undo`)) {
                removeDocument()
              } else {
                return
              }
            }}
            className='border-0 bg-transparent text-danger'
          >
            <i className='fa fa-close text-danger'></i>
          </button>
        </div>
      </div>
      <div className='card-body p-0'>
        <table className='table gy-7 gs-7'>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{doc.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FileUploading
