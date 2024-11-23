import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const IMAGES = [
  'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
  'https://images.unsplash.com/photo-1682687221038-404670f09ef1',
  'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b',
  'https://images.unsplash.com/photo-1682687220067-469c0f680bac',
  'https://images.unsplash.com/photo-1682687220923-c58b9a4592ae',
  'https://images.unsplash.com/photo-1682687221175-947d2aedb651',
  'https://images.unsplash.com/photo-1682687220509-61b8a906ca19'
];

const USERNAMES = [
  'photo_lover',
  'creative_shots',
  'moment_catcher',
  'visual_artist',
  'light_chaser',
  'pixel_perfect',
  'frame_master',
  'color_guru'
];

export interface Post {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  username: string;
}

export function useInfiniteScroll() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const generatePost = (timestamp: number, index: number): Post => ({
    id: `post-${timestamp}-${index}`,
    imageUrl: `${IMAGES[index % IMAGES.length]}?w=800&auto=format&fit=crop`,
    likes: Math.floor(Math.random() * 1000) + 100,
    comments: Math.floor(Math.random() * 100) + 10,
    username: USERNAMES[index % USERNAMES.length],
  });

  const loadMorePosts = () => {
    setLoading(true);
    const timestamp = Date.now();
    setTimeout(() => {
      const newPosts = Array.from({ length: 4 }, (_, i) => 
        generatePost(timestamp, posts.length + i)
      );
      setPosts(prev => [...prev, ...newPosts]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (posts.length === 0) {
      loadMorePosts();
    }
  }, []);

  useEffect(() => {
    if (inView && !loading) {
      loadMorePosts();
    }
  }, [inView]);

  return { posts, loading, loadingRef: ref };
}