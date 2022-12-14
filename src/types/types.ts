export type ResponseType = {
  data: Data
}
export type Data = {
  count: number
  next: string | null
  previous: string | null
  results: ResultsType[]
}
export type SearchResultsType = {
  films: Film[]
  people: Person[]
  planets: Planet[]
  species: Specie[]
  starships: Starship[]
  vehicles: Vehicle[]
}
export type ResultsType = Film | Person | Planet | Specie | Starship | Vehicle

type Film = {
  characters: string[]
  created: string
  director: string
  edited: string
  episode_id: number
  opening_crawl: string
  planets: string[]
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  title: string
  url: string
  vehicles: string[]
}
type Person = {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
}
type Planet = {
  climate: string
  created: string
  diameter: string
  edited: string
  films: string[]
  gravity: string
  name: string
  orbital_period: string
  population: string
  residents: string[]
  rotation_period: string
  surface_water: string
  terrain: string
  url: string
}
type Specie = {
  average_height: string
  average_lifespan: string
  classification: string
  created: string
  designation: string
  edited: string
  eye_colors: string
  hair_colors: string
  homeworld: string
  language: string
  name: string
  people: string[]
  films: string[]
  skin_colors: string
  url: string
}

type Starship = {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  films: string[]
  pilots: string[]
  starship_class: string
  url: string
}
type Vehicle = {
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: string[]
  films: string[]
  url: string
  vehicle_class: string
}

type SelectOption = {
  label: string
  value: string | number
}

type MultipleSelectProps = {
  multi: true
  value: SelectOption[]
  onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
  multi?: false
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

type HandlerProps = {
  e: KeyboardEvent
  options: SelectOption[]
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectOption: (option: SelectOption) => void
  highlightIndex: number
  setHighlightIndex: React.Dispatch<React.SetStateAction<number>>
}

export type { SelectProps, SelectOption, HandlerProps }


export type { Film, Person, Planet, Specie, Starship, Vehicle }
