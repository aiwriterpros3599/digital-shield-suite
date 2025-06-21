
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Clock, Edit, Plus } from 'lucide-react';

export const ContentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const scheduledPosts = [
    {
      id: 1,
      title: "How to Detect AI-Generated Content in 2024",
      date: "2024-01-15",
      time: "09:00 AM",
      status: "scheduled",
      category: "AI Detection"
    },
    {
      id: 2,
      title: "Protecting Your Brand from Content Theft",
      date: "2024-01-18",
      time: "02:00 PM",
      status: "draft",
      category: "Brand Security"
    },
    {
      id: 3,
      title: "SEO Best Practices for Content Creators",
      date: "2024-01-20",
      time: "11:00 AM",
      status: "scheduled",
      category: "Digital Marketing"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Calendar</h2>
          <p className="text-gray-600 dark:text-gray-400">Plan and schedule your blog content</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Calendar View
            </CardTitle>
            <CardDescription>Select a date to view scheduled content</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
            <CardDescription>Upcoming content releases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{post.title}</h4>
                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.time}
                      </span>
                    </div>
                    <Badge variant={post.status === 'scheduled' ? 'default' : 'secondary'} className="mt-2">
                      {post.status}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
