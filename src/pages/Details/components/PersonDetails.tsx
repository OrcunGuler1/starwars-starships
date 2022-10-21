import { FC, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getCardDetails } from '../../../helpers/getCardDetails'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import useGetPersonImage from '../../../hooks/useGetPersonImage'
import {
  Film,
  Person,
  Planet,
  Specie,
  Starship,
  Vehicle,
} from '../../../types/types'
import FilmCard from '../../Films/components/FilmCard'
import StarshipCard from '../../Starships/components/StarshipCard'
import VehicleCard from '../../Vehicles/components/VehicleCard'
const INITIAL_DATA: Details = {
  species: [],
  starships: [],
  vehicles: [],
  films: [],
  planets: [],
}
type Details = {
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
  films: Film[]
  planets: Planet[]
}
const PersonDetails: FC<Person> = props => {
  const [details, setDetails] = useState<Details>(INITIAL_DATA)
  const {
    name,
    skin_color,
    species,
    starships,
    eye_color,
    birth_year,
    films,
    gender,
    hair_color,
    height,
    homeworld,
    vehicles,
    mass,
    url,
  } = props
  const { image } = useGetPersonImage(getUrlPaths(url).id)
  useEffect(() => {
    getCardDetails(species, setDetails)
    getCardDetails(starships, setDetails)
    getCardDetails(vehicles, setDetails)
    getCardDetails(films, setDetails)
    getCardDetails([homeworld], setDetails)
  }, [])
  return (
    <section className="container mx-auto mt-20 text-white">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold">{name}</h1>
        <p className="text-center text-xl font-semibold capitalize">
          Height: {height}
        </p>
        <p className="text-center text-xl font-semibold capitalize">
          Weight: {mass} KG
        </p>
        <p className="text-center text-xl font-semibold capitalize">
          Eye color: {eye_color}
        </p>
        <p className="text-center text-xl font-semibold">
          Born in: {birth_year}
        </p>
        <p className="text-center text-xl font-semibold capitalize">
          Gender: {gender}
        </p>
        <p className="text-center text-xl font-semibold capitalize">
          Homeworld: {details.planets[0]?.name}
        </p>
        {image && <img src={image} alt="Character photo" />}
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Movies this character appears in
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {details.films.map(film => (
              <FilmCard key={film.title} {...film} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-semibold">Vehicles owned</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {details.vehicles.map(vehicle => (
              <VehicleCard key={vehicle.name} {...vehicle} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="pb-4 text-center text-2xl font-semibold">
            Starships owned
          </h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            {details.starships.map(starship => (
              <StarshipCard key={starship.name} {...starship} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonDetails
