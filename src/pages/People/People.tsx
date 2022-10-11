import { uniqBy } from 'lodash'
import { Suspense, useMemo, useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import Select from '../../components/Select/Select'
import { Data, Person, SelectOption } from '../../types/types'
import PersonCard from './components/PersonCard'

const People = () => {
  const { results } = useLoaderData() as Data
  const values = useMemo(
    () =>
      uniqBy(
        (results as Person[]).map((person: Person) => ({
          value: person.name,
          label: person.gender,
        })),
        'label',
      ),
    [results],
  )
  const [options, setOptions] = useState<SelectOption[]>([])
  const handleSort = (data: Person[]) => {
    return data.filter((person: any) =>
      options.find(opt => person.gender === opt.label),
    )
  }
  return (
    <div className="container mx-auto flex flex-col">
      <Select
        multi
        options={values}
        onChange={opt => setOptions(opt)}
        value={options}
      />
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
