import { uniqBy } from 'lodash'
import { Dispatch, SetStateAction } from 'react'
import axiosInstance from '../axios'
import { ResultsType } from '../types/types'
import { getUrlPaths } from './getUrlPaths'

export const getCardDetails = (
  characters: string[],
  setDetails: Dispatch<SetStateAction<any>>,
) => {
  characters.forEach(character => {
    const { id, resource } = getUrlPaths(character)
    axiosInstance
      .get(`/${resource}/${id}`)
      .then((res: { data: ResultsType[] }) => {
        setDetails((prev: any) => ({
          ...prev,
          [resource]: uniqBy([...prev[resource], res.data], 'name'),
        }))
      })
  })
}
