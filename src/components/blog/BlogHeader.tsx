
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { PenTool, Bell, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export const BlogHeader: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - 3x larger */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <img 
                src={theme === 'dark' 
                  ? "/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png" 
                  : "/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png"
                }
                alt="Brand Protection Toolkit"
                className="h-16 w-auto"
              />
            </a>
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
                      <NavigationMenuLink href="/tools/ai-text-humanizer" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">AI Text Humanizer</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Make AI content undetectable and human-like
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/tools/image-verification" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Image Verification Tool</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Detect AI-generated images and deepfakes
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/tools/content-theft-detection" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Content Theft Detector</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Monitor and protect your content from plagiarism
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
                      <NavigationMenuLink href="/dmca-takedown" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">DMCA Takedown Notice</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Generate legal DMCA notices for free
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

              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    <div className="grid grid-cols-1 gap-3">
                      <NavigationMenuLink href="/about" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">About Us</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Learn about our mission and team
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/contact" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Contact</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Get in touch with our team
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/careers" className="group grid h-auto w-full justify-start gap-1 rounded-md bg-background p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <div className="text-sm font-medium leading-none">Careers</div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Join our growing team
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
