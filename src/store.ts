import { configureStore } from '@reduxjs/toolkit'
import {
  filmsReducer,
  peopleReducer,
  planetsReducer,
  speciesReducer,
  starshipsReducer,
  vehiclesReducer,
} from './reducers'

export default configureStore({
  reducer: {
    films: filmsReducer,
    people: peopleReducer,
    planets: planetsReducer,
    species: speciesReducer,
    starships: starshipsReducer,
    vehicles: vehiclesReducer,
  },
})
