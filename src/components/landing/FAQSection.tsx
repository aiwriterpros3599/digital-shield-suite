
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the AI Content Humanizer work?',
      answer: 'Our AI humanizer uses advanced natural language processing to rewrite AI-generated content, making it undetectable by AI detection tools while preserving meaning and quality. It analyzes patterns typical of AI writing and transforms them into more natural, human-like expressions.'
    },
    {
      question: 'What image formats are supported for verification?',
      answer: 'We support all major image formats including JPG, PNG, GIF, WebP, and TIFF. Our forensic analysis works on images up to 50MB in size and can detect various types of manipulation including AI generation, deepfakes, and digital alterations.'
    },
    {
      question: 'How accurate is the content theft detection?',
      answer: 'Our content scanner achieves 95%+ accuracy in detecting stolen content across the web. It uses advanced algorithms to find near-duplicates, paraphrased content, and translated versions of your original work across millions of websites and databases.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with the results, contact our support team for a full refund. We stand behind the quality and effectiveness of our tools.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Absolutely! We offer a 14-day free trial with no credit card required. You\'ll get access to all three tools with generous usage limits to test everything before making a purchase decision.'
    },
    {
      question: 'Can I use this for commercial purposes?',
      answer: 'Yes, all plans include commercial usage rights. The Business plan specifically includes expanded commercial licensing, templates for client work, and tools to help you offer these services to your own clients.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our brand protection suite
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
