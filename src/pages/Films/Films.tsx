import { useLoaderData } from 'react-router-dom'
import { Data, Film } from '../../types/types'
import FilmCard from './components/FilmCard'

const Films = () => {
  const { results } = useLoaderData() as Data

  return (
    <div className="grid grid-cols-4 w-full gap-5">
      {(results as Film[])
        .sort((f, fi) => (f.episode_id > fi.episode_id ? 1 : -1))
        .map(film => (
          <FilmCard key={film.episode_id} {...film}></FilmCard>
        ))}
    </div>
  )
}

export default Films
