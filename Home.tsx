import React, { useEffect, useState } from 'react'
import { GroupHeader } from '../components/GroupHeader'
import { PostFilters } from '../components/PostFilters'
import { PostCard } from '../components/PostCard'
import { LocationInput } from '../components/LocationInput'
import { RecommendedGroups } from '../components/RecommendedGroups'
import { WritePostModal } from '../components/WritePostModal'
import { SAMPLE_POSTS } from '../lib/samplePosts'

export function Home() {
  const [posts, setPosts] = useState(SAMPLE_POSTS)
  const [filter, setFilter] = useState('All Posts')
  const [isWritePostOpen, setIsWritePostOpen] = useState(false)

  const filteredPosts = filter === 'All Posts' 
    ? posts 
    : posts.filter(post => post.type === filter)

  const handleNewPost = (post: any) => {
    setPosts([post, ...posts])
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <GroupHeader />
      
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PostFilters
              activeFilter={filter}
              onFilterChange={setFilter}
              postCount={posts.length}
              onWritePost={() => setIsWritePostOpen(true)}
            />
            
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  type={post.type}
                  title={post.title}
                  content={post.content}
                  author={post.author}
                  views={post.views}
                  image={post.image}
                  location={post.location}
                  date={post.date}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <LocationInput />
            <RecommendedGroups />
          </div>
        </div>
      </div>

      <WritePostModal 
        isOpen={isWritePostOpen}
        onClose={() => setIsWritePostOpen(false)}
        onSubmit={handleNewPost}
      />
    </div>
  )
}