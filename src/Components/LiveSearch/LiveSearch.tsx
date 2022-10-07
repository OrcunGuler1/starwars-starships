import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { AvailableResources } from '../../constants'
import axiosInstance from '../../axios'
import axios from 'axios'
import { SearchResultsType } from '../../types/types'
import SearchCard from './components/SearchCard'
import { useNavigate } from 'react-router-dom'
const LiveSearch: FC<LiveSearchProps> = ({ query, setQuery }) => {
  const navigate = useNavigate()
  const [placeholder, setPlaceholder] = useState('')
  const [ctr, setCtr] = useState(0)
  const [results, setResults] = useState<SearchResultsType>({
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  })
  const [loading, setLoading] = useState(true)
  const resources = Object.keys(AvailableResources) as Array<
    keyof typeof AvailableResources
  >
  console.log(results)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setQuery(e.target.value)
    setTimeout(() => {
      resources.map(resource => {
        axiosInstance
          .get(`/${resource.toLowerCase()}/?search=${e.target.value}`)
          .then(res =>
            setResults(prev => ({
              ...prev,
              [resource]: res.data.results,
            })),
          )
          .catch(e => {
            if (axios.isCancel(e)) return
            console.log(e)
          })
          .finally(() => {
            setLoading(false)
          })
      })
    }, 1000)
  }

  const handleSelect = (id: string, resource: AvailableResources) => {
    navigate(`/${resource.toLowerCase()}/${id}`, {
      state: {
        id,
        resource,
      },
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(resources[ctr])
      setCtr(prev => (prev + 1) % resources.length)
    }, 2000)
    if (results) clearInterval(interval)
    return () => clearInterval(interval)
  }, [ctr])

  return (
    <div className="relative">
      <input
        className="w-64 h-10 px-5 pr-10 text-lg text-gray-700 placeholder-gray-400 bg-white rounded-full shadow focus:outline-none focus:shadow-outline transition"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={`Search ${placeholder}`}
      />
      {results && query && (
        <div className="absolute mt-1 w-64 p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
          {Object.entries(results).map(
            ([key, entry], i) =>
              entry.length > 0 && (
                <div key={i}>
                  <h2 className="font-semibold text-lg text-center">
                    {AvailableResources[
                      key as keyof typeof AvailableResources
                    ].toUpperCase()}
                  </h2>
                  <ul className="flex-col place-items-center m-0">
                    {entry.map((item, i) => (
                      <SearchCard
                        key={i}
                        item={item}
                        handleSelect={handleSelect}
                      />
                    ))}
                  </ul>
                </div>
              ),
          )}
        </div>
      )}
      {loading && query && (
        <div className="absolute mt-1 w-64 p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
          <h2 className="font-semibold text-lg text-center">Loading...</h2>
        </div>
      )}
    </div>
  )
}

export default LiveSearch

type LiveSearchProps = {
  query: string
  setQuery: Dispatch<SetStateAction<string>>
}
