import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type Species = {
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

const initialState: Species[] = [
  {
    average_height: '',
    average_lifespan: '',
    classification: '',
    created: '',
    designation: '',
    edited: '',
    eye_colors: '',
    hair_colors: '',
    homeworld: '',
    language: '',
    name: '',
    people: [],
    films: [],
    skin_colors: '',
    url: '',
  },
]

const speciesReducer = createSlice({
  name: 'species',
  initialState,
  reducers: {
    setSpecies: (state, action: PayloadAction<Species[]>) => {
      return [...state, ...action.payload]
    },
  },
})

export const { setSpecies } = speciesReducer.actions

export default speciesReducer.reducer
