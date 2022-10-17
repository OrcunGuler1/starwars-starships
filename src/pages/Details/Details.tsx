import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { getUrlPaths } from '../../helpers/getUrlPaths'
import {
  Film,
  Person,
  Planet,
  ResultsType,
  Specie,
  Starship,
  Vehicle,
} from '../../types/types'
import {
  FilmDetails,
  PersonDetails,
  PlanetDetails,
  SpecieDetails,
  StarshipDetails,
  VehicleDetails,
} from './components'

const Details = () => {
  const data = useLoaderData() as ResultsType
  console.log(data)

  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Await
          resolve={data}
          children={data => {
            switch (getUrlPaths(data.url).resource) {
              case 'films':
                return <FilmDetails {...(data as Film)} />
              case 'people':
                return <PersonDetails {...(data as Person)} />
              case 'planets':
                return <PlanetDetails {...(data as Planet)} />
              case 'species':
                return <SpecieDetails {...(data as Specie)} />
              case 'starships':
                return <StarshipDetails {...(data as Starship)} />
              case 'vehicles':
                return <VehicleDetails {...(data as Vehicle)} />
              default:
                return <p>Oops something went wrong</p>
            }
          }}
        ></Await>
      </Suspense>
    </div>
  )
}

export default Details
