
import React, { useState, useEffect } from 'react';
import { Shield, Play, CheckCircle, Star, Download, ArrowRight } from 'lucide-react';
import { HeroSection } from '@/components/landing/HeroSection';
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
      <HeroSection />
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
