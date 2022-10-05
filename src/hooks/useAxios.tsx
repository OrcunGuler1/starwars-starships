import { useEffect, useState } from 'react'
import axios from '../axios'
import { ResponseType } from '../types/types'

const useAxios = ({ endpoint, page }: useAxiosProps) => {
  const [data, setData] = useState<ResponseType>()
  const [nextPage, setNextPage] = useState<number>(page)
  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: ResponseType } = await axios.get(endpoint, {
        params: {
          page: page,
        },
      })
      setData(data)
      setNextPage(Number(new URL(data.next || '').searchParams.get('page')))
    }
    fetchData()
  }, [])
  return { data, nextPage }
}

export default useAxios

type useAxiosProps = {
  endpoint: string
  page: number
}
