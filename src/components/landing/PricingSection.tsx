
import React from 'react';
import { Check, Star, Zap, Shield } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfect for getting started',
      features: [
        '10 text humanizations/month (1K chars)',
        '5 image verifications/month',
        '3 content scans/month',
        '1 GB storage',
        'Basic AI detection',
        'Standard processing',
        'PDF reports (watermarked)',
        'Community support',
        '30-day history'
      ],
      popular: false,
      cta: 'Start Free',
      highlight: false
    },
    {
      name: 'Pro',
      price: 29,
      description: 'Advanced features for professionals',
      features: [
        '500 text humanizations/month (5K chars)',
        '200 image verifications/month',
        '100 content scans/month',
        '50 GB storage',
        'Advanced humanization styles',
        'Tone adjustment controls',
        'SEO optimization mode',
        'Built-in plagiarism checker',
        'Deepfake detection',
        'Social media monitoring',
        'Batch processing',
        'API access (1K requests/month)',
        'Team collaboration (3 members)',
        'Version control & history',
        'Priority support (12h response)',
        'Professional reports (no watermark)'
      ],
      popular: true,
      cta: 'Start Pro Trial',
      highlight: true
    },
    {
      name: 'Business',
      price: 79,
      description: 'Complete solution for agencies',
      features: [
        'Unlimited humanizations (10K chars)',
        'Unlimited image verifications',
        'Unlimited content scans',
        '500 GB storage',
        'Commercial license',
        'Unlimited team members',
        'White-label options',
        'Advanced legal tools',
        'Automated DMCA filing',
        'Legal case management',
        'Blockchain verification',
        'Custom integrations',
        'Real-time camera analysis',
        'Video frame analysis',
        'Evidence blockchain preservation',
        'Dedicated account manager',
        'Priority phone support (2h response)',
        'Custom reporting'
      ],
      popular: false,
      cta: 'Start Business Trial',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start with our free tier and upgrade as you grow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-xl' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    {plan.price === 0 ? 'forever' : '/month'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:shadow-xl'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                {plan.cta}
              </button>
              
              {plan.highlight && (
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-blue-600 dark:text-blue-400">
                  <Shield className="h-4 w-4" />
                  <span>14-day free trial included</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-blue-500" />
              Secure payment processing
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-5 w-5 text-purple-500" />
              Cancel anytime
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
