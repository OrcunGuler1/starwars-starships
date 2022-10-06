import { resources, routes } from './Routes/routes'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './Components/Header/Header'
import { Suspense, useState } from 'react'
function App() {
  return (
    <>
      <nav className="main-nav">
        <Header>Available resources</Header>
        <div className="home-links">
          {resources.map(r => (
            <Link to={`/${r.toLowerCase()}`} key={r} className="home-link">
              {r}
            </Link>
          ))}
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(r => (
            <Route key={r.path} path={r.path} element={<r.component />} />
          ))}
        </Routes>
      </Suspense>
    </>
  )
}

export default App
