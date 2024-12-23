import React, { useState } from 'react'
import { X, Image, MapPin, Calendar } from 'lucide-react'

interface WritePostModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (post: any) => void
}

export function WritePostModal({ isOpen, onClose, onSubmit }: WritePostModalProps) {
  const [postData, setPostData] = useState({
    type: 'Article',
    title: '',
    content: '',
    image: '',
    location: '',
    date: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...postData,
      id: Date.now(),
      author: {
        name: 'Current User',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
      },
      views: 0
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Create a Post</h2>
          <button onClick={onClose}>
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <select
              value={postData.type}
              onChange={(e) => setPostData({ ...postData, type: e.target.value })}
              className="w-full p-2 border rounded-lg"
            >
              <option value="Article">Article</option>
              <option value="Education">Education</option>
              <option value="Meetup">Meetup</option>
              <option value="Job">Job</option>
            </select>

            <input
              type="text"
              placeholder="Title"
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />

            <textarea
              placeholder="Write your post..."
              value={postData.content}
              onChange={(e) => setPostData({ ...postData, content: e.target.value })}
              className="w-full p-2 border rounded-lg h-32"
              required
            />

            <div className="flex gap-4">
              <input
                type="url"
                placeholder="Image URL"
                value={postData.image}
                onChange={(e) => setPostData({ ...postData, image: e.target.value })}
                className="flex-1 p-2 border rounded-lg"
              />
              <button type="button" className="p-2 border rounded-lg text-gray-500">
                <Image size={20} />
              </button>
            </div>

            {postData.type === 'Meetup' && (
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <MapPin size={20} className="absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location"
                    value={postData.location}
                    onChange={(e) => setPostData({ ...postData, location: e.target.value })}
                    className="w-full p-2 pl-8 border rounded-lg"
                  />
                </div>
                <div className="flex-1 relative">
                  <Calendar size={20} className="absolute left-2 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Date"
                    value={postData.date}
                    onChange={(e) => setPostData({ ...postData, date: e.target.value })}
                    className="w-full p-2 pl-8 border rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}