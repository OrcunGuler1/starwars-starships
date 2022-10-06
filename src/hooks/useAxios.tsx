import { useEffect, useState } from 'react'
import axios from '../axios'
import { ResponseType, ResultsType } from '../types/types'

const useAxios = ({ endpoint }: useAxiosProps) => {
  const [data, setData] = useState<ResultsType[]>()
  const [nextPage, setNextPage] = useState<number>()
  const [prevPage, setPrevPage] = useState<number>()

  const getNextPage = (page: number) => {
    setNextPage(page)
  }
  const getPrevPage = (page: number) => {
    setPrevPage(page)
  }
  useEffect(() => {
    const fetchData = async () => {
      const { data }: { data: ResponseType } = await axios.get(endpoint, {
        params: {
          page: nextPage,
        },
      })
      setData(data.results)
      setNextPage(Number(new URL(data.next || '').searchParams.get('page')))
      setPrevPage(Number(new URL(data.previous || '').searchParams.get('page')))
    }
    fetchData()
  }, [nextPage])
  return { data, nextPage, getNextPage, prevPage, getPrevPage }
}

export default useAxios

type useAxiosProps = {
  endpoint: string
}
