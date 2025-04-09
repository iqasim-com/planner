import Select from 'react-select'

const MultiSelect = ({field, form, options, isMulti = false, placeholder = 'Select'}: any) => {
  function onChange(option: any) {
    form.setFieldValue(field.name, option ? option.map((item: any) => item.value) : [])
  }

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option: any) => field?.value?.indexOf(option.value) >= 0)
        : options.find((option: any) => option.value === field.value)
    } else {
      return isMulti ? [] : ''
    }
  }

  if (!isMulti) {
    return (
      <Select
        options={options}
        className='react-select-container form-control p-1 border-0'
        classNamePrefix='react-select'
        name={field.name}
        value={options ? options.find((option: any) => option.value === field.value) : ''}
        onChange={(option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        placeholder={placeholder}
      />
    )
  } else {
    return (
      <Select
        className='react-select-container form-control p-1 border-0'
        classNamePrefix='react-select'
        name={field.name}
        value={getValue()}
        onChange={onChange}
        options={options}
        isMulti={true}
        placeholder={placeholder}
      />
    )
  }
}

export default MultiSelect
