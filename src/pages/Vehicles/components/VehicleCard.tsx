import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import { Vehicle } from '../../../types/types'

const VehicleCard: FC<Vehicle> = vehicle => {
  const navigate = useNavigate()
  const { id, resource } = getUrlPaths(vehicle.url)
  return (
    <div
      className="relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_Details']"
      onClick={() => navigate(`/${resource}/${id}`)}
    >
      <header className="my-3">
        <h2 className="text-center">{vehicle.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3"></div>
    </div>
  )
}

export default VehicleCard
