import { has } from 'lodash'
import { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { ResultsType } from '../../types/types'
import FilmDetails from './components/FilmDetails'
import OtherDetails from './components/OtherDetails'

const Details = () => {
  const data = useLoaderData() as ResultsType
  console.log(data)

  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <Await
          resolve={data}
          children={data =>
            has(data, 'title') ? (
              <FilmDetails {...data} />
            ) : (
              <OtherDetails {...data} />
            )
          }
        ></Await>
      </Suspense>
    </div>
  )
}

export default Details
