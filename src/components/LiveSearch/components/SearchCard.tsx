import { get, has } from 'lodash'
import { FC } from 'react'
import type { AvailableResources } from '../../../constants'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
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
  const { id, resource } = getUrlPaths(item.url as string)

  return (
    <button
      className="w-full cursor-pointer rounded-l py-2 text-center hover:bg-black hover:bg-opacity-10"
      onClick={() => handleSelect(id, resource as AvailableResources)}
    >
      {has(item, 'name') ? get(item, 'name') : get(item, 'title')}
    </button>
  )
}

export default SearchCard
