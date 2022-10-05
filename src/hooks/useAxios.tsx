import { useEffect, useState } from 'react'
import axios from '../axios'
import { ResponseType } from '../types/types'

const useAxios = ({ endpoint }: useAxiosProps) => {
  const [data, setData] = useState<ResponseType>()
  const [nextPage, setNextPage] = useState<number>()
  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: ResponseType } = await axios.get(endpoint, {
        params: {
          page: nextPage,
        },
      })
      setData(data)
      setNextPage(Number(new URL(data.next || '').searchParams.get('page')))
    }
    fetchData()
  }, [])
  return { data, nextPage, setNextPage }
}

export default useAxios

type useAxiosProps = {
  endpoint: string
}
