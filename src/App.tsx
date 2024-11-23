import React from 'react';
import { ImageCard } from './components/ImageCard';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { Loader2 } from 'lucide-react';

function App() {
  const { posts, loading, loadingRef } = useInfiniteScroll();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Infinite Image Feed
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {posts.map((post) => (
          <ImageCard
            key={post.id}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
            username={post.username}
          />
        ))}
        
        <div ref={loadingRef} className="flex justify-center py-4">
          {loading && (
            <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;