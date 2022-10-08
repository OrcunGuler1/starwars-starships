import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Data, Film } from '../../types/types'
import FilmCard from './components/FilmCard'

const Films = () => {
  const { results } = useLoaderData() as Data
  const sortByEpisode = (results as Film[]).sort(
    (a, b) => a.episode_id - b.episode_id,
  )
  const sortByDate = (results as Film[]).sort((a, b) => {
    const dateA = new Date(a.release_date)
    const dateB = new Date(b.release_date)
    return dateA.getTime() - dateB.getTime()
  })
  const [sortBy, setSortBy] = useState('episode')
  return (
    <>
      <div className="grid grid-cols-4 w-full gap-5">
        {(sortBy === 'episode' ? sortByEpisode : sortByDate).map(film => (
          <FilmCard key={film.episode_id} {...film}></FilmCard>
        ))}
      </div>
    </>
  )
}

export default Films
