
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  Share2, 
  Clock, 
  Target,
  Globe,
  Search,
  MousePointer,
  UserPlus
} from 'lucide-react';

const trafficData = [
  { month: 'Jan', visitors: 1200, pageViews: 2800, bounceRate: 45 },
  { month: 'Feb', visitors: 1500, pageViews: 3200, bounceRate: 42 },
  { month: 'Mar', visitors: 1800, pageViews: 4100, bounceRate: 38 },
  { month: 'Apr', visitors: 2200, pageViews: 5200, bounceRate: 35 },
  { month: 'May', visitors: 2600, pageViews: 6400, bounceRate: 32 },
  { month: 'Jun', visitors: 3100, pageViews: 7800, bounceRate: 30 }
];

const topPosts = [
  { title: 'How to Detect AI-Generated Content', views: 12500, conversions: 89 },
  { title: 'Image Deepfake Detection Guide', views: 8900, conversions: 67 },
  { title: 'DMCA Takedown Process', views: 7800, conversions: 123 },
  { title: 'Brand Protection Strategies', views: 6200, conversions: 45 },
  { title: 'Content Theft Prevention', views: 5800, conversions: 78 }
];

const keywordRankings = [
  { keyword: 'AI content detection', position: 3, volume: 2400, change: '+2' },
  { keyword: 'deepfake detection', position: 5, volume: 1800, change: '+1' },
  { keyword: 'brand protection', position: 7, volume: 3200, change: '0' },
  { keyword: 'content theft', position: 12, volume: 1200, change: '-3' },
  { keyword: 'DMCA takedown', position: 8, volume: 980, change: '+4' }
];

const socialEngagement = [
  { platform: 'Twitter', shares: 450, color: '#1DA1F2' },
  { platform: 'LinkedIn', shares: 320, color: '#0077B5' },
  { platform: 'Facebook', shares: 280, color: '#4267B2' },
  { platform: 'Pinterest', shares: 150, color: '#BD081C' }
];

export const BlogAnalyticsDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Blog Analytics Dashboard
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Export Report
          </Button>
          <Button size="sm">
            Schedule Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Visitors</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24.6K</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5% from last month
                </p>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Page Views</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">58.2K</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +18.3% from last month
                </p>
              </div>
              <Globe className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg. Session Duration</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">4:32</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.7% from last month
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Conversions</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">482</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +24.1% from last month
                </p>
              </div>
              <UserPlus className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Traffic Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="pageViews" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Social Media Shares */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Social Media Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={socialEngagement}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ platform, value }) => `${platform}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="shares"
                >
                  {socialEngagement.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Top Performing Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{post.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      <MousePointer className="h-3 w-3" />
                      {post.conversions} conversions
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline">
                    #{index + 1}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Keyword Rankings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Keyword Rankings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {keywordRankings.map((keyword, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{keyword.keyword}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {keyword.volume.toLocaleString()} monthly searches
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">#{keyword.position}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Position</p>
                  </div>
                  <Badge 
                    variant={keyword.change.startsWith('+') ? 'default' : keyword.change.startsWith('-') ? 'destructive' : 'secondary'}
                  >
                    {keyword.change}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
