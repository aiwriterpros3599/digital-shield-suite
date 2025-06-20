
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Save, 
  Eye, 
  Share2, 
  Calendar, 
  Tag, 
  Image, 
  BarChart3,
  CheckCircle,
  AlertCircle,
  Globe,
  Users
} from 'lucide-react';

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  status: 'draft' | 'published' | 'scheduled';
  publishedAt?: string;
  scheduledFor?: string;
  author: string;
  readTime: number;
  socialSharing: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
}

export const BlogPostEditor: React.FC = () => {
  const [post, setPost] = useState<BlogPost>({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [],
    seoTitle: '',
    seoDescription: '',
    keywords: [],
    status: 'draft',
    author: 'Admin',
    readTime: 0,
    socialSharing: {
      twitter: '',
      linkedin: '',
      facebook: ''
    }
  });

  const [seoScore, setSeoScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [newTag, setNewTag] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  const categories = [
    'AI Detection & Tools',
    'Content Protection', 
    'Brand Security',
    'Digital Marketing'
  ];

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
      seoTitle: title.length > 60 ? title.substring(0, 60) : title
    }));
  };

  const handleContentChange = (content: string) => {
    setPost(prev => ({
      ...prev,
      content,
      readTime: calculateReadTime(content)
    }));
    
    // Calculate SEO score based on content
    calculateSeoScore(content);
  };

  const calculateSeoScore = (content: string) => {
    let score = 0;
    const wordCount = content.split(/\s+/).length;
    
    // Word count (ideal: 1500-3000 words)
    if (wordCount >= 1500 && wordCount <= 3000) score += 25;
    else if (wordCount >= 1000) score += 15;
    
    // Headers (H2, H3 structure)
    const headers = content.match(/#{2,3}\s/g);
    if (headers && headers.length >= 3) score += 20;
    
    // Keywords in content
    if (post.keywords.length > 0) {
      const keywordDensity = post.keywords.some(keyword => 
        content.toLowerCase().includes(keyword.toLowerCase())
      );
      if (keywordDensity) score += 25;
    }
    
    // Meta description
    if (post.seoDescription.length >= 120 && post.seoDescription.length <= 160) score += 15;
    
    // Title optimization
    if (post.seoTitle.length >= 30 && post.seoTitle.length <= 60) score += 15;
    
    setSeoScore(score);
  };

  const addTag = () => {
    if (newTag && !post.tags.includes(newTag)) {
      setPost(prev => ({
        ...prev,
        tags: [...prev.tags, newTag]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addKeyword = () => {
    if (newKeyword && !post.keywords.includes(newKeyword)) {
      setPost(prev => ({
        ...prev,
        keywords: [...prev.keywords, newKeyword]
      }));
      setNewKeyword('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setPost(prev => ({
      ...prev,
      keywords: prev.keywords.filter(keyword => keyword !== keywordToRemove)
    }));
  };

  const handleSave = (status: 'draft' | 'published' | 'scheduled') => {
    setPost(prev => ({ ...prev, status }));
    // Save logic here
    console.log('Saving post:', { ...post, status });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Blog Post Editor
        </h1>
        <div className="flex items-center gap-2">
          <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
            {post.status}
          </Badge>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Article Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={post.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="Enter article title..."
                  className="text-lg font-medium"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Slug: {post.slug || 'auto-generated'}
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={post.excerpt}
                  onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief description of the article..."
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={post.content}
                  onChange={(e) => handleContentChange(e.target.value)}
                  placeholder="Write your article content here... Use Markdown formatting."
                  className="min-h-[400px] font-mono"
                />
                <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                  <span>{post.content.split(/\s+/).length} words</span>
                  <span>{post.readTime} min read</span>
                  <span>SEO Score: {seoScore}/100</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline">
                  <Image className="h-4 w-4 mr-2" />
                  Add Featured Image
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Generate Social Posts
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="seo" className="space-y-4">
            <TabsList>
              <TabsTrigger value="seo">SEO Settings</TabsTrigger>
              <TabsTrigger value="social">Social Sharing</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="seo">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    SEO Optimization
                    <Badge variant={seoScore >= 80 ? 'default' : seoScore >= 60 ? 'secondary' : 'destructive'}>
                      {seoScore}/100
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="seoTitle">SEO Title</Label>
                    <Input
                      id="seoTitle"
                      value={post.seoTitle}
                      onChange={(e) => setPost(prev => ({ ...prev, seoTitle: e.target.value }))}
                      placeholder="SEO optimized title..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.seoTitle.length}/60 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="seoDescription">Meta Description</Label>
                    <Textarea
                      id="seoDescription"
                      value={post.seoDescription}
                      onChange={(e) => setPost(prev => ({ ...prev, seoDescription: e.target.value }))}
                      placeholder="Brief description for search engines..."
                      rows={3}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.seoDescription.length}/160 characters
                    </p>
                  </div>

                  <div>
                    <Label>Keywords</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        value={newKeyword}
                        onChange={(e) => setNewKeyword(e.target.value)}
                        placeholder="Add keyword..."
                        onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
                      />
                      <Button onClick={addKeyword} size="sm">Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeKeyword(keyword)}>
                          {keyword} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Social Media Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="twitterShare">Twitter Post</Label>
                    <Textarea
                      id="twitterShare"
                      value={post.socialSharing.twitter}
                      onChange={(e) => setPost(prev => ({
                        ...prev,
                        socialSharing: { ...prev.socialSharing, twitter: e.target.value }
                      }))}
                      placeholder="Custom Twitter post..."
                      rows={3}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {post.socialSharing.twitter.length}/280 characters
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="linkedinShare">LinkedIn Post</Label>
                    <Textarea
                      id="linkedinShare"
                      value={post.socialSharing.linkedin}
                      onChange={(e) => setPost(prev => ({
                        ...prev,
                        socialSharing: { ...prev.socialSharing, linkedin: e.target.value }
                      }))}
                      placeholder="Professional LinkedIn post..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="facebookShare">Facebook Post</Label>
                    <Textarea
                      id="facebookShare"
                      value={post.socialSharing.facebook}
                      onChange={(e) => setPost(prev => ({
                        ...prev,
                        socialSharing: { ...prev.socialSharing, facebook: e.target.value }
                      }))}
                      placeholder="Engaging Facebook post..."
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Content Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-sm text-gray-600">Readability Score</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{seoScore}%</div>
                      <div className="text-sm text-gray-600">SEO Score</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">12%</div>
                      <div className="text-sm text-gray-600">AI Detection</div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{post.readTime} min</div>
                      <div className="text-sm text-gray-600">Read Time</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Keyword density optimal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Proper heading structure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Consider adding more internal links</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Publish Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select value={post.category} onValueChange={(value) => setPost(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    placeholder="Add tag..."
                    onKeyPress={(e) => e.key === 'Enter' && addTag()}
                  />
                  <Button onClick={addTag} size="sm">
                    <Tag className="h-3 w-3" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer" onClick={() => removeTag(tag)}>
                      {tag} ×
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="scheduled" />
                <Label htmlFor="scheduled">Schedule for later</Label>
              </div>

              <div className="space-y-2">
                <Button onClick={() => handleSave('draft')} variant="outline" className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button onClick={() => handleSave('published')} className="w-full">
                  Publish Now
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Author Info
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Content Manager</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
