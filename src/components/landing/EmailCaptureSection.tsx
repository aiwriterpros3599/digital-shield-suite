
import React, { useState } from 'react';
import { Download, Mail, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Your FREE Brand Protection Checklist
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download our comprehensive 25-point checklist to protect your brand from AI content, 
              image theft, and content scraping. Trusted by 10,000+ creators worldwide.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900 placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 bg-white/90 text-gray-900 placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Download Free Checklist
                  </>
                )}
              </button>
            </form>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Instant Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
