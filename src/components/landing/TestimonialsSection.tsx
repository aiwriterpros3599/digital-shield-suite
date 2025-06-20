
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'Digital Marketing Pro',
      rating: 5,
      text: 'This toolkit saved my business. The AI content humanizer is incredible - my content passes all detection tools while maintaining quality.',
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Brand Manager',
      company: 'TechStart Inc',
      rating: 5,
      text: 'The image verification tool caught several deepfakes targeting our brand. The forensic reports were detailed enough for legal action.',
      avatar: 'MC'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Agency Owner',
      company: 'Creative Solutions',
      rating: 5,
      text: 'Content theft scanner found our stolen articles across 50+ websites. The DMCA generator made takedowns effortless.',
      avatar: 'LR'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by 10,000+ Creators
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See why businesses choose our brand protection suite
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
