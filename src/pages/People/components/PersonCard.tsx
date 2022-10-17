import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import type { Person } from '../../../types/types'

const PersonCard: FC<Person> = (person: Person) => {
  const navigate = useNavigate()

  return (
    <div
      className={`relative flex flex-col rounded border border-slate-900 bg-slate-600 text-white before:absolute before:flex before:h-full before:w-full before:place-content-center before:items-center before:justify-center before:hover:cursor-pointer before:hover:bg-slate-700 before:hover:bg-opacity-80 before:hover:backdrop-blur-sm before:hover:transition-all before:hover:duration-300 before:hover:content-['Go_to_details']`}
      onClick={() =>
        navigate(`/people/${getUrlPaths(person.url as string).id}`)
      }
    >
      <header className="my-3">
        <h2 className="text-center">{person.name}</h2>
      </header>
      <div className="mb-2 flex flex-col items-center justify-center gap-3">
        <p className="text-center">Hair Colour: {person.hair_color}</p>
        <p className="text-center">Skin Colour: {person.skin_color}</p>
        <p className="text-center">Height: {person.height}</p>
        <p className="text-center">Eye Colour: {person.eye_color}</p>
      </div>
    </div>
  )
}

export default PersonCard
