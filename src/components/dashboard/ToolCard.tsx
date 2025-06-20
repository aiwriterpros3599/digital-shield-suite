
import React from 'react';
import { LucideIcon, ArrowRight, TrendingUp } from 'lucide-react';

interface ToolCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  stats: {
    total: number;
    thisMonth: number;
  };
  href: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  stats,
  href
}) => {
  return (
    <div className="group relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 bg-gradient-to-r ${color} rounded-lg shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {stats.total}
          </div>
          <div className="flex items-center text-sm text-green-600 dark:text-green-400">
            <TrendingUp className="h-3 w-3 mr-1" />
            +{stats.thisMonth} this month
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full border-2 border-white dark:border-gray-800"></div>
          ))}
          <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center">
            <span className="text-xs text-gray-600 dark:text-gray-400">+</span>
          </div>
        </div>
        <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group-hover:translate-x-1 transition-all">
          Launch Tool
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};
