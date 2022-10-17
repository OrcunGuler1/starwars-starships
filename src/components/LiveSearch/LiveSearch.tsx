import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../axios'
import { AvailableResources } from '../../constants'
import { resources } from '../../routes/routes'
import { SearchResultsType } from '../../types/types'
import SearchCard from './components/SearchCard'

const INITIAL_SEARCH_RESULTS: SearchResultsType = {
  films: [],
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
}

const LiveSearch: FC<LiveSearchProps> = ({ query, setQuery }) => {
  const navigate = useNavigate()
  const [ctr, setCtr] = useState(0)
  const [results, setResults] = useState<SearchResultsType>(
    INITIAL_SEARCH_RESULTS,
  )
  const [focus, setFocus] = useState(false)
  const [loading, setLoading] = useState(true)

  const dataAvailable = () => {
    console.log('data available')
    return Object.values(results).some(arr => arr.length > 0)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    setQuery(e.target.value)
    resources.map(resource => {
      axiosInstance
        .get(`/${resource.toLowerCase()}/?search=${e.target.value}`)
        .then(res =>
          setResults(
            prev =>
              prev && {
                ...prev,
                [resource]: res.data.results,
              },
          ),
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
    setResults(INITIAL_SEARCH_RESULTS)
    setFocus(false)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCtr(prev => (prev + 1) % resources.length)
    }, 2000)
    if (results) clearInterval(interval)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={
        'relative flex flex-row' +
        (window.location.pathname === '/' && ' w-1/2 translate-x-1/2')
      }
      onBlur={() => setFocus(false)}
    >
      <input
        className="focus:shadow-outline h-10 w-full self-end rounded-full bg-white px-5 pr-10 text-lg text-gray-700 placeholder-gray-400 shadow transition focus:outline-none"
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setFocus(true)}
        placeholder={`Search ${resources[ctr]}`}
      />
      {dataAvailable() && query && !loading && focus && (
        <div className="hide-scrollbar absolute top-full z-50 mt-1 max-h-56 w-full overflow-y-auto rounded rounded-bl rounded-br bg-slate-600 p-2 text-white shadow-lg">
          {results &&
            Object.entries(results).map(
              ([key, entry], i) =>
                entry.length > 0 && (
                  <div key={i}>
                    <button
                      className="w-full cursor-pointer rounded-l py-2 text-center hover:bg-black hover:bg-opacity-10"
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
        <div className="absolute top-full mt-1 max-h-56 w-full overflow-y-auto rounded-bl rounded-br bg-slate-700 p-2 text-white shadow-lg">
          <h2 className="text-center text-lg font-semibold">Loading...</h2>
        </div>
      )}
      {!dataAvailable() && query && !loading && focus && (
        <div className="absolute top-full mt-1 max-h-56 w-full overflow-y-auto rounded-bl rounded-br bg-slate-700 p-2 text-white shadow-lg">
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
