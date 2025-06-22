
import React, { useState } from 'react';
import { Search, Globe, AlertCircle, ExternalLink, Calendar, Shield, Users, BarChart3, Zap, Bell, FileText, Scale, Eye, Settings, Filter } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Scanner = () => {
  const [searchText, setSearchText] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('scanner');
  const [autoMonitoring, setAutoMonitoring] = useState(true);
  const [socialMediaMonitoring, setSocialMediaMonitoring] = useState(true);
  const [translationDetection, setTranslationDetection] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(['en', 'es', 'fr']);

  const handleScan = async () => {
    if (!searchText.trim()) return;
    
    setIsScanning(true);
    // Simulate comprehensive scanning
    setTimeout(() => {
      setScanResults([
        {
          id: 1,
          url: 'example-blog.com/article-123',
          title: 'How AI is Changing the World',
          similarity: 89,
          dateFound: '2024-01-15',
          snippet: 'This is a partial match of your content about artificial intelligence trends...',
          status: 'potential_theft',
          platform: 'Blog',
          domainAuthority: 45,
          backlinks: 1200,
          socialShares: 89,
          language: 'English',
          translatedFrom: null
        },
        {
          id: 2,
          url: 'content-farm.net/posts/ai-trends',
          title: 'Tendencias de IA que necesitas conocer',
          similarity: 67,
          dateFound: '2024-01-12',
          snippet: 'Contenido similar encontrado discutiendo desarrollos de IA...',
          status: 'potential_theft',
          platform: 'Content Farm',
          domainAuthority: 12,
          backlinks: 45,
          socialShares: 23,
          language: 'Spanish',
          translatedFrom: 'English'
        },
        {
          id: 3,
          url: 'linkedin.com/pulse/ai-analysis',
          title: 'Understanding AI Technology Impact',
          similarity: 45,
          dateFound: '2024-01-10',
          snippet: 'Some overlapping themes but likely original content...',
          status: 'low_risk',
          platform: 'LinkedIn',
          domainAuthority: 95,
          backlinks: 50000,
          socialShares: 156,
          language: 'English',
          translatedFrom: null
        }
      ]);
      setIsScanning(false);
    }, 3000);
  };

  const handleGenerateDMCA = (result: any) => {
    alert(`Generating DMCA notice for ${result.url}. This will create a professional legal document.`);
  };

  const handleStartMonitoring = () => {
    alert('Automated monitoring started. You will receive email alerts for new matches.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900 dark:to-emerald-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Content Theft Scanner & IP Protection
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Advanced monitoring with automated DMCA filing and legal case management
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Dashboard
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Scale className="h-4 w-4" />
                Legal Cases
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active Monitors</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
                </div>
                <Eye className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">DMCA Filed</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">7</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cases Resolved</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">23</p>
                </div>
                <Scale className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">94%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="scanner">Content Scanner</TabsTrigger>
            <TabsTrigger value="monitoring">Auto Monitoring</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="legal">Legal Tools</TabsTrigger>
            <TabsTrigger value="reports">Brand Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="scanner" className="space-y-6">
            {/* Advanced Scanning Options */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Advanced Scanning Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Social Media Monitoring</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Scan across all major platforms</p>
                    </div>
                    <Switch checked={socialMediaMonitoring} onCheckedChange={setSocialMediaMonitoring} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Translation Detection</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Find content in multiple languages</p>
                    </div>
                    <Switch checked={translationDetection} onCheckedChange={setTranslationDetection} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Deep Web Scanning</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Extended search coverage</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                {translationDetection && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Target Languages</label>
                    <div className="flex gap-2">
                      {['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese'].map((lang) => (
                        <Badge key={lang} variant="outline" className="cursor-pointer hover:bg-green-100">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Search Section */}
            <Card>
              <CardHeader>
                <CardTitle>Scan for Content Theft</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <textarea
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Paste your original content here to scan for theft across the web and social media platforms..."
                    className="w-full h-32 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    maxLength={2000}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {searchText.length}/2,000 characters
                      </span>
                      <Select defaultValue="comprehensive">
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quick">Quick Scan</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive</SelectItem>
                          <SelectItem value="deep">Deep Analysis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={handleScan}
                        disabled={!searchText.trim() || isScanning}
                        className="flex items-center gap-2"
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
                      </Button>
                      <Button onClick={handleStartMonitoring} variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Monitor
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Scan Results</CardTitle>
                  {scanResults.length > 0 && (
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4" />
                      <Select defaultValue="all">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Results</SelectItem>
                          <SelectItem value="high">High Risk</SelectItem>
                          <SelectItem value="medium">Medium Risk</SelectItem>
                          <SelectItem value="low">Low Risk</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {isScanning && (
                  <div className="flex items-center justify-center py-12">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent mx-auto mb-4"></div>
                      <p className="text-gray-600 dark:text-gray-400">Scanning web and social media platforms...</p>
                      <p className="text-sm text-gray-500 mt-1">Checking 50+ million sources</p>
                    </div>
                  </div>
                )}

                {scanResults.length > 0 && (
                  <div className="space-y-4">
                    {scanResults.map((result) => (
                      <div key={result.id} className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Globe className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-500 dark:text-gray-400">{result.url}</span>
                              <ExternalLink className="h-3 w-3 text-gray-400" />
                              <Badge variant="outline">{result.platform}</Badge>
                              {result.translatedFrom && (
                                <Badge variant="secondary">Translated from {result.translatedFrom}</Badge>
                              )}
                            </div>
                            <h4 className="font-medium text-gray-900 dark:text-white mb-2">{result.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{result.snippet}</p>
                            
                            {/* Extended Analytics */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                              <div>
                                <span className="text-gray-500">Domain Authority:</span>
                                <span className="ml-1 font-medium">{result.domainAuthority}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Backlinks:</span>
                                <span className="ml-1 font-medium">{result.backlinks.toLocaleString()}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Social Shares:</span>
                                <span className="ml-1 font-medium">{result.socialShares}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Language:</span>
                                <span className="ml-1 font-medium">{result.language}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <span className={`px-3 py-1 rounded text-sm font-medium ${
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
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-3 w-3" />
                            Found on {result.dateFound}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Evidence Report
                            </Button>
                            {result.status === 'potential_theft' && (
                              <Button 
                                size="sm"
                                onClick={() => handleGenerateDMCA(result)}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                Generate DMCA
                              </Button>
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Automated Content Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Continuous Monitoring</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Automatically scan for content theft 24/7 with instant email alerts
                      </p>
                    </div>
                    <Switch checked={autoMonitoring} onCheckedChange={setAutoMonitoring} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Active Monitors: 12</h4>
                      <Progress value={65} className="mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">65% of monthly quota used</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Alerts This Week: 3</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>High Priority</span>
                          <span className="text-red-600">2</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Medium Priority</span>
                          <span className="text-yellow-600">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button>Set Up New Monitor</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Brand Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Platforms Monitored</h4>
                    {['Facebook', 'Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'YouTube'].map((platform) => (
                      <div key={platform} className="flex items-center justify-between p-3 border rounded">
                        <span>{platform}</span>
                        <Badge variant="outline">Active</Badge>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Recent Mentions</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p className="text-sm">Positive mention on LinkedIn</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                      <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                        <p className="text-sm">Suspicious content on Instagram</p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Legal Case Management & DMCA Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-lg text-center">
                    <FileText className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">DMCA Generator</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Create professional DMCA takedown notices
                    </p>
                    <Button variant="outline">Generate DMCA</Button>
                  </div>
                  <div className="p-6 border rounded-lg text-center">
                    <Scale className="h-12 w-12 text-green-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Case Management</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Track legal cases from filing to resolution
                    </p>
                    <Button variant="outline">View Cases</Button>
                  </div>
                  <div className="p-6 border rounded-lg text-center">
                    <Shield className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Evidence Vault</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Blockchain-secured evidence preservation
                    </p>
                    <Button variant="outline">Access Vault</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Brand Protection Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Monthly Protection Report</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Comprehensive analysis of brand protection activities
                      </p>
                      <Button variant="outline" size="sm">Download Report</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Executive Dashboard</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        High-level metrics for stakeholders
                      </p>
                      <Button variant="outline" size="sm">View Dashboard</Button>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-medium mb-2">Custom Reporting Available</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Generate custom reports tailored to your specific needs and compliance requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Scanner;
