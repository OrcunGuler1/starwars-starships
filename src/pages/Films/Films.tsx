import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Data, Film } from '../../types/types'
import FilmCard from './components/FilmCard'

const Films = () => {
  const { results } = useLoaderData() as Data
  const [sort, setSort] = useState<'episode' | 'date'>('episode')

  return (
    <div className="container mx-auto flex flex-col">
      <div className="self-end mb-8 w-full flex flex-row justify-end gap-8">
        <div className="flex flex-row gap-3">
          <button
            className="bg-slate-700 text-white rounded p-2 text-center"
            onClick={() => setSort('episode')}
          >
            Sort by episode
          </button>
          <button
            className="bg-slate-700 text-white rounded p-2 text-center"
            onClick={() => setSort('date')}
          >
            Sort by date
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 w-full gap-5">
        {results &&
          sort === 'episode' &&
          (results as Film[])
            .sort((a, b) => a.episode_id - b.episode_id)
            .map(film => <FilmCard key={film.episode_id} {...film}></FilmCard>)}
        {results &&
          sort === 'date' &&
          (results as Film[])
            .sort((a, b) => {
              const dateA = new Date(a.release_date)
              const dateB = new Date(b.release_date)
              return dateA.getTime() - dateB.getTime()
            })
            .map(film => <FilmCard key={film.episode_id} {...film}></FilmCard>)}
      </div>
    </div>
  )
}

export default Films
