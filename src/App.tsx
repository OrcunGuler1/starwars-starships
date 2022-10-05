import useAxios from './hooks/useAxios'

function App() {
  useAxios({ endpoint: '/starships' })
  return <div></div>
}

export default App
