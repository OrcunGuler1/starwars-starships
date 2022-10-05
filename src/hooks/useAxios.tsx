import { useCallback, useEffect, useState } from 'react'
import axios from '../axios'

const useAxios = ({ endpoint }: useAxiosProps) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(endpoint)
      setData(data)
    }
    fetchData()
  }, [data])
  return { data }
}

export default useAxios

type useAxiosProps = {
  endpoint: string
}
