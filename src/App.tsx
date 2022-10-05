import useAxios from './hooks/useAxios'
import { resources, routes } from './Routes/routes'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header'
function App() {
  // const { data, setNextPage } = useAxios()
  return (
    <div>
      <Header>Available resources</Header>
      <div className="home-links">
        {resources.map(r => (
          <Link to={`/${r.toLowerCase()}`} key={r}>
            {r}
          </Link>
        ))}
      </div>
      <Routes>
        {routes.map(r => (
          <Route key={r.path} path={r.path} element={<r.component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
