
import React from 'react';
import { Check, Star } from 'lucide-react';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: 67,
      description: 'Perfect for individual creators',
      features: [
        '100 text humanizations/month',
        '50 image verifications/month',
        '25 content scans/month',
        'Standard processing speed',
        'Basic reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: 97,
      description: 'Advanced features for professionals',
      features: [
        '500 text humanizations/month',
        '250 image verifications/month',
        '100 content scans/month',
        'Priority processing',
        'Advanced analytics',
        'Batch processing',
        '12 months history',
        'Email alerts'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: 197,
      description: 'Complete solution for agencies',
      features: [
        'Unlimited usage on all tools',
        'Commercial license',
        '50+ DFY templates',
        'Client onboarding materials',
        'DMCA takedown templates',
        'Affiliate program access',
        'Priority support',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Protection Level
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start with our 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
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
                    one-time
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            🛡️ 30-day money-back guarantee • 🔒 Secure payment • ❌ No monthly fees
          </p>
        </div>
      </div>
    </section>
  );
};
