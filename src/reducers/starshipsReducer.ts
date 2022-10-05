import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
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

const initialState: Starship[] = [
  {
    MGLT: '',
    cargo_capacity: '',
    consumables: '',
    cost_in_credits: '',
    created: '',
    crew: '',
    edited: '',
    hyperdrive_rating: '',
    length: '',
    manufacturer: '',
    max_atmosphering_speed: '',
    model: '',
    name: '',
    passengers: '',
    films: [],
    pilots: [],
    starship_class: '',
    url: '',
  },
]

const starshipsReducer = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships: (state, action: PayloadAction<Starship[]>) => {
      return [...state, ...action.payload]
    },
  },
})

export const { setStarships } = starshipsReducer.actions

export default starshipsReducer.reducer
