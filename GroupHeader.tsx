import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function GroupHeader() {
  const [isJoined, setIsJoined] = useState(true)

  const toggleJoin = () => {
    setIsJoined(!isJoined)
  }

  return (
    <div className="relative h-[300px] text-white">
      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
        alt="Computer Engineering"
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Link to="/" className="text-white">
          <ArrowLeft size={24} />
        </Link>
      </div>

      <div className="absolute right-4 top-4">
        <button 
          onClick={toggleJoin}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isJoined 
              ? 'bg-black/20 text-white border border-white/20 hover:bg-black/30'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isJoined ? 'Leave Group' : 'Join Group'}
        </button>
      </div>

      <div className="absolute bottom-8 left-8">
        <h1 className="text-4xl font-bold mb-2">Computer Engineering</h1>
        <p className="text-lg text-white/90">142,765 Computer Engineers follow this</p>
      </div>
    </div>
  )
}