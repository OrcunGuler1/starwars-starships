import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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

const initialState: Planet[] = [
  {
    climate: '',
    created: '',
    diameter: '',
    edited: '',
    films: [],
    gravity: '',
    name: '',
    orbital_period: '',
    population: '',
    residents: [],
    rotation_period: '',
    surface_water: '',
    terrain: '',
    url: '',
  },
]

const planetsReducer = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planet[]>) => {
      return [...state, ...action.payload]
    },
  },
})

export const { setPlanets } = planetsReducer.actions

export default planetsReducer.reducer
