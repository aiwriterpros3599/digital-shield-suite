
import React from 'react';
import { Shield, FileText, Image, Search, Users, TrendingUp, Zap } from 'lucide-react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { ToolCard } from '../components/dashboard/ToolCard';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';

const Index = () => {
  const tools = [
    {
      id: 'humanizer',
      title: 'AI Content Humanizer',
      description: 'Transform AI-generated text to bypass detection tools and sound naturally human-written.',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      stats: { total: 89, thisMonth: 23 },
      href: '/humanizer'
    },
    {
      id: 'verification',
      title: 'AI Image Verification',
      description: 'Detect AI-generated images and deepfakes using forensic-grade analysis.',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
      stats: { total: 45, thisMonth: 12 },
      href: '/verification'
    },
    {
      id: 'scanner',
      title: 'Content Theft Scanner',
      description: 'Find stolen content across the web to protect your intellectual property.',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      stats: { total: 67, thisMonth: 18 },
      href: '/scanner'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '2,847', trend: '+12%' },
    { icon: TrendingUp, label: 'Success Rate', value: '94.2%', trend: '+2.1%' },
    { icon: Zap, label: 'Processing Speed', value: '1.2s', trend: '-0.3s' }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Brand Protection Toolkit
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Comprehensive 3-in-1 suite to protect your digital assets and ensure content authenticity.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentActivity />
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <FileText className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">Humanize New Content</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Image className="h-5 w-5 text-purple-500" />
                <span className="text-gray-700 dark:text-gray-300">Verify Image Authenticity</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Search className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">Scan for Content Theft</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
