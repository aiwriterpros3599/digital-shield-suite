
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, dateFns } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  Edit, 
  Eye, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog-post' | 'social-post' | 'newsletter';
  status: 'draft' | 'review' | 'scheduled' | 'published';
  scheduledDate: Date;
  author: string;
  category?: string;
}

const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'AI Detection Best Practices 2024',
    type: 'blog-post',
    status: 'scheduled',
    scheduledDate: new Date(2024, 5, 25),
    author: 'Sarah Johnson',
    category: 'AI Detection & Tools'
  },
  {
    id: '2',
    title: 'Weekly Brand Protection Newsletter',
    type: 'newsletter',
    status: 'draft',
    scheduledDate: new Date(2024, 5, 26),
    author: 'Michael Chen'
  },
  {
    id: '3',
    title: 'Content Theft Prevention Guide',
    type: 'blog-post',
    status: 'review',
    scheduledDate: new Date(2024, 5, 28),
    author: 'Emily Rodriguez',
    category: 'Content Protection'
  },
  {
    id: '4',
    title: 'Social Media Brand Protection Tips',
    type: 'social-post',
    status: 'scheduled',
    scheduledDate: new Date(2024, 5, 30),
    author: 'Sarah Johnson'
  }
];

export const ContentCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'list'>('month');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const getContentForDate = (date: Date) => {
    return mockContent.filter(item => 
      item.scheduledDate.toDateString() === date.toDateString()
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-200 text-gray-800';
      case 'review': return 'bg-yellow-200 text-yellow-800';
      case 'scheduled': return 'bg-blue-200 text-blue-800';
      case 'published': return 'bg-green-200 text-green-800';
      default: return 'bg-gray-200 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog-post': return '📝';
      case 'social-post': return '📱';
      case 'newsletter': return '📧';
      default: return '📄';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Content Calendar
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Export Calendar
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Schedule Content
          </Button>
        </div>
      </div>

      {/* View Controls */}
      <div className="flex items-center gap-4">
        <div className="flex border rounded-lg p-1">
          {['month', 'week', 'list'].map((mode) => (
            <Button
              key={mode}
              variant={viewMode === mode ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode(mode as any)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </Button>
          ))}
        </div>
        
        <div className="flex gap-2">
          {['all', 'draft', 'review', 'scheduled', 'published'].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-3">
          {viewMode === 'month' && (
            <Card>
              <CardHeader>
                <CardTitle>Monthly View</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="w-full"
                />
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Content for {selectedDate?.toLocaleDateString()}</h4>
                  {selectedDate && getContentForDate(selectedDate).length > 0 ? (
                    <div className="space-y-2">
                      {getContentForDate(selectedDate).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                          <span className="text-lg">{getTypeIcon(item.type)}</span>
                          <div className="flex-1">
                            <h5 className="font-medium">{item.title}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">by {item.author}</p>
                          </div>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">No content scheduled for this date</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {viewMode === 'list' && (
            <Card>
              <CardHeader>
                <CardTitle>Content Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContent
                    .filter(item => filterStatus === 'all' || item.status === filterStatus)
                    .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime())
                    .map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl">{getTypeIcon(item.type)}</span>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
                              <span>by {item.author}</span>
                              <span>•</span>
                              <span>{item.scheduledDate.toLocaleDateString()}</span>
                              {item.category && (
                                <>
                                  <span>•</span>
                                  <span>{item.category}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Published</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">8</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Scheduled</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">5</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">In Review</span>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">3</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Drafts</span>
                <div className="flex items-center gap-2">
                  <Edit className="h-4 w-4 text-gray-500" />
                  <span className="font-medium">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Newsletter due today</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Weekly Brand Protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Review due tomorrow</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Content Theft Guide</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>AI Detection Guide</span>
                  <span className="text-green-600">↑ 12.5K views</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Deepfake Detection</span>
                  <span className="text-green-600">↑ 8.9K views</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>DMCA Process</span>
                  <span className="text-green-600">↑ 7.8K views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
