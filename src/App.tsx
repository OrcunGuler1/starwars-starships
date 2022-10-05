import useAxios from './hooks/useAxios'
import { resources, routes } from './Routes/routes'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  const { data, setNextPage } = useAxios({ endpoint: '/starships' })
  return (
    <div>
      <h1>Available resources</h1>
      {resources.map(r => (
        <Link to={`/${r.toLowerCase()}`} key={r}>
          {r}
        </Link>
      ))}
      <Routes>
        {routes.map(r => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
