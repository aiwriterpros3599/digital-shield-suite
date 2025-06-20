
import React from 'react';
import { Shield, Menu, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/hooks/useTheme';

export const DashboardHeader = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - 3x larger */}
          <div className="flex items-center gap-4">
            <img 
              src={theme === 'dark' 
                ? "/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png" 
                : "/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png"
              }
              alt="Brand Protection Toolkit"
              className="h-12 w-auto" // Increased from h-4 to h-12 (3x larger)
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" asChild>
              <a href="/dashboard">Dashboard</a>
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

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
