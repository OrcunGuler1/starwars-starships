import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import { Starship } from '../../../types/types'

const StarshipCard: FC<Starship> = starship => {
  const navigate = useNavigate()
  const { id, resource } = getUrlPaths(starship.url)
  return (
    <div
      className="relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_Details']"
      onClick={() => navigate(`/${resource}/${id}`)}
    >
      <header className="my-3">
        <h2 className="text-center">{starship.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <p className="text-center capitalize">Model: {starship.model}</p>
        <p className="text-center capitalize">
          Cost in credits: {starship.cost_in_credits}
        </p>
        <p className="text-center capitalize">
          Max atmosphering speed: {starship.max_atmosphering_speed}
        </p>
        <p className="text-center capitalize">Number of crew members: {starship.crew}</p>
        <p className="text-center capitalize">
          Number of passengers: {starship.passengers}
        </p>
        <p className="text-center capitalize">
          Hyperdrive rating: {starship.hyperdrive_rating}
        </p>
        <p className="text-center capitalize">
          Starship class: {starship.starship_class}
        </p>
      </div>
    </div>
  )
}

export default StarshipCard
