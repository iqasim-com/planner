import React, {useState} from 'react'

const ImageUpload = () => {
  const [file, setFile] = useState<any>([])

  /**
   * Function for handling single file
   * @param e 
   */
  const uploadSingleFile = (e: any) => {
    let ImagesArray = Object.entries(e.target.files).map((e: any) => URL.createObjectURL(e[1]))
    setFile([...file, ...ImagesArray])
  }

  /**
   * Function for uploading file to the server
   * TODO: Will proper integration
   * @param e 
   */
  const upload = (e: any) => {
    e.preventDefault()
    console.log(file)
  }

  /**
   * Function for deleting current selected files
   * @param e 
   */
  const deleteFile = (e: any) => {
    const s = file.filter((item: any, index: any) => index !== e)
    setFile(s)
  }

  return (
    <>
      <div className={`container-fluid preview mb-3`}>
        <div className='row'>
          {file.length > 0 &&
            file.map((item: any, index: number) => {
              return (
                <div key={item} className='col-lg-3 p-0 mx-2 position-relative'>
                  <img src={item} width='100%' alt='' />
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={(e) => {
                      if (window.confirm(`Are you sure you want to delete?`)) {
                        deleteFile(index)
                      } else {
                        return
                      }
                    }}
                    style={{position: 'absolute', bottom: '10px', right: '10px'}}
                  >
                    <i className='fa fa-trash'></i>
                  </button>
                </div>
              )
            })}
        </div>
      </div>
      <div className="container-fluid mb-12">
        <div className="row">
          <div className='col-lg-12'>
            <input
              type='file'
              disabled={file.length === 5}
              className='form-control mb-2'
              onChange={uploadSingleFile}
              multiple
            />
            <p className='text-primary'>Note: Videos are not allowed. Only JPG, PNG and JPEG formats allowed to a max size of <b>5MB</b></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageUpload
