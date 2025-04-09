import React, {FC, useState} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../../../../../../../../../_metronic/helpers'
import {Modal} from 'react-bootstrap'
import {useFormik} from 'formik'
import * as Yup from 'yup'

type Props = {
  show: boolean
  handleClose: () => void
}

const Invoice2: FC = () => {
  const [data, setData] = useState('')
  // const updatedData

  const [loading, setLoading] = useState(false)

  return <Modal></Modal>
}

export {Invoice2}
