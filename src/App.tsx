import { resources } from './routes/routes'
import { Link, Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { Suspense, useState } from 'react'
import LiveSearch from './components/LiveSearch/LiveSearch'
function App() {
  const [query, setQuery] = useState('')
  return (
    <>
      <nav className="bg-black flex justify-between py-8 px-8">
        <img src="SWLogo.svg" alt="Star Wars Logo" className="w-24" />
        <LiveSearch query={query} setQuery={setQuery} />
      </nav>
      <div className="flex justify-between px-8 py-8 ">
        <Header className="font-semibold text-2xl">Available resources</Header>
        <div className="">
          {resources.map(r => (
            <Link
              to={`/${r.toLowerCase()}`}
              key={r}
              className="m-2 font-semibold text-xl"
            >
              {r}
            </Link>
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App
