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
  const [focus, setFocus] = useState(false)
  const [loading, setLoading] = useState(true)
  const resources = Object.keys(AvailableResources) as Array<
    keyof typeof AvailableResources
  >

  const dataAvailable = () => {
    return Object.values(results).some(arr => arr.length > 0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setQuery(e.target.value)
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
          console.log(e)
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  const handleSelect = (id: string, resource: AvailableResources) => {
    navigate(`/${resource.toLowerCase()}/${id}`)
    setFocus(false)
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
    <div className="relative flex flex-row">
      <input
        className="focus:shadow-outline  h-10 w-full self-end rounded-full bg-white px-5 pr-10 text-lg text-gray-700 placeholder-gray-400 shadow transition focus:outline-none"
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        placeholder={`Search ${placeholder}`}
      />
      {dataAvailable() && query && !loading && focus && (
        <div className="hide-scrollbar absolute mt-1 max-h-56 w-64 overflow-y-auto rounded rounded-bl rounded-br bg-slate-600 p-2 shadow-lg">
          {Object.entries(results).map(
            ([key, entry], i) =>
              entry.length > 0 && (
                <div key={i}>
                  <button
                    className="w-full cursor-pointer rounded-l py-2 text-center hover:bg-black hover:bg-opacity-10 "
                    onClick={() =>
                      navigate(
                        `${
                          AvailableResources[
                            key as keyof typeof AvailableResources
                          ]
                        }`,
                      )
                    }
                  >
                    <h2 className="text-center text-lg font-semibold">
                      {AvailableResources[
                        key as keyof typeof AvailableResources
                      ].toUpperCase()}
                    </h2>
                  </button>
                  <ul className="m-0 flex-col place-items-center ">
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
      {loading && query && focus && (
        <div className="absolute mt-1 max-h-56 w-64 overflow-y-auto rounded-bl rounded-br bg-white p-2 shadow-lg">
          <h2 className="text-center text-lg font-semibold">Loading...</h2>
        </div>
      )}
      {!dataAvailable() && query && !loading && focus && (
        <div className="absolute mt-1 max-h-56 w-64 overflow-y-auto rounded-bl rounded-br bg-white p-2 shadow-lg">
          <h2 className="text-center text-lg font-semibold">No results</h2>
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
