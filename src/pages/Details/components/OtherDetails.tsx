import { Film, ResultsType } from '../../../types/types'

const OtherDetails = (details: Exclude<ResultsType, Film>) => {
  console.log(details)
  return <div>OtherDetails</div>
}

export default OtherDetails
