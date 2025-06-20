
import React from 'react';
import { Bot, Shield, Search, CheckCircle } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Content Humanizer',
      description: 'Transform AI-generated content to bypass detection tools while maintaining quality and authenticity.',
      benefits: ['5,000+ character limit', 'Real-time detection scoring', 'Multiple rewrite variations', 'Download & history']
    },
    {
      icon: Shield,
      title: 'Image Verification',
      description: 'Detect AI-generated images and deepfakes with forensic-grade analysis and detailed reporting.',
      benefits: ['Multiple format support', 'Metadata extraction', 'Visual highlighting', 'PDF reports']
    },
    {
      icon: Search,
      title: 'Content Theft Scanner',
      description: 'Monitor and protect your content across the web with automated scanning and DMCA tools.',
      benefits: ['Web-wide scanning', 'DMCA generator', 'Email alerts', 'Similarity tracking']
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Brand Protection Suite
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Three powerful tools working together to protect your digital assets and maintain content authenticity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {feature.description}
              </p>

              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
