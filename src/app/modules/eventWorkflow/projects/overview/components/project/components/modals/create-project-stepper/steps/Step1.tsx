/* eslint-disable jsx-a11y/anchor-is-valid */
import { Field } from 'formik'
import useCategoryHook from '../../../../../../../../../hooks/useCategoryHook'
import { checkProjectAvailability } from '../../../../../../../../../auth/core/_requests'
import { useEffect, useState } from 'react'
import { useDebounce } from '../../../../../../../../../../../_metronic/helpers'
import { useAppDispatch } from '../../../../../../../../../../../setup/store'
import { setStatus } from '../slice'

const options = [
  { name: 'Anniversary', value: 1 },
  { name: 'Bat/Mitzvah', value: 2 },
  { name: 'Birthday', value: 3 },
  { name: 'Corporate', value: 4 },
  { name: 'Graduation', value: 5 },
  { name: 'Private Party', value: 6 },
  { name: 'Religious', value: 7 },
  { name: 'Sweet Sixteen', value: 8 },
  { name: 'Wedding', value: 9 },
  { name: 'Other', value: 10 }
]

const Step1 = ({ hasError, values, sfv }: any) => {
  const [categorySelection] = useCategoryHook({ options })
  const [isProjectExist, setIsProjectExist] = useState<boolean | null>(null) // Initial state as null
  const [projectName, setProjectName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false) // Loader state
  const debounce = useDebounce(projectName, 500)
  const dispatch = useAppDispatch()

  // Function to check project availability (debounced version)
  const checkingIsProjectExist = async (val: string) => {
    setLoading(true) // Start loading
    try {
      const res = await checkProjectAvailability(val)
      setIsProjectExist(res?.data.isProjectNameAvailable)
      console.log('status in func', res?.data.isProjectNameAvailable)
      if(!res?.data.isProjectNameAvailable) {
        dispatch(setStatus(false))
      } else {
        dispatch(setStatus(true))
      }
    } catch (error) {
      console.error('Error checking project availability', error)
    }
    setLoading(false) // Stop loading
  }

  useEffect(() => {
    if (debounce) {
      checkingIsProjectExist(debounce)
    } else {
      setIsProjectExist(null) // Reset when there's no debounce (i.e., no typing)
    }
  }, [debounce])

  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Name</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Enter the project Name'
            ></i>
          </label>
          <div className="bg-gray-100 rounded">
            <Field
              type='text'
              placeholder='Amazing Project'
              className='form-control form-control-lg form-control-solid'
              name='name'
              onChange={(e: any) => {
                setProjectName(e.target.value)
                sfv('name', e.target.value)
              }}
            />
          </div>

          {/* Loader icon */}
          {loading && (
            <div className='py-2'>
              <span className='px-3'>
                <i className='fa fa-spinner fa-spin text-primary'></i> Checking availability...
              </span>
            </div>
          )}

          {/* Availability status */}
          {!loading && debounce && isProjectExist !== null && (
            <div className='py-2'>
              {isProjectExist ? (
                <span className='px-3'>
                  <i className='fa fa-xl fa-circle-check text-success'></i>
                  <span className='fw-bold text-success ms-2'>{values.name}</span> is available
                </span>
              ) : (
                <span className='px-3 text-danger'>
                  <i className='fa fa-xl fa-exclamation-triangle text-danger'></i>
                  The project <span className='fw-bold text-primary ms-2'>{values.name}</span> already exists on this account.
                </span>
              )}
            </div>
          )}

          {!values.name && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='appname' data-validator='notEmpty' className='fv-help-block'>
                Project name is required
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>Category</span>
          </label>

          <Field
            type='text'
            component='select'
            className='form-control form-control-lg form-control-solid'
            name='category'
            value={values.category.value}
            onChange={(e: any) => {
              categorySelection(e, 'category')
            }}
          >
            <option value="None">Select Project Category</option>
            {options.map(obj => {
              return (
                <option key={obj.value} value={obj.value}>
                  {obj.name}
                </option>
              )
            })}
          </Field>
          {!values.category && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='projectCategory' data-validator='notEmpty' className='fv-help-block'>
                Project Category is required
              </div>
            </div>
          )}
        </div>

        <div className='fv-row mb-10'>
          <label className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span>Template</span>
          </label>
          <Field
            data-control='select2'
            data-hide-search='true'
            className='form-control form-control-lg form-control-solid'
            name='templateName'
            component='select'
          >
            <option value="None">Select Project Template</option>
            {options.map(obj => (
              <option key={obj.value} value={obj.value}>
                {obj.name}
              </option>
            ))}
          </Field>
        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export { Step1 }
