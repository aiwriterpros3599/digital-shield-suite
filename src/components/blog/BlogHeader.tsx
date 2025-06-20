
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { PenTool, Bell } from 'lucide-react';

export const BlogHeader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={theme === 'dark' 
                  ? "/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png" 
                  : "/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png"
                }
                alt="Brand Protection Toolkit"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" asChild>
              <a href="/dashboard">Dashboard</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/blog">Blog</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/humanizer">AI Humanizer</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/verification">Image Verification</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/scanner">Content Scanner</a>
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
            <Button size="sm">
              <PenTool className="h-4 w-4 mr-2" />
              Write
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
