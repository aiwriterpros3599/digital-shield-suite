
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, TrendingUp, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/pages/Blog';

interface BlogSidebarProps {
  posts: BlogPost[];
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ posts }) => {
  const popularPosts = posts
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const recentPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  ).slice(0, 20);

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Get the latest brand protection insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input placeholder="Your email address" type="email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </CardContent>
      </Card>

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Popular Articles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {popularPosts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
              <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3" />
                {post.readTime} min
                <span className="mx-1">•</span>
                {post.views} views
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Articles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
              <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1 line-clamp-2">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Calendar className="h-3 w-3" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle>Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
