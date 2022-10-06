import { useLoaderData } from 'react-router-dom'

const Details = () => {
  const data = useLoaderData()
  console.log(data)

  return <div>Details</div>
}

export default Details
