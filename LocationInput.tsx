import React, { useState } from 'react'
import { MapPin, X } from 'lucide-react'

export function LocationInput() {
  const [location, setLocation] = useState('')

  return (
    <div className="mb-6">
      <div className="relative">
        <div className="flex items-center border rounded-lg p-3 bg-white">
          <MapPin size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 outline-none"
          />
          {location && (
            <button onClick={() => setLocation('')}>
              <X size={20} className="text-gray-400" />
            </button>
          )}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        Your location will help us serve better and extend a personalised experience.
      </p>
    </div>
  )
}