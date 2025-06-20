
import React from 'react';
import { BlogPostCard } from './BlogPostCard';
import { Skeleton } from '@/components/ui/skeleton';
import type { BlogPost } from '@/pages/Blog';

interface BlogPostGridProps {
  posts: BlogPost[];
  loading: boolean;
}

export const BlogPostGrid: React.FC<BlogPostGridProps> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-20 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No articles found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your search or category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <BlogPostCard 
          key={post.id} 
          post={post} 
          featured={index === 0}
        />
      ))}
    </div>
  );
};
