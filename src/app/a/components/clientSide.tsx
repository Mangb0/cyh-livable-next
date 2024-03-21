'use client'

import { useEffect, useState } from 'react'

interface Data {
  creaters: number
  platformFeePercent: number
  uptimePercent: number
  paidCreaters: string
}

export default function ClientSide() {
  const [data, setData] = useState<Data>({
    creaters: 0,
    platformFeePercent: 0,
    uptimePercent: 0,
    paidCreaters: '',
  })

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="flex flex-grow justify-center items-center w-full h-40 font-bold">
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{data.creaters}+</p>
        <p className="text-sm text-gray-500">Creators on the platform</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{data.platformFeePercent}%</p>
        <p className="text-sm text-gray-500">Flat pllatform fee</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl">{data.uptimePercent}%</p>
        <p className="text-sm text-gray-500">Uptime guarantee</p>
      </div>
      <div className="flex flex-col flex-1 items-center">
        <p className="text-2xl font-bold">${data.paidCreaters}</p>
        <p className="text-sm text-gray-500">Paid out to creators</p>
      </div>
    </div>
  )
}
