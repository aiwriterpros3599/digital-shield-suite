
import React, { useState } from 'react';
import { Search, Globe, AlertCircle, ExternalLink, Calendar } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

const Scanner = () => {
  const [searchText, setSearchText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);

  const handleScan = async () => {
    if (!searchText.trim()) return;
    
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setScanResults([
        {
          id: 1,
          url: 'example-blog.com/article-123',
          title: 'How AI is Changing the World',
          similarity: 89,
          dateFound: '2024-01-15',
          snippet: 'This is a partial match of your content about artificial intelligence trends...',
          status: 'potential_theft'
        },
        {
          id: 2,
          url: 'content-farm.net/posts/ai-trends',
          title: 'AI Trends You Need to Know',
          similarity: 67,
          dateFound: '2024-01-12',
          snippet: 'Similar content found discussing AI developments and future implications...',
          status: 'potential_theft'
        },
        {
          id: 3,
          url: 'tech-news.com/ai-analysis',
          title: 'Understanding AI Technology',
          similarity: 45,
          dateFound: '2024-01-10',
          snippet: 'Some overlapping themes but likely original content...',
          status: 'low_risk'
        }
      ]);
      setIsScanning(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900 dark:to-emerald-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Content Theft Scanner
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Find stolen or plagiarized content across the web to protect your intellectual property.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Search for Content Theft</h3>
          
          <div className="flex gap-4">
            <div className="flex-1">
              <textarea
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Paste your original content here to scan for theft across the web..."
                className="w-full h-32 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                maxLength={2000}
              />
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {searchText.length}/2,000 characters
                </span>
                <button
                  onClick={handleScan}
                  disabled={!searchText.trim() || isScanning}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isScanning ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Scanning...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4" />
                      Scan Web
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Scan Results</h3>
            {scanResults.length > 0 && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Found {scanResults.length} potential matches
              </span>
            )}
          </div>

          {isScanning && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Scanning the web for content theft...</p>
              </div>
            </div>
          )}

          {scanResults.length > 0 && (
            <div className="space-y-4">
              {scanResults.map((result) => (
                <div key={result.id} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{result.url}</span>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{result.title}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-sm font-medium ${
                        result.similarity >= 70 
                          ? 'bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                          : result.similarity >= 50
                          ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400'
                          : 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                      }`}>
                        {result.similarity}% match
                      </span>
                      {result.status === 'potential_theft' && (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {result.snippet}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-3 w-3" />
                      Found on {result.dateFound}
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors">
                        View Full
                      </button>
                      {result.status === 'potential_theft' && (
                        <button className="px-3 py-1 text-sm bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/30 transition-colors">
                          Generate DMCA
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!searchText && !isScanning && scanResults.length === 0 && (
            <div className="flex items-center justify-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Enter your content above to start scanning for potential theft
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Scanner;
