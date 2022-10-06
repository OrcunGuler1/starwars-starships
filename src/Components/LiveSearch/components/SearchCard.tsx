import { get, has } from 'lodash'
import { FC } from 'react'
import type { AvailableResources } from '../../../constants'
import type {
  Film,
  Person,
  Planet,
  Specie,
  Starship,
  Vehicle,
} from '../../../types/types'

type SearchCardProps = {
  item: Partial<Film | Person | Planet | Specie | Starship | Vehicle>
  handleSelect: (id: string, resource: AvailableResources) => void
}
const SearchCard: FC<SearchCardProps> = ({ item, handleSelect }) => {
  const params = new URL(item.url as string).pathname.split('/')
  const resource = params[params.length - 3] as AvailableResources
  const id = params[params.length - 2]
  return (
    <button
      className="cursor-pointer hover:bg-black hover:bg-opacity-10 py-2 w-full text-center"
      onClick={() => handleSelect(id, resource)}
    >
      {has(item, 'name') ? get(item, 'name') : get(item, 'title')}
    </button>
  )
}

export default SearchCard
