
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { BlogWritingTool } from '@/components/blog/ai-tools/BlogWritingTool';
import { BlogPostEditor } from '@/components/blog/BlogPostEditor';
import { BlogAnalyticsDashboard } from '@/components/blog/BlogAnalyticsDashboard';
import { ContentCalendar } from '@/components/blog/ContentCalendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  BarChart3, 
  Calendar, 
  Bot,
  FileText,
  Settings
} from 'lucide-react';

const BlogAdmin = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Blog Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              AI-powered content creation and blog management system
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Admin Panel
          </Badge>
        </div>

        <Tabs defaultValue="ai-tools" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="ai-tools" className="flex items-center gap-2">
              <Bot className="h-4 w-4" />
              AI Writing Tools
            </TabsTrigger>
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              Post Editor
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Content Calendar
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-tools">
            <BlogWritingTool />
          </TabsContent>

          <TabsContent value="editor">
            <BlogPostEditor />
          </TabsContent>

          <TabsContent value="analytics">
            <BlogAnalyticsDashboard />
          </TabsContent>

          <TabsContent value="calendar">
            <ContentCalendar />
          </TabsContent>

          <TabsContent value="settings">
            <div className="text-center py-12">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Blog Settings
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Configure blog settings, SEO options, and integrations.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default BlogAdmin;
