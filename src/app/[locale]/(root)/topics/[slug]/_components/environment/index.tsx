'use client'

import { clientFetch } from '@/utils/http'
import React, { useEffect, useState } from 'react'

interface EnvironmentResponse {
  environment: string
}

const Environment = () => {
  const [environment, setEnvironment] = useState<string | null>(null)

  useEffect(() => {
    const fetchEnvironment = async () => {
      try {
        const data =
          await clientFetch.get<EnvironmentResponse>('/api/environment')
        if (!data) return

        setEnvironment(data.environment)
      } catch (error) {
        console.error('Error fetching environment:', error)
      }
    }

    fetchEnvironment()
  }, [])

  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl font-bold text-green-500">
        Environment Component
      </h2>
      {environment ? (
        <div className="flex items-center gap-2">
          <p>Current environment:</p>
          <div className="text-green-500 italic p-2 bg-gray-100 rounded-md w-fit">
            {environment}
          </div>
        </div>
      ) : (
        <p>Loading environment...</p>
      )}
    </div>
  )
}

export default Environment
