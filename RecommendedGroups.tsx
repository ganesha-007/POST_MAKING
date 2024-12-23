import React, { useState } from 'react'

const RECOMMENDED_GROUPS = [
  { id: 1, name: 'Leisure', image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4' },
  { id: 2, name: 'Activism', image: 'https://images.unsplash.com/photo-1591848478625-de43268e6fb8' },
  { id: 3, name: 'MBA', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40' },
  { id: 4, name: 'Philosophy', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765' }
]

export function RecommendedGroups() {
  const [followedGroups, setFollowedGroups] = useState<number[]>([])

  const toggleFollow = (groupId: number) => {
    setFollowedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    )
  }

  return (
    <div>
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        <span className="text-gray-700">👍</span> RECOMMENDED GROUPS
      </h3>
      <div className="space-y-4">
        {RECOMMENDED_GROUPS.map((group) => (
          <div key={group.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={group.image}
                alt={group.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-medium">{group.name}</span>
            </div>
            <button 
              onClick={() => toggleFollow(group.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors
                ${followedGroups.includes(group.id)
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'border border-gray-300 hover:bg-gray-50'
                }`}
            >
              {followedGroups.includes(group.id) ? 'Followed' : 'Follow'}
            </button>
          </div>
        ))}
      </div>
      <button className="text-blue-600 mt-4 hover:underline">See More...</button>
    </div>
  )
}