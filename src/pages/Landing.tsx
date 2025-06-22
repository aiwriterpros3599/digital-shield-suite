
import React, { useState, useEffect } from 'react';
import { Shield, Play, CheckCircle, Star, Download, ArrowRight } from 'lucide-react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { LogoSection } from '@/components/landing/LogoSection';
import { AdvancedFeaturesSection } from '@/components/landing/AdvancedFeaturesSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FeatureComparisonSection } from '@/components/landing/FeatureComparisonSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { EmailCaptureSection } from '@/components/landing/EmailCaptureSection';
import { Footer } from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      {/* Hero Section - now integrated directly instead of separate component */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900 dark:to-cyan-900">
        <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-700/50" />
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              AI-Powered Brand Protection Suite
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Protect Your Brand from{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI & Digital Threats
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI detection, image verification, and content protection tools. 
              Safeguard your intellectual property with enterprise-grade security and real-time monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <LogoSection />
      <AdvancedFeaturesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FeatureComparisonSection />
      <FAQSection />
      <EmailCaptureSection />
      <Footer />
    </div>
  );
};

export default Landing;
