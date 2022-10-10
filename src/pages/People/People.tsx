import { Suspense, useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Data, Person } from '../../types/types'
import PersonCard from './components/PersonCard'

const People = () => {
  const { results } = useLoaderData() as Data

  const [sort, setSort] = useState<string>('all')

  const handleSort = (data: Person[]) => {
    if (sort === 'all') return data
    return data.filter((person: any) => person.gender === sort)
  }

  return (
    <div className="container mx-auto flex flex-col">
      <div className="mb-8 flex w-full flex-row justify-center gap-8">
        <div className="flex flex-row gap-3">
          <select name="" id="" onChange={e => setSort(e.currentTarget.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">Not Applicable</option>
          </select>
        </div>
      </div>

      <div className="grid w-full gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<>Loading..</>}>
          <Await
            resolve={results}
            children={(results: Person[]) => (
              <>
                {handleSort(results).map(person => (
                  <div>
                    <PersonCard key={person.name} {...person}></PersonCard>
                  </div>
                ))}
              </>
            )}
            errorElement={<div>Something went wrong</div>}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default People
