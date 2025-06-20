
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = [
    'Detect AI Content',
    'Verify Image Authenticity', 
    'Stop Content Theft'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      {/* Header with larger logo */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={theme === 'dark' 
                  ? "/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png" 
                  : "/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png"
                }
                alt="Brand Protection Toolkit"
                className="h-12 w-auto" // Made 3x larger
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <a href="/dashboard">Dashboard</a>
              </Button>
              <Button>
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Protect Your Brand with
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            AI-Powered Detection
          </span>
        </h1>
        
        {/* Animated Subheadline */}
        <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 flex items-center justify-center">
          <span className="border-r-2 border-blue-600 pr-2 animate-pulse">
            {currentText}
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Complete 3-in-1 suite to humanize AI content, verify image authenticity, and protect against content theft. 
          Trusted by 10,000+ creators worldwide.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Trusted Users</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">99.2%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <Shield className="w-8 h-8 text-purple-600" />
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">1M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Content Protected</div>
            </div>
          </div>
        </div>
        
        {/* Security Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16 opacity-60">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
