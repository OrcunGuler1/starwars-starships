import { useStore } from 'react-redux'
import { useAppDispatch, RootState } from '../../store'
import { useEffect, useState } from 'react'
const Films = () => {
  const store = useStore<RootState>()
  const dispatch = useAppDispatch()
  const { films } = store.getState()
  const [page, setPage] = useState(1)
  // get films and dispatch to store
  
  useEffect(() => {
    dispatch({ type: 'films/getFilms', payload: { films: [] } })
  }, [dispatch])

  return <div>Films</div>
}

export default Films
