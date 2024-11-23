import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

interface ImageCardProps {
  imageUrl: string;
  likes: number;
  comments: number;
  username: string;
}

export function ImageCard({ imageUrl, likes, comments, username }: ImageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-md mx-auto mb-6 transition-transform hover:scale-[1.02]">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <span className="ml-3 font-medium text-gray-800">{username}</span>
        </div>
      </div>
      
      <div className="relative aspect-square">
        <img 
          src={imageUrl} 
          alt="Post content"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors">
            <Heart className="w-6 h-6" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 transition-colors">
            <MessageCircle className="w-6 h-6" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-green-500 transition-colors ml-auto">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}