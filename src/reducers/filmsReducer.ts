import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type Film = {
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

const initialState: Film[] = [
  {
    characters: [],
    created: '',
    director: '',
    edited: '',
    episode_id: NaN,
    opening_crawl: '',
    planets: [],
    producer: '',
    release_date: '',
    species: [],
    starships: [],
    title: '',
    url: '',
    vehicles: [],
  },
]

const filmsReducer = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<Film[]>) => {
      return [...state, ...action.payload]
    },
  },
})
export const { setFilms } = filmsReducer.actions

export default filmsReducer.reducer
