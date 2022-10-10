import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../../axios'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import type { Person } from '../../../types/types'

const PersonCard: FC<PersonCardProps> = ({ person, url }) => {
  const [personData, setPersonData] = useState<Person | null>(person || null)
  const navigate = useNavigate()
  if (!person)
    useEffect(() => {
      const { id, resource } = getUrlPaths(url as string)
      axiosInstance.get(`/${resource}/${id}`).then(res => {
        setPersonData(res.data)
      })
      return () => setPersonData(null)
    }, [url])

  return (
    <div className="relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_Details']">
      <header className="my-3">
        <h2 className="text-center">{personData?.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <p className="text-center">Hair Colour: {personData?.hair_color}</p>
        <p className="text-center">Skin Colour: {personData?.skin_color}</p>
        <p className="text-center">Height: {personData?.height}</p>
        <p className="text-center">Eye Colour: {personData?.eye_color}</p>
      </div>
    </div>
  )
}

export default PersonCard

type PersonCardProps = {
  person?: Person
  url?: string
}
