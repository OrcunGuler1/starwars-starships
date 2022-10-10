import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const err = useRouteError()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-white gap-8">
      <h2 className=' font-semibold text-xl'>Oops! Something went wrong! </h2>
      <p>Details: {(err as any).message}</p>
      <button onClick={() => navigate('/')}>Go back to Home</button>
    </div>
  )
}

export default Error
