import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import axiosInstance from '../axios'
import { AvailableResources } from '../constants'
import pages from '../pages'
import Details from '../pages/Details/Details'
import { LoaderFunctionArgs } from 'react-router-dom'
export const resources = Object.keys(AvailableResources) as Array<
  keyof typeof AvailableResources
>

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...resources.map(resource => {
        const Elem = pages[resource]
        return {
          path: `${resource.toLowerCase()}`,
          name: resource,
          loader: ({ request }: LoaderFunctionArgs) =>
            axiosInstance
              .get(new URL(request.url).pathname)
              .then(res => res.data)
              .catch(err => err),

          element: <Elem />,
        }
      }),
      ...resources.map(resource => {
        return {
          path: `${resource.toLowerCase()}/:id`,
          name: resource,
          loader: ({ request }: LoaderFunctionArgs) =>
            axiosInstance
              .get(new URL(request.url).pathname)
              .then(res => res.data),
          element: <Details />,
        }
      }),
    ],
  },
])
