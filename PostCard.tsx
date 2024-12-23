import React from 'react'
import { Share2, MoreHorizontal, MapPin, Calendar } from 'lucide-react'

interface PostCardProps {
  type: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  views: number
  image?: string
  location?: string
  date?: string
}

export function PostCard({ type, title, content, author, views, image, location, date }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      
      <div className="p-4">
        <div className="text-sm text-gray-600 mb-2">
          {type === 'Article' && '✍️ Article'}
          {type === 'Education' && '🔬 Education'}
          {type === 'Meetup' && '👥 Meetup'}
          {type === 'Job' && '💼 Job'}
        </div>

        <div className="flex justify-between items-start mb-3">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={20} />
          </button>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{content}</p>

        {(location || date) && (
          <div className="flex items-center gap-4 mb-4 text-gray-600">
            {date && (
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{date}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{location}</span>
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-gray-500">{views.toLocaleString()} views</p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <Share2 size={18} />
            Share
          </button>
        </div>
      </div>
    </div>
  )
}