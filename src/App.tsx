import useAxios from './hooks/useAxios'

function App() {
  const { data } = useAxios({ endpoint: '/starships', page: 3 })
  console.log(data)
  return (
    <div>
      <h1>Star Wars</h1>
      <ul>
        {data?.results.map((starship: any) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
