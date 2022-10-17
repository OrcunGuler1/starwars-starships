import { useCallback, useEffect, useState } from 'react'
import { imageApi } from '../axios'
const useGetPersonImage = (id: string) => {
  const [image, setImage] = useState('')
  const getPersonImage = useCallback(() => {
    imageApi.get(`/id/${id}.json`).then(res => setImage(res.data.image))
  }, [id])

  useEffect(() => {
    getPersonImage()
    return () => setImage('')
  }, [getPersonImage])
  
  return { image }
}

export default useGetPersonImage
