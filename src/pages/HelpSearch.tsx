
import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Clock, ChevronRight, Home } from 'lucide-react';
import { helpArticles, helpCategories } from '@/data/helpArticles';

const HelpSearch: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);

  const searchResults = useMemo(() => {
    if (!query) return [];
    
    const searchTerm = query.toLowerCase();
    return helpArticles.filter(article => 
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.content.introduction.toLowerCase().includes(searchTerm) ||
      article.content.sections.some(section => 
        section.title.toLowerCase().includes(searchTerm) ||
        section.content.toLowerCase().includes(searchTerm)
      )
    );
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/help/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12">
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
          <span className="text-gray-900 dark:text-white">Search Results</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Search Help Articles
          </h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </form>

          {query && (
            <p className="text-gray-600 dark:text-gray-300">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"
            </p>
          )}
        </div>

        {/* Search Results */}
        {query && (
          <div className="max-w-4xl mx-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                {searchResults.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <Link to={`/help/article/${article.slug}`}>
                            <CardTitle className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                              <span 
                                dangerouslySetInnerHTML={{ 
                                  __html: highlightText(article.title, query) 
                                }} 
                              />
                            </CardTitle>
                          </Link>
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                              {helpCategories[article.category as keyof typeof helpCategories]}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p 
                        className="text-gray-600 dark:text-gray-300 mb-4"
                        dangerouslySetInnerHTML={{ 
                          __html: highlightText(article.description, query) 
                        }}
                      />
                      <Link to={`/help/article/${article.slug}`}>
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No results found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any articles matching "{query}". Try different keywords or browse our categories.
                </p>
                <Link to="/help">
                  <Button>Browse All Articles</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* No Search Query */}
        {!query && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Search our help articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Enter keywords to find relevant help articles and guides.
            </p>
            <Link to="/help">
              <Button variant="outline">Browse All Articles</Button>
            </Link>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpSearch;
