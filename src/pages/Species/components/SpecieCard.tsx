import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import { Specie } from '../../../types/types'

const SpeciesCard: FC<Specie> = specie => {
  const navigate = useNavigate()
  const { id, resource } = getUrlPaths(specie.url)
  return (
    <div
      className="relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_Details']"
      onClick={() => navigate(`/${resource}/${id}`)}
    >
      <header className="my-3">
        <h2 className="text-center">{specie.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <p className="text-center capitalize">
          Designation: {specie.designation}
        </p>
        <p className="text-center capitalize">
          Average height:{' '}
          {specie.average_height === 'n/a' ? 'Varible' : specie.average_height}
        </p>
        <p className="text-center capitalize">
          Average life span: {specie.average_lifespan}
        </p>
      </div>
    </div>
  )
}

export default SpeciesCard
