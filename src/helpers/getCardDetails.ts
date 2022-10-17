import { uniqBy } from 'lodash'
import { Dispatch, SetStateAction } from 'react'
import axiosInstance from '../axios'
import { Details } from '../pages/Details/components/FilmDetails'
import { ResultsType } from '../types/types'
import { getUrlPaths } from './getUrlPaths'

export const getCardDetails = (
  characters: string[],
  setDetails: Dispatch<SetStateAction<Details>>,
) => {
  characters.forEach(character => {
    const { id, resource } = getUrlPaths(character)
    axiosInstance
      .get(`/${resource}/${id}`)
      .then((res: { data: ResultsType[] }) => {
        setDetails(prev => ({
          ...prev,
          [resource]: uniqBy(
            [...prev[resource as keyof Details], res.data],
            'name',
          ),
        }))
      })
  })
}
