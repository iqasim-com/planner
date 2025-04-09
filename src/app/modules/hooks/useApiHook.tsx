import React, { useEffect, useState, useCallback } from "react"
import { api } from "../../../setup/axios/api"

const useApiHook = (url: string, method: string = 'GET', payload?: any) => {
  const [apiData, setApiData] = useState<any>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchData = useCallback(() => {
    setIsLoading(true)
    if (url !== '') {
      if (method === 'POST') {
        api.post(url, payload).then((data) => {
          setApiData(data.data)
          setIsLoading(false)
        })
      } else {
        api.get(url).then((data) => {
          setApiData(data)
          setIsLoading(false)
        })
      }
    }
  }, [url, method, payload])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [apiData, isLoading, fetchData]
}

export default useApiHook
