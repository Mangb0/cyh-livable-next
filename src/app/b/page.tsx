import { Data } from '@/types/types'
import { getTimeoutData } from '@/utils/getTimeoutData'

export default async function PageB() {
  const data = (await getTimeoutData()) as Data
  const { creaters, platformFeePercent, uptimePercent, paidCreaters } = data

  return (
    <div className="flex flex-grow justify-center items-center w-full h-40 font-bold">
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{creaters}+</p>
        <p className="text-sm text-gray-500">Creators on the platform</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{platformFeePercent}%</p>
        <p className="text-sm text-gray-500">Flat pllatform fee</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{uptimePercent}%</p>
        <p className="text-sm text-gray-500">Uptime guarantee</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl font-bold">${paidCreaters}</p>
        <p className="text-sm text-gray-500">Paid out to creators</p>
      </div>
    </div>
  )
}
