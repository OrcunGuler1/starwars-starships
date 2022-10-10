import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Header from './components/Header/Header'
import LiveSearch from './components/LiveSearch/LiveSearch'
import { resources } from './routes/routes'
function App() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const [homeRoute, setHomeRoute] = useState(true)
  useEffect(() => {
    setHomeRoute(window.location.pathname === '/')
    setQuery('')
  }, [window.location.pathname])
  return (
    <div className="bg-gradient-to-t from-neutral-800 to-indigo-900">
      <nav
        className={`flex bg-gray-800 ${
          !homeRoute ? 'justify-between' : 'justify-start'
        } py-8 px-8`}
      >
        <img
          src="/SWLogo.svg"
          alt="Star Wars Logo"
          className="h-15 w-24 cursor-pointer"
          aria-label="Star Wars Logo"
          onClick={() => navigate('/')}
        />
        {!homeRoute && <LiveSearch query={query} setQuery={setQuery} />}
      </nav>

      <section className="flex w-full flex-col items-center gap-5 px-8 py-8 text-gray-50">
        <Header className="text-3xl font-semibold">Available resources</Header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6">
          {resources.map(r => (
            <Link
              to={`/${r.toLowerCase()}`}
              key={r}
              className="m-2 text-2xl font-semibold"
            >
              {r}
            </Link>
          ))}
        </div>
        <div>
          {homeRoute && <LiveSearch query={query} setQuery={setQuery} />}
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default App
