import { FC, useEffect, useState } from 'react'
import { getCardDetails } from '../../../helpers/getCardDetails'
import {
  Film,
  Person,
  Planet,
  Specie,
  Starship,
  Vehicle,
} from '../../../types/types'
import PersonCard from '../../People/components/PersonCard'
import PlanetCard from '../../Planets/components/PlanetCard'
import SpecieCard from '../../Species/components/SpecieCard'
import StarshipCard from '../../Starships/components/StarshipCard'
import VehicleCard from '../../Vehicles/components/VehicleCard'
const INITIAL_DATA: Details = {
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
}
export type Details = {
  people: Person[]
  planets: Planet[]
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
}

const FilmDetails: FC<Film> = film => {
  const [details, setDetails] = useState(INITIAL_DATA)
  const {
    title,
    episode_id,
    director,
    producer,
    release_date,
    characters,
    opening_crawl,
    planets,
    species,
    starships,
    vehicles,
  } = film

  useEffect(() => {
    getCardDetails(characters, setDetails)
    getCardDetails(planets, setDetails)
    getCardDetails(species, setDetails)
    getCardDetails(starships, setDetails)
    getCardDetails(vehicles, setDetails)
  }, [])

  return (
    <section className="container mx-auto mt-20 text-white">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-center text-4xl font-semibold">{title}</h1>
        <p className="text-center text-xl font-semibold">
          Episode: {episode_id}
        </p>
        <p className="text-center text-xl font-semibold">
          Directed by: {director}
        </p>
        <p className="text-center text-xl font-semibold">
          Produced by: {producer}
        </p>
        <p className="text-center text-xl font-semibold">
          Release Date: {release_date}
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Characters Featured
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {details.people.map(character => (
              <PersonCard key={character.name} {...character} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Planets Featured
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {details.planets.map(planet => (
              <PlanetCard key={planet.name} {...planet} />
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h2 className="pb-4 text-center text-2xl font-semibold">
            Opening Crawl
          </h2>
          <p className="text-center text-xl font-semibold">{opening_crawl}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="pb-4 text-center text-2xl font-semibold">Species</h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            {details.species.map(specie => (
              <SpecieCard key={specie.name} {...specie} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="pb-4 text-center text-2xl font-semibold">Starships</h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            {details.starships.map(starship => (
              <StarshipCard key={starship.name} {...starship} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="pb-4 text-center text-2xl font-semibold">Vehicles</h2>
          <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
            {details.vehicles.map(vehicle => (
              <VehicleCard key={vehicle.name} {...vehicle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilmDetails
