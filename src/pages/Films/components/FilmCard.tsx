import type { Film } from '../../../types/types'

const FilmCard = (film: Film) => {
  return (
    <div className="flex flex-col rounded border border-slate-900 bg-slate-700 text-white">
      <header className="my-2">
        <h2 className="text-center">{film.title}</h2>
      </header>
      <div className="flex flex-col justify-center items-center gap-3 mb-2">
        <p className="text-center ">Episode: {film.episode_id}</p>
        <p className="text-center">Director: {film.director}</p>
        <p className="text-center">Producer: {film.producer}</p>
        <p className="text-center">Release Date: {film.release_date}</p>
      </div>
    </div>
  )
}

export default FilmCard
