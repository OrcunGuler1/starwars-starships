import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { getUrlPaths } from '../../helpers/getUrlPaths'
import { ResultsType } from '../../types/types'
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
                return <FilmDetails {...data} />
              case 'people':
                return <PersonDetails {...data} />
              case 'planets':
                return <PlanetDetails {...data} />
              case 'species':
                return <SpecieDetails {...data} />
              case 'starships':
                return <StarshipDetails {...data} />
              case 'vehicles':
                return <VehicleDetails {...data} />
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
