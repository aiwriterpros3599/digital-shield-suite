
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Book, Users, Settings, CreditCard, HelpCircle, Bot, Image as ImageIcon, Shield, Play, FileText, Phone } from 'lucide-react';
import { helpArticles, helpCategories, popularArticles, faqs } from '@/data/helpArticles';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/help/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const articlesByCategory = helpArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof helpArticles>);

  const categoryIcons = {
    'getting-started': <Book className="h-6 w-6" />,
    'ai-content-humanizer': <Bot className="h-6 w-6" />,
    'ai-image-verification': <ImageIcon className="h-6 w-6" />,
    'content-theft-scanner': <Shield className="h-6 w-6" />,
    'account-management': <Users className="h-6 w-6" />,
    'technical-support': <Settings className="h-6 w-6" />
  };

  const categoryDescriptions = {
    'getting-started': 'Account setup, first steps, and basic navigation',
    'ai-content-humanizer': 'Transform AI-generated text to appear human-written',
    'ai-image-verification': 'Detect AI-generated images and deepfakes',
    'content-theft-scanner': 'Find and protect against content plagiarism',
    'account-management': 'Manage your subscription, settings, and preferences',
    'technical-support': 'Troubleshooting and technical assistance'
  };

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
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </form>
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
                <Link to="/contact">
                  <Button variant="outline" size="sm">
                    Contact Us
                  </Button>
                </Link>
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
                <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Integrate our tools into your workflow
                </p>
                <Button variant="outline" size="sm">
                  View API Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Link key={index} to={`/help/article/${article.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
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
              </Link>
            ))}
          </div>
        </section>

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(articlesByCategory).map(([categoryKey, articles]) => (
              <Card key={categoryKey} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-blue-600 dark:text-blue-400">
                      {categoryIcons[categoryKey as keyof typeof categoryIcons]}
                    </div>
                    <CardTitle className="text-lg">
                      {helpCategories[categoryKey as keyof typeof helpCategories]}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    {categoryDescriptions[categoryKey as keyof typeof categoryDescriptions]}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {articles.slice(0, 4).map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link 
                          to={`/help/article/${article.slug}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                    {articles.length > 4 && (
                      <li>
                        <Link 
                          to={`/help/category/${categoryKey}`}
                          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                        >
                          +{articles.length - 4} more articles
                        </Link>
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
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 dark:text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            <Link to="/contact">
              <Button>
                Contact Support
              </Button>
            </Link>
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
