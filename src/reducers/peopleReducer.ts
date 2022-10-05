import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type People = {
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

const initialState: People[] = [
  {
    birth_year: '',
    eye_color: '',
    films: [],
    gender: '',
    hair_color: '',
    height: '',
    homeworld: '',
    mass: '',
    name: '',
    skin_color: '',
    created: '',
    edited: '',
    species: [],
    starships: [],
    url: '',
    vehicles: [],
  },
]

const peopleReducer = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<People[]>) => {
      return [...state, ...action.payload]
    },
  },
})

export const { setPeople } = peopleReducer.actions
export default peopleReducer.reducer
