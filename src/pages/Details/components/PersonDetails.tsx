import { useLocation } from 'react-router-dom'
import { getUrlPaths } from '../../../helpers/getUrlPaths'
import useGetPersonImage from '../../../hooks/useGetPersonImage'
import { Person } from '../../../types/types'

const PersonDetails = (person: Person) => {
  const { id } = getUrlPaths(person.url)
  const { image } = useGetPersonImage(id)
  console.log({ person, id, image })
  return <></>
}

export default PersonDetails
