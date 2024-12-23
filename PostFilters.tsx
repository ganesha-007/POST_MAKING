import React from 'react'
import { PenSquare } from 'lucide-react'

interface PostFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  postCount: number;
  onWritePost: () => void;
}

export function PostFilters({ activeFilter, onFilterChange, postCount, onWritePost }: PostFiltersProps) {
  const filters = ['All Posts', 'Article', 'Event', 'Education', 'Job']

  return (
    <div className="flex justify-between items-center border-b border-gray-200 mb-6">
      <div className="flex gap-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`pb-4 ${
              activeFilter === filter
                ? 'border-b-2 border-black font-medium'
                : 'text-gray-500'
            }`}
          >
            {filter === 'All Posts' ? `${filter}(${postCount})` : filter}
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={onWritePost}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2"
        >
          <PenSquare size={18} />
          Write a Post
        </button>
      </div>
    </div>
  )
}