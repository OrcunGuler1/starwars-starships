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
    console.log(window.location.pathname)
    setHomeRoute(window.location.pathname === '/')
  }, [window.location.pathname])
  return (
    <div className='bg-gradient-to-t from-neutral-800 to-indigo-900'>
      <nav
        className={`bg-gray-800 flex ${
          !homeRoute ? 'justify-between' : 'justify-start'
        } py-8 px-8`}
      >
        <img
          src="/SWLogo.svg"
          alt="Star Wars Logo"
          className="w-24 h-15 cursor-pointer"
          aria-label="Star Wars Logo"
          onClick={() => navigate('/')}
        />
        {!homeRoute && <LiveSearch query={query} setQuery={setQuery} />}
      </nav>

      <section className="flex gap-5 flex-col items-center px-8 py-8 w-full text-gray-50">
        <Header className="font-semibold text-3xl">Available resources</Header>
        <div className="">
          {resources.map(r => (
            <Link
              to={`/${r.toLowerCase()}`}
              key={r}
              className="m-2 font-semibold text-2xl"
            >
              {r}
            </Link>
          ))}
        </div>
        <div>
          {homeRoute && (
            <LiveSearch
              query={query}
              setQuery={setQuery}
              className=" w-full "
            />
          )}
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default App
