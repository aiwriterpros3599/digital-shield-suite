
import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  Image, 
  Search, 
  Settings, 
  User, 
  Menu, 
  X,
  BarChart3,
  Bell,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const { theme } = useTheme();
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, href: '/dashboard' },
    { id: 'humanizer', label: 'AI Humanizer', icon: FileText, href: '/humanizer' },
    { id: 'verification', label: 'Image Verification', icon: Image, href: '/verification' },
    { id: 'scanner', label: 'Content Scanner', icon: Search, href: '/scanner' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, href: '/analytics' },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: '/notifications' },
  ];

  const bottomItems = [
    { id: 'help', label: 'Help & Support', icon: HelpCircle, href: '/help' },
    { id: 'settings', label: 'Settings', icon: Settings, href: '/settings' },
    { id: 'profile', label: 'Profile', icon: User, href: '/profile' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 lg:static lg:block"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <img 
                src={theme === 'dark' 
                  ? "/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png" 
                  : "/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png"
                }
                alt="Brand Protection"
                className="h-8 w-auto"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
                  activeItem === item.id 
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" 
                    : "text-gray-700 dark:text-gray-300"
                )}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Bottom Items */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
            {bottomItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};
