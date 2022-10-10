export const getUrlPaths = (url: string) => {
  const params = new URL(url || '').pathname.split('/')
  const id = params[params.length - 2]
  const resource = params[params.length - 3]

  return { id, resource }
}
