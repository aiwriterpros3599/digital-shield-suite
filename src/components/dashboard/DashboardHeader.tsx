
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
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

          {/* Enhanced Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid grid-cols-1 gap-3">
                      <NavigationMenuLink href="/humanizer" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">AI Humanizer</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Convert AI-generated content to human-like text
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/verification" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Image Verification</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Detect deepfakes and manipulated images
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/scanner" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Content Scanner</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Scan for content theft and plagiarism
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    <div className="grid grid-cols-1 gap-3">
                      <NavigationMenuLink href="/blog-admin" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Blog Admin</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          AI-powered content creation tools
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/docs" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Documentation</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          API docs and integration guides
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/support" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Support</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Get help and contact support
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
