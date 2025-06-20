
import React, { useState, useEffect } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogCategories } from '@/components/blog/BlogCategories';
import { BlogPostGrid } from '@/components/blog/BlogPostGrid';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { SearchIcon, Calendar, User, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  readTime: number;
  views: number;
  likes: number;
  slug: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'All Posts', count: 0 },
    { id: 'ai-detection', name: 'AI Detection & Tools', count: 0 },
    { id: 'content-protection', name: 'Content Protection', count: 0 },
    { id: 'brand-security', name: 'Brand Security', count: 0 },
    { id: 'digital-marketing', name: 'Digital Marketing', count: 0 }
  ];

  // Mock data - in production, this would come from your API
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'How to Detect AI-Generated Content: A Complete Guide for 2024',
        excerpt: 'Learn the latest techniques and tools to identify AI-generated text and protect your brand from artificial content.',
        content: 'Full blog post content here...',
        author: {
          name: 'Sarah Johnson',
          avatar: '/placeholder-avatar.jpg',
          bio: 'AI Content Specialist'
        },
        category: 'ai-detection',
        tags: ['AI Detection', 'Content Verification', 'Brand Protection'],
        featuredImage: '/placeholder-blog-1.jpg',
        publishedAt: '2024-01-15',
        readTime: 8,
        views: 1247,
        likes: 89,
        slug: 'detect-ai-generated-content-guide-2024',
        seoTitle: 'How to Detect AI-Generated Content: Complete 2024 Guide',
        seoDescription: 'Comprehensive guide on detecting AI-generated content with latest tools and techniques. Protect your brand from artificial content.',
        keywords: ['AI detection', 'content verification', 'brand protection']
      },
      {
        id: '2',
        title: 'Image Deepfake Detection: Protecting Your Visual Brand',
        excerpt: 'Discover advanced methods to identify deepfakes and manipulated images that could harm your brand reputation.',
        content: 'Full blog post content here...',
        author: {
          name: 'Michael Chen',
          avatar: '/placeholder-avatar-2.jpg',
          bio: 'Digital Forensics Expert'
        },
        category: 'ai-detection',
        tags: ['Deepfakes', 'Image Verification', 'Visual Security'],
        featuredImage: '/placeholder-blog-2.jpg',
        publishedAt: '2024-01-12',
        readTime: 6,
        views: 892,
        likes: 67,
        slug: 'image-deepfake-detection-visual-brand-protection',
        seoTitle: 'Image Deepfake Detection: Protect Your Visual Brand Identity',
        seoDescription: 'Learn to detect deepfakes and manipulated images. Advanced methods for visual brand protection and security.',
        keywords: ['deepfake detection', 'image verification', 'visual security']
      },
      {
        id: '3',
        title: 'DMCA Takedown Process: Step-by-Step Brand Protection',
        excerpt: 'Master the DMCA takedown process to remove stolen content and protect your intellectual property online.',
        content: 'Full blog post content here...',
        author: {
          name: 'Emily Rodriguez',
          avatar: '/placeholder-avatar-3.jpg',
          bio: 'Legal Content Strategist'
        },
        category: 'content-protection',
        tags: ['DMCA', 'Copyright', 'Legal Protection'],
        featuredImage: '/placeholder-blog-3.jpg',
        publishedAt: '2024-01-10',
        readTime: 10,
        views: 1456,
        likes: 123,
        slug: 'dmca-takedown-process-brand-protection-guide',
        seoTitle: 'DMCA Takedown Process: Complete Brand Protection Guide',
        seoDescription: 'Step-by-step DMCA takedown guide. Protect your intellectual property and remove stolen content effectively.',
        keywords: ['DMCA takedown', 'copyright protection', 'intellectual property']
      }
    ];

    // Update category counts
    categories.forEach(category => {
      if (category.id === 'all') {
        category.count = mockPosts.length;
      } else {
        category.count = mockPosts.filter(post => post.category === category.id).length;
      }
    });

    setPosts(mockPosts);
    setFilteredPosts(mockPosts);
    setLoading(false);
  }, []);

  // Filter posts based on category and search
  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Brand Protection Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Stay ahead with the latest insights on AI detection, content protection, and brand security.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <BlogCategories 
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogPostGrid posts={filteredPosts} loading={loading} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar posts={posts} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
