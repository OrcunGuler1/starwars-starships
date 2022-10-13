import { FC, useState } from 'react'
import axiosInstance from '../../../axios'
import { Film, Planet } from '../../../types/types'
import PersonCard from '../../People/components/PersonCard'
import PlanetCard from '../../Planets/components/PlanetCard'

const FilmDetails: FC<Film> = film => {
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
            {characters.map(character => (
              <PersonCard key={character} url={character} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Planets Featured
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {planets.map(planetUrl => (
              <PlanetCard key={planetUrl} url={planetUrl} />
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h2 className="pb-4 text-center text-2xl font-semibold">
            Opening Crawl
          </h2>
          <p className="text-center text-xl font-semibold">{opening_crawl}</p>
        </div>
        <div>
          <h2 className="pb-4 text-center text-2xl font-semibold">Species</h2>
        </div>
      </div>
    </section>
  )
}

export default FilmDetails
