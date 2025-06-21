
import React from 'react';
import { Check, X } from 'lucide-react';

export const FeatureComparisonSection = () => {
  const features = [
    {
      category: "Usage Limits",
      items: [
        { feature: "Text Humanizations/Month", free: "10 (1K chars)", pro: "500 (5K chars)", business: "Unlimited (10K chars)" },
        { feature: "Image Verifications/Month", free: "5", pro: "200", business: "Unlimited" },
        { feature: "Content Scans/Month", free: "3", pro: "100", business: "Unlimited" },
        { feature: "Storage", free: "1 GB", pro: "50 GB", business: "500 GB" },
        { feature: "Team Members", free: "1", pro: "3", business: "Unlimited" },
      ]
    },
    {
      category: "AI Content Humanization",
      items: [
        { feature: "Basic Humanization", free: true, pro: true, business: true },
        { feature: "Writing Styles (Academic, Creative, etc.)", free: false, pro: true, business: true },
        { feature: "Tone Adjustment Controls", free: false, pro: true, business: true },
        { feature: "SEO Optimization Mode", free: false, pro: true, business: true },
        { feature: "Built-in Plagiarism Checker", free: false, pro: true, business: true },
        { feature: "Batch Processing", free: false, pro: true, business: true },
        { feature: "Version Control & History", free: false, pro: true, business: true },
      ]
    },
    {
      category: "Image Verification",
      items: [
        { feature: "Basic AI Detection", free: true, pro: true, business: true },
        { feature: "Deepfake Detection", free: false, pro: true, business: true },
        { feature: "Blockchain Verification", free: false, pro: false, business: true },
        { feature: "Video Frame Analysis", free: false, pro: false, business: true },
        { feature: "Social Media Verification", free: false, pro: true, business: true },
        { feature: "Real-time Camera Analysis", free: false, pro: false, business: true },
      ]
    },
    {
      category: "Content Protection",
      items: [
        { feature: "Basic Content Scanning", free: true, pro: true, business: true },
        { feature: "Social Media Monitoring", free: false, pro: true, business: true },
        { feature: "Automated DMCA Filing", free: false, pro: false, business: true },
        { feature: "Legal Case Management", free: false, pro: false, business: true },
        { feature: "Translation Detection", free: false, pro: true, business: true },
        { feature: "Evidence Blockchain Preservation", free: false, pro: false, business: true },
      ]
    },
    {
      category: "Collaboration & API",
      items: [
        { feature: "API Access", free: false, pro: "1K req/month", business: "Unlimited" },
        { feature: "Team Collaboration", free: false, pro: true, business: true },
        { feature: "White-label Options", free: false, pro: false, business: true },
        { feature: "Custom Integrations", free: false, pro: false, business: true },
      ]
    },
    {
      category: "Support & Reporting",
      items: [
        { feature: "Support Level", free: "Community", pro: "Priority (12h)", business: "Phone (2h)" },
        { feature: "Report Types", free: "Basic PDF", pro: "Professional", business: "Custom + Legal" },
        { feature: "Dedicated Account Manager", free: false, pro: false, business: true },
        { feature: "Legal Documentation", free: false, pro: false, business: true },
      ]
    }
  ];

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Complete Feature Comparison
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that fits your protection needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Free
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white bg-blue-600">
                      Pro ($29/mo)
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">
                      Business ($79/mo)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td colSpan={4} className="px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                            {item.feature}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {renderFeatureValue(item.free)}
                          </td>
                          <td className="px-6 py-4 text-center bg-blue-50 dark:bg-blue-900/20">
                            {renderFeatureValue(item.pro)}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {renderFeatureValue(item.business)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
