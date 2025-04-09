import { useFormikContext } from "formik"
import { useEffect, useState } from "react"

const useCategoryHook = ({ options }: any) => {
  const formik = useFormikContext()

  if (!formik) {
    throw new Error('useCategoryHook must be used within a Formik component')
  }

  const { setFieldValue } = formik

  const categorySelection = (name: any, category: string) => {
    const selectedValue = parseInt(name.target.value)
    const selectedOption = options.find((option: any) => option.value === selectedValue)
    const categoryName = selectedOption ? selectedOption.name : ''

    setFieldValue(category, { name: categoryName, value: selectedValue })
  }

  useEffect(() => {
    setFieldValue('category', options[0].value)
  }, [options, setFieldValue])

  return [categorySelection]
}


export default useCategoryHook