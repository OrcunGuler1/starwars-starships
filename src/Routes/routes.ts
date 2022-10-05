import { AvailableResources } from '../constants'
import pages from '../pages'
export const resources = (
  Object.keys(AvailableResources) as Array<keyof typeof AvailableResources>
).map(r => r)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: pages.Home,
    exact: true,
  },
  ...resources.map(resource => ({
    path: `/${resource.toLowerCase()}`,
    name: resource,
    component: pages[resource],
    exact: true,
  })),
]