import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Book, Users, Settings, CreditCard, HelpCircle, Bot, Image as ImageIcon, Shield, Play, FileText, Phone } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <Book className="h-6 w-6" />,
      description: "Account setup, first steps, and basic navigation",
      articles: [
        "How to create your account",
        "Account verification process",
        "First-time user tutorial",
        "Dashboard overview and navigation",
        "Setting up your profile"
      ]
    },
    {
      title: "AI Content Humanizer",
      icon: <Bot className="h-6 w-6" />,
      description: "Transform AI-generated text to appear human-written",
      articles: [
        "How to use the content humanizer",
        "Understanding AI detection scores",
        "Best practices for content processing",
        "Character limits and batch processing",
        "Downloading and saving results",
        "Choosing the right humanization style"
      ]
    },
    {
      title: "AI Image Verification",
      icon: <ImageIcon className="h-6 w-6" />,
      description: "Detect AI-generated images and deepfakes",
      articles: [
        "Uploading images for analysis",
        "Understanding verification results",
        "Reading forensic analysis reports",
        "Batch image processing",
        "Supported file formats and sizes",
        "Image quality requirements"
      ]
    },
    {
      title: "Content Theft Scanner",
      icon: <Shield className="h-6 w-6" />,
      description: "Find and protect against content plagiarism",
      articles: [
        "Setting up content monitoring",
        "Understanding similarity scores",
        "Generating DMCA takedown notices",
        "Export options and reporting",
        "Setting up ongoing monitoring alerts",
        "Managing your protected content library"
      ]
    },
    {
      title: "Account Management",
      icon: <Users className="h-6 w-6" />,
      description: "Manage your subscription, settings, and preferences",
      articles: [
        "Upgrading or downgrading your plan",
        "Managing billing information",
        "Usage limits and quotas",
        "Account settings and preferences",
        "Password reset and security",
        "Deleting your account"
      ]
    },
    {
      title: "Technical Support",
      icon: <Settings className="h-6 w-6" />,
      description: "Troubleshooting and technical assistance",
      articles: [
        "Browser compatibility requirements",
        "Mobile app usage guide",
        "Troubleshooting upload issues",
        "Performance optimization tips",
        "API integration guide",
        "Common error messages"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "Getting Started: Your First 5 Minutes",
      description: "Quick setup guide to get you protecting your content immediately",
      category: "Getting Started",
      readTime: "3 min"
    },
    {
      title: "How to Generate Effective DMCA Notices",
      description: "Step-by-step guide to creating powerful takedown requests",
      category: "Content Theft Scanner",
      readTime: "7 min"
    },
    {
      title: "Understanding AI Detection Scores",
      description: "Learn how our AI detection algorithms work and interpret results",
      category: "AI Content Humanizer",
      readTime: "5 min"
    },
    {
      title: "Image Forensics: What to Look For",
      description: "Professional techniques for identifying manipulated images",
      category: "AI Image Verification", 
      readTime: "8 min"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI detection?",
      answer: "Our AI detection tools achieve 99.5% accuracy across all content types. We continuously update our algorithms to stay ahead of new AI models and manipulation techniques."
    },
    {
      question: "What file formats are supported for image verification?",
      answer: "We support JPG, PNG, WebP, GIF, and TIFF formats up to 50MB per file. For best results, use high-resolution images with minimal compression."
    },
    {
      question: "How long does content monitoring take?",
      answer: "Initial scans complete within 24-48 hours. Ongoing monitoring provides real-time alerts as new matches are discovered across the web."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll retain access to all features until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for new subscribers. Enterprise customers may have different terms as specified in their agreement."
    },
    {
      question: "Is my uploaded content stored permanently?",
      answer: "No, content uploaded for analysis is processed and deleted immediately after analysis. We don't permanently store your sensitive content."
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    searchQuery === '' || 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => article.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Find answers, learn how to use our tools, and get the most out of Brand Protection Toolkit
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Can't find what you need? Get personalized help
                </p>
                <Button variant="outline" size="sm">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Play className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Tutorials</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Watch step-by-step guides for each tool
                </p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Comprehensive guides and API docs
                </p>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Popular Articles */}
        {searchQuery === '' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{article.title}</CardTitle>
                      <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                        {article.readTime}
                      </span>
                    </div>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {article.category}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.articles.slice(0, 4).map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a 
                          href="#" 
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          {article}
                        </a>
                      </li>
                    ))}
                    {category.articles.length > 4 && (
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                        >
                          +{category.articles.length - 4} more articles
                        </a>
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-gray-200 dark:border-gray-700 rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <HelpCircle className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Still Need Help */}
        <section className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Get personalized assistance with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              Contact Support
            </Button>
            <Button variant="outline">
              Schedule a Call
            </Button>
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Average response time: 4-8 hours • Available Monday-Saturday
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;
