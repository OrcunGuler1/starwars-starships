export type ResponseType = {
  count: number
  next: string | null
  previous: string | null
  results: Array<ResultsType>
}

export type ResultsType = {
  [key: string]:
    | string
    | number
    | Array<{ [key: string]: string | number | [] } | string>
}
