import { FC, useEffect, useState } from 'react'
import axiosInstance from '../../../axios'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import { Planet } from '../../../types/types'

const PlanetCard: FC<PlanetCardProps> = ({ planet, url }) => {
  const [planetData, setPlanetData] = useState<Planet | null>(planet || null)
  if (!planet)
    useEffect(() => {
      const { id, resource } = getUrlPaths(url as string)
      axiosInstance.get(`/${resource}/${id}`).then(res => {
        setPlanetData(res.data)
      })
      return () => setPlanetData(null)
    }, [url])

  return <div>{planetData?.name}</div>
}

export default PlanetCard

type PlanetCardProps = {
  planet?: Planet
  url?: string
}
