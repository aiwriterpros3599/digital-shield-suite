
import React, { useState, useEffect } from 'react';
import { Shield, Play, CheckCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const HeroSection = () => {
  const { theme } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Detect AI Content',
    'Verify Image Authenticity', 
    'Stop Content Theft'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting 
            ? current.substring(0, currentText.length - 1)
            : current.substring(0, currentText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={theme === 'dark' ? '/lovable-uploads/5b98e63e-4ee7-4638-8982-319d0bc3d2fb.png' : '/lovable-uploads/823bc5c7-570c-43bc-a6bd-30962f95b60a.png'}
                alt="Brand Protection Toolkit"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Login
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Shield className="h-4 w-4" />
            Trusted by 10,000+ creators
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Protect Your Brand with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI-Powered
            </span>{' '}
            Detection Tools
          </h1>

          {/* Typing subheadline */}
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block min-w-0">
              {currentText}
              <span className="border-r-2 border-blue-600 animate-pulse ml-1"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Professional 3-in-1 SaaS suite that helps businesses and content creators protect their digital assets with forensic-grade analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2">
              <Play className="h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              14-Day Free Trial
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Cancel Anytime
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-sm">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};
