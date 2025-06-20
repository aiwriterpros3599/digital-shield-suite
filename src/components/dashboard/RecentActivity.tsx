
import React from 'react';
import { FileText, Image, Search, Clock } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'humanizer',
      title: 'Content humanized successfully',
      description: 'Blog post about AI trends (2,847 characters)',
      time: '2 minutes ago',
      icon: FileText,
      color: 'text-blue-500'
    },
    {
      id: 2,
      type: 'verification',
      title: 'Image verification completed',
      description: 'Profile photo analyzed - 98% human-generated',
      time: '1 hour ago',
      icon: Image,
      color: 'text-purple-500'
    },
    {
      id: 3,
      type: 'scanner',
      title: 'Content theft scan finished',
      description: '5 potential matches found across 3 websites',
      time: '3 hours ago',
      icon: Search,
      color: 'text-green-500'
    },
    {
      id: 4,
      type: 'humanizer',
      title: 'Batch processing completed',
      description: '12 articles processed successfully',
      time: '1 day ago',
      icon: FileText,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
            <div className={`p-2 bg-gray-100 dark:bg-gray-700 rounded-lg ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {activity.description}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
