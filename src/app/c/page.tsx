'use client'

import Title from '@/components/Title'
import { Data } from '@/types/types'
import { useEffect, useState } from 'react'

export default function PageC() {
  const [data, setData] = useState<Data>({
    creaters: 0,
    platformFeePercent: 0,
    uptimePercent: 0,
    paidCreaters: '',
  })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello', {
        headers: {
          Accept: 'application/json',
          method: 'GET',
        },
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="flex flex-col">
      <Title />
      {!isLoading ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
