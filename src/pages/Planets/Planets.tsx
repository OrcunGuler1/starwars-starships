import { Suspense, useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Data, Planet } from '../../types/types'
import PlanetCard from './components/PlanetCard'
type OrderTypes = 'population' | 'name' | 'diameter'
type Order = 'asc' | 'desc'
const Planets = () => {
  const { results } = useLoaderData() as Data
  const [orderBy, setOrderBy] = useState<OrderTypes>('name')
  const [direction, setDirection] = useState<Order>('asc')
  const handleOrder = (data: Planet[]) => {
    switch (orderBy) {
      case 'population':
        return data.sort((a, b) => {
          if (a.population === 'unknown') return 1
          if (b.population === 'unknown') return -1
          if (direction === 'asc')
            return parseInt(a.population) - parseInt(b.population)

          return parseInt(b.population) - parseInt(a.population)
        })
      case 'name':
        if (direction === 'asc')
          return data.sort((a, b) => a.name.localeCompare(b.name))
        return data.sort((a, b) => b.name.localeCompare(a.name))
      case 'diameter':
        if (direction === 'asc')
          return data.sort((a, b) => parseInt(a.diameter) - parseInt(b.diameter))
        return data.sort((a, b) => parseInt(b.diameter) - parseInt(a.diameter))
      default:
        return data
    }
  }
  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-8 mt-10 flex w-full flex-row justify-end gap-8 self-end">
        <button
          className="rounded bg-slate-700 p-2 text-center text-white"
          onClick={() => setOrderBy('name')}
        >
          Order by name
        </button>
        <button
          className="rounded bg-slate-700 p-2 text-center text-white"
          onClick={() => setOrderBy('population')}
        >
          Order by population
        </button>
        <button
          className="rounded bg-slate-700 p-2 text-center text-white"
          onClick={() => setOrderBy('diameter')}
        >
          Order by diameter
        </button>
        <button
          className="min-w-[6rem] rounded bg-slate-700 p-2 text-center text-white"
          onClick={() => setDirection(direction === 'asc' ? 'desc' : 'asc')}
        >
          {direction === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<>Loading..</>}>
          <Await
            resolve={results}
            children={(results: Planet[]) => (
              <>
                {handleOrder(results).map(planet => (
                  <PlanetCard key={planet.name} {...planet} />
                ))}
              </>
            )}
            errorElement={<div>Something went wrong</div>}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default Planets
