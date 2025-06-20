
import React from 'react';

export const LogoSection = () => {
  const logos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'Digital Pro', logo: 'DP' },
    { name: 'Creative Studio', logo: 'CS' },
    { name: 'Brand Guard', logo: 'BG' },
    { name: 'Content Shield', logo: 'CS' },
    { name: 'AI Protect', logo: 'AP' }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 font-medium">
          Trusted by leading brands and creators worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {logos.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600"
            >
              <span className="text-gray-400 dark:text-gray-500 font-bold text-sm">
                {company.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
