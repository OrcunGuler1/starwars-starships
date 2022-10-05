import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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

const initialState: Vehicle[] = [
  {
    cargo_capacity: '',
    consumables: '',
    cost_in_credits: '',
    created: '',
    crew: '',
    edited: '',
    length: '',
    manufacturer: '',
    max_atmosphering_speed: '',
    model: '',
    name: '',
    passengers: '',
    pilots: [],
    films: [],
    url: '',
    vehicle_class: '',
  },
]

const vehiclesReducer = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      return [...state, ...action.payload]
    },
  },
})

export const { setVehicles } = vehiclesReducer.actions

export default vehiclesReducer.reducer
