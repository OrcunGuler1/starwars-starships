import { useCallback, useEffect, useState } from 'react'
import axios from '../axios'
import { ResponseType, ResultsType } from '../types/types'

const useAxios = ({ endpoint, page }: useAxiosProps) => {
  const [data, setData] = useState<ResultsType>()
  const [nextPage, setNextPage] = useState<number>()
  const [prevPage, setPrevPage] = useState<number>()

  const fetchData = useCallback(async () => {
    const { data }: { data: ResponseType } = await axios.get(endpoint, {
      params: {
        page: page,
      },
    })
    setData(data.results)
    setNextPage(Number(new URL(data.next || '').searchParams.get('page')))
    setPrevPage(Number(new URL(data.previous || '').searchParams.get('page')))
  }, [page])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  return { data, nextPage, prevPage }
}

export default useAxios

type useAxiosProps = {
  endpoint: string
  page: number
}
