import React from 'react'
import { Link } from 'react-router-dom'
import { Search, LogOut } from 'lucide-react'
import { supabase } from '../lib/supabase'

export function Header() {
  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-green-600 flex items-center gap-2">
          ATG.WORLD
        </Link>
        
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>
    </header>
  )
}