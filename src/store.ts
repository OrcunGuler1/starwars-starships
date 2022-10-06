import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {
  filmsReducer,
  peopleReducer,
  planetsReducer,
  speciesReducer,
  starshipsReducer,
  vehiclesReducer,
} from './reducers'

const store = configureStore({
  reducer: {
    films: filmsReducer,
    people: peopleReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
