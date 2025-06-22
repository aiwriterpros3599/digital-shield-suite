
import React, { useState } from 'react';
import { FileText, Copy, Download, BarChart3, Zap, ArrowRight, Settings, Users, History, Globe, BookOpen, Briefcase, Heart, Lightbulb, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Humanizer = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('academic');
  const [toneValue, setToneValue] = useState([50]);
  const [creativityLevel, setCreativityLevel] = useState([60]);
  const [seoMode, setSeoMode] = useState(false);
  const [targetKeywords, setTargetKeywords] = useState('');
  const [aiScore, setAiScore] = useState({ before: 85, after: 12 });
  const [plagiarismScore, setPlagiarismScore] = useState(8);
  const [grammarScore, setGrammarScore] = useState(94);
  const [activeTab, setActiveTab] = useState('humanize');
  const [processingHistory, setProcessingHistory] = useState([
    { id: 1, date: '2024-01-20', chars: 1500, style: 'Academic', score: 15 },
    { id: 2, date: '2024-01-19', chars: 2300, style: 'Creative', score: 22 },
    { id: 3, date: '2024-01-18', chars: 890, style: 'Professional', score: 18 }
  ]);

  const writingStyles = [
    { value: 'academic', label: 'Academic', icon: BookOpen, description: 'Formal, research-oriented tone' },
    { value: 'creative', label: 'Creative', icon: Lightbulb, description: 'Engaging, imaginative writing' },
    { value: 'professional', label: 'Professional', icon: Briefcase, description: 'Business-appropriate tone' },
    { value: 'casual', label: 'Casual', icon: Heart, description: 'Conversational, friendly style' }
  ];

  const handleHumanize = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    // Simulate advanced processing with multiple stages
    setTimeout(() => {
      const variations = [
        `This represents a sophisticated transformation of your content: ${inputText}`,
        `Here's an enhanced, human-like version: ${inputText}`,
        `Your content has been professionally humanized: ${inputText}`
      ];
      setOutputText(variations[Math.floor(Math.random() * variations.length)]);
      setPlagiarismScore(Math.floor(Math.random() * 15) + 5);
      setGrammarScore(Math.floor(Math.random() * 10) + 90);
      setIsProcessing(false);
    }, 2000);
  };

  const handleBatchProcess = () => {
    // Simulate batch processing
    alert('Batch processing feature available in Pro plan. Process multiple documents simultaneously.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  AI Content Humanizer Pro
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Advanced humanization with style control and SEO optimization
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleBatchProcess} variant="outline" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Batch Process
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                Version History
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Processing Speed</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">1.2s</p>
                </div>
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">94.2%</p>
                </div>
                <BarChart3 className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">156</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Team Usage</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">3/3</p>
                </div>
                <Users className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="humanize">Humanize Content</TabsTrigger>
            <TabsTrigger value="batch">Batch Processing</TabsTrigger>
            <TabsTrigger value="history">Version History</TabsTrigger>
            <TabsTrigger value="settings">Advanced Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="humanize" className="space-y-6">
            {/* Advanced Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Advanced Humanization Controls
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Writing Style Selection */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {writingStyles.map((style) => (
                    <div
                      key={style.value}
                      onClick={() => setSelectedStyle(style.value)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedStyle === style.value
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <style.icon className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">{style.label}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{style.description}</p>
                    </div>
                  ))}
                </div>

                {/* Tone and Creativity Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tone Adjustment</label>
                    <div className="px-3">
                      <Slider
                        value={toneValue}
                        onValueChange={setToneValue}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Formal</span>
                        <span>Casual</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Creativity Level</label>
                    <div className="px-3">
                      <Slider
                        value={creativityLevel}
                        onValueChange={setCreativityLevel}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Conservative</span>
                        <span>Creative</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SEO Optimization */}
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">SEO Optimization Mode</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Preserve target keywords during humanization</p>
                    </div>
                  </div>
                  <Button
                    variant={seoMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSeoMode(!seoMode)}
                  >
                    {seoMode ? "Enabled" : "Enable"}
                  </Button>
                </div>

                {seoMode && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Target Keywords (comma-separated)</label>
                    <input
                      type="text"
                      value={targetKeywords}
                      onChange={(e) => setTargetKeywords(e.target.value)}
                      placeholder="AI content, humanization, SEO optimization"
                      className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Main Content Processing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Original Content</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">AI Score: {aiScore.before}%</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Paste your AI-generated content here..."
                    className="w-full h-64 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    maxLength={5000}
                  />
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {inputText.length}/5,000 characters
                    </span>
                    <Button
                      onClick={handleHumanize}
                      disabled={!inputText.trim() || isProcessing}
                      className="flex items-center gap-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Humanize Content
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Output Section */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Humanized Content</CardTitle>
                    {outputText && (
                      <div className="flex items-center gap-2">
                        <Badge variant="default">AI Score: {aiScore.after}%</Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 p-4 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white overflow-y-auto">
                    {outputText || (
                      <p className="text-gray-500 dark:text-gray-400 italic">
                        Humanized content will appear here...
                      </p>
                    )}
                  </div>
                  {outputText && (
                    <div className="flex items-center gap-3 mt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Copy className="h-4 w-4" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Generate Variation
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Quality Analysis */}
            {outputText && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Quality Analysis & Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Plagiarism Detection</span>
                        <span className="text-sm text-green-600">{plagiarismScore}% similarity</span>
                      </div>
                      <Progress value={plagiarismScore} className="h-2" />
                      <p className="text-xs text-gray-500">Original content verified</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Grammar Score</span>
                        <span className="text-sm text-green-600">{grammarScore}%</span>
                      </div>
                      <Progress value={grammarScore} className="h-2" />
                      <p className="text-xs text-gray-500">Professional quality</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Readability</span>
                        <span className="text-sm text-blue-600">Grade 8</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <p className="text-xs text-gray-500">Easy to understand</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="sm">
                      Generate Report
                    </Button>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="batch">
            <Card>
              <CardHeader>
                <CardTitle>Batch Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Process Multiple Documents</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Upload multiple files and process them simultaneously with consistent settings.
                  </p>
                  <Button>Upload Files for Batch Processing</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Processing History & Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {processingHistory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <div className="flex items-center gap-3">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span className="font-medium">{item.chars} characters</span>
                          <Badge variant="outline">{item.style}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm">AI Score: {item.score}%</span>
                        <Button variant="outline" size="sm">Restore</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Settings & Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Team Members (3/3)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Manage team access and collaboration settings
                    </p>
                    <Button variant="outline">Manage Team</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">API Access</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      1,000 requests/month remaining
                    </p>
                    <Button variant="outline">View API Docs</Button>
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

export default Humanizer;
