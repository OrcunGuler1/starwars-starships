import { Suspense, useCallback, useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Data, Film } from '../../types/types'
import FilmCard from './components/FilmCard'

const Films = () => {
  const { results } = useLoaderData() as Data
  const [sort, setSort] = useState<'episode' | 'date'>('episode')

  const sortData = useCallback(
    (data: Film[]) => {
      if (sort === 'episode') {
        return data.sort((a, b) => a.episode_id - b.episode_id)
      } else {
        return data.sort((a, b) => {
          const dateA = new Date(a.release_date)
          const dateB = new Date(b.release_date)
          return dateA.getTime() - dateB.getTime()
        })
      }
    },
    [sort],
  )

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-8 flex w-full flex-row justify-end gap-8 self-end">
        <div className="flex flex-row gap-3 mt-10">
          <button
            className="rounded bg-slate-700 p-2 text-center text-white"
            onClick={() => setSort('episode')}
          >
            Sort by episode
          </button>
          <button
            className="rounded bg-slate-700 p-2 text-center text-white"
            onClick={() => setSort('date')}
          >
            Sort by date
          </button>
        </div>
      </div>
      <div className="grid w-full gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        <Suspense fallback={<>Loading..</>}>
          <Await
            resolve={results}
            children={(results: Film[]) => (
              <>
                {sortData(results).map(film => (
                  <FilmCard key={film.episode_id} {...film}></FilmCard>
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

export default Films
