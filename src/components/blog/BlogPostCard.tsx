
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Eye, Heart, User } from 'lucide-react';
import type { BlogPost } from '@/pages/Blog';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className={`${featured ? 'md:flex' : ''}`}>
        {/* Featured Image */}
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2' : ''}`}>
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-t-lg flex items-center justify-center">
            <span className="text-4xl">📊</span>
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">
              {post.category.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className={`${featured ? 'md:w-1/2' : ''}`}>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} min read
              </div>
            </div>
            
            <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
              {post.title}
            </h3>
          </CardHeader>

          <CardContent className="pt-0">
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author and Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {post.author.bio}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {post.likes}
                </div>
              </div>
            </div>

            <Button className="w-full mt-4" variant="outline">
              Read Article
            </Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
