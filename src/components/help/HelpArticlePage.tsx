
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Clock, 
  Calendar, 
  ChevronRight, 
  Home, 
  ThumbsUp, 
  ThumbsDown,
  MessageCircle,
  ArrowLeft
} from 'lucide-react';
import { helpArticles, helpCategories } from '@/data/helpArticles';

export const HelpArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);
  
  const article = helpArticles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <BlogHeader />
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Article Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The help article you're looking for doesn't exist.
            </p>
            <Link to="/help">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Help Center
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = helpArticles.filter(a => 
    article.relatedArticles.includes(a.id)
  );

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    // In a real app, you'd send this to your analytics
    console.log(`Article feedback: ${type} for ${article.slug}`);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/help" className="hover:text-blue-600 dark:hover:text-blue-400">
            Help Center
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link 
            to={`/help/category/${article.category}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {helpCategories[article.category as keyof typeof helpCategories]}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900 dark:text-white">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Updated {article.lastUpdated}</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {article.content.sections.length > 3 && (
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-2">
                {article.content.sections.map((section, index) => (
                  <li key={index}>
                    <a 
                      href={`#section-${index}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {/* Introduction */}
          <div className="text-lg text-gray-600 dark:text-gray-300 mb-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            {article.content.introduction}
          </div>

          {/* Sections */}
          {article.content.sections.map((section, index) => (
            <section key={index} id={`section-${index}`} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {section.content}
              </p>

              {/* Steps */}
              {section.steps && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Steps:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-gray-700 dark:text-gray-300">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Tips */}
              {section.tips && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tips:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    {section.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="text-gray-700 dark:text-gray-300">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Troubleshooting */}
              {section.troubleshooting && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Troubleshooting:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    {section.troubleshooting.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Conclusion
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {article.content.conclusion}
            </p>
          </div>
        </article>

        {/* Feedback Section */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Was this article helpful?
            </h3>
            {feedback ? (
              <div className="text-center py-4">
                <p className="text-green-600 dark:text-green-400 mb-2">
                  Thank you for your feedback!
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your input helps us improve our documentation.
                </p>
              </div>
            ) : (
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleFeedback('helpful')}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  Yes, helpful
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleFeedback('not-helpful')}
                  className="flex items-center gap-2"
                >
                  <ThumbsDown className="h-4 w-4" />
                  No, not helpful
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id}
                  to={`/help/article/${relatedArticle.slug}`}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="pt-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {relatedArticle.description}
                      </p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {relatedArticle.readTime} • {helpCategories[relatedArticle.category as keyof typeof helpCategories]}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Contact Support CTA */}
        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent className="pt-6 text-center">
            <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Still need help?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button>Contact Support</Button>
              </Link>
              <Button variant="outline">Schedule a Call</Button>
            </div>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};
