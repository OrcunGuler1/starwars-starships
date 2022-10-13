import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../axios'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import { Planet } from '../../../types/types'

const PlanetCard: FC<PlanetCardProps> = ({ planet, url }) => {
  const [planetData, setPlanetData] = useState<Planet | null>(planet || null)
  const navigate = useNavigate()
  if (!planet)
    useEffect(() => {
      const { id, resource } = getUrlPaths(url as string)
      axiosInstance.get(`/${resource}/${id}`).then(res => {
        setPlanetData(res.data)
      })
      return () => setPlanetData(null)
    }, [url])

  return (
    <div
      className="relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_Details']"
      onClick={() => navigate(`/planets/${getUrlPaths(url as string).id}`)}
    >
      <header className="my-3">
        <h2 className="text-center">{planetData?.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <p className="text-center capitalize">Climate: {planetData?.climate}</p>
        <p className="text-center">Population: {planetData?.population}</p>
        <p className="text-center">Diameter: {planetData?.diameter}</p>
        <p className="text-center capitalize">Gravity: {planetData?.gravity}</p>
      </div>
    </div>
  )
}

export default PlanetCard

type PlanetCardProps = {
  planet?: Planet
  url?: string
}
