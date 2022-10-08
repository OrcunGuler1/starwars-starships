import type { Film } from '../../../types/types'

const FilmCard = (film: Film) => {
  return (
    <div className="flex flex-col">
      <header>
        <h2 className="text-center">{film.title}</h2>
      </header>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">Episode: {film.episode_id}</p>
        <p className="text-center">Director: {film.director}</p>
        <p className="text-center">Producer: {film.producer}</p>
        <p className="text-center">Release Date: {film.release_date}</p>
      </div>
    </div>
  )
}

export default FilmCard
