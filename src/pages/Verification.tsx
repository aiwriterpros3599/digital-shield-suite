
import React, { useState } from 'react';
import { Image, Upload, AlertTriangle, CheckCircle, FileImage, Shield, Eye, Camera, Video, Link2, Settings, Users, BarChart3, Zap } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';

const Verification = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('image');
  const [realtimeMode, setRealtimeMode] = useState(false);
  const [blockchainVerify, setBlockchainVerify] = useState(false);
  const [socialMediaScan, setSocialMediaScan] = useState(true);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAnalysisResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    // Simulate comprehensive analysis
    setTimeout(() => {
      setAnalysisResult({
        aiProbability: 15,
        isAiGenerated: false,
        confidence: 92,
        deepfakeScore: 8,
        manipulationDetected: false,
        blockchainHash: 'bch_7f9a8b2c1d4e5f6g',
        socialMediaMatches: 3,
        metadata: {
          format: 'JPEG',
          dimensions: '1920x1080',
          fileSize: '2.4 MB',
          camera: 'Canon EOS R5',
          timestamp: '2024-01-15 14:30:22',
          gpsLocation: '40.7128, -74.0060',
          editingSoftware: 'None detected'
        },
        forensicAnalysis: {
          compressionArtifacts: 'Normal',
          colorConsistency: 'Consistent',
          lightingAnalysis: 'Natural',
          edgeDetection: 'No anomalies',
          pixelPatterns: 'Authentic'
        }
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleVideoAnalysis = () => {
    alert('Video frame analysis starting... This feature analyzes each frame for deepfakes and manipulation.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Image className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  AI Image Verification & Forensics
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Advanced deepfake detection with blockchain verification
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Team Access
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Forensic Settings
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Detection Accuracy</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">99.7%</p>
                </div>
                <Shield className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Processing Speed</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2.1s</p>
                </div>
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Blockchain Verified</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">34</p>
                </div>
                <Link2 className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="image">Image Analysis</TabsTrigger>
            <TabsTrigger value="video">Video Analysis</TabsTrigger>
            <TabsTrigger value="realtime">Real-time Monitoring</TabsTrigger>
            <TabsTrigger value="forensics">Forensic Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="image" className="space-y-6">
            {/* Advanced Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Advanced Verification Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Blockchain Verification</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Store evidence on blockchain</p>
                    </div>
                    <Switch checked={blockchainVerify} onCheckedChange={setBlockchainVerify} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Social Media Scan</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Check for similar images online</p>
                    </div>
                    <Switch checked={socialMediaScan} onCheckedChange={setSocialMediaScan} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Deep Forensic Analysis</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Pixel-level examination</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Upload for Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="media-upload"
                    />
                    <label htmlFor="media-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center gap-4">
                        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                          <Upload className="h-8 w-8 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-gray-900 dark:text-white">
                            Drop your media here or click to browse
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Supports Images & Videos (Max 50MB)
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {selectedFile && (
                    <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileImage className="h-5 w-5 text-purple-500" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">{selectedFile.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          onClick={handleAnalyze}
                          disabled={isAnalyzing}
                        >
                          {isAnalyzing ? 'Analyzing...' : 'Start Verification'}
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Results Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Verification Results</CardTitle>
                </CardHeader>
                <CardContent>
                  {isAnalyzing && (
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">Running advanced forensic analysis...</p>
                      </div>
                    </div>
                  )}

                  {analysisResult && (
                    <div className="space-y-6">
                      {/* Primary Results */}
                      <div className={`p-4 rounded-lg ${
                        analysisResult.isAiGenerated 
                          ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' 
                          : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                      }`}>
                        <div className="flex items-center gap-3">
                          {analysisResult.isAiGenerated ? (
                            <AlertTriangle className="h-6 w-6 text-red-500" />
                          ) : (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          )}
                          <div>
                            <p className={`font-semibold ${
                              analysisResult.isAiGenerated ? 'text-red-700 dark:text-red-400' : 'text-green-700 dark:text-green-400'
                            }`}>
                              {analysisResult.isAiGenerated ? 'AI-Generated Content Detected' : 'Authentic Human-Generated Content'}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Confidence: {analysisResult.confidence}% | Deepfake Score: {analysisResult.deepfakeScore}%
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Blockchain Verification */}
                      {blockchainVerify && (
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <div className="flex items-center gap-3">
                            <Link2 className="h-5 w-5 text-blue-500" />
                            <div>
                              <p className="font-medium text-blue-700 dark:text-blue-400">Blockchain Verified</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Hash: {analysisResult.blockchainHash}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Social Media Matches */}
                      {socialMediaScan && (
                        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                          <div className="flex items-center gap-3">
                            <Eye className="h-5 w-5 text-yellow-500" />
                            <div>
                              <p className="font-medium text-yellow-700 dark:text-yellow-400">
                                {analysisResult.socialMediaMatches} Similar Images Found
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Across major social platforms</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Detailed Analysis */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <h4 className="font-medium">Technical Metadata</h4>
                          <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Format:</span>
                              <span>{analysisResult.metadata.format}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Dimensions:</span>
                              <span>{analysisResult.metadata.dimensions}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Camera:</span>
                              <span>{analysisResult.metadata.camera}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">GPS:</span>
                              <span>{analysisResult.metadata.gpsLocation}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-medium">Forensic Analysis</h4>
                          <div className="text-sm space-y-1">
                            <div className="flex justify-between">
                              <span className="text-gray-500">Compression:</span>
                              <span className="text-green-600">{analysisResult.forensicAnalysis.compressionArtifacts}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Color Analysis:</span>
                              <span className="text-green-600">{analysisResult.forensicAnalysis.colorConsistency}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Lighting:</span>
                              <span className="text-green-600">{analysisResult.forensicAnalysis.lightingAnalysis}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">Edge Detection:</span>
                              <span className="text-green-600">{analysisResult.forensicAnalysis.edgeDetection}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button>Generate Court Report</Button>
                        <Button variant="outline">Download Evidence</Button>
                        <Button variant="outline">Share Results</Button>
                      </div>
                    </div>
                  )}

                  {!selectedFile && !isAnalyzing && !analysisResult && (
                    <div className="flex items-center justify-center py-12">
                      <p className="text-gray-500 dark:text-gray-400 text-center">
                        Upload an image or video to start forensic verification
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Video Frame Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Advanced Video Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Analyze each frame for deepfakes, manipulation, and authenticity verification.
                  </p>
                  <Button onClick={handleVideoAnalysis}>Start Video Analysis</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="realtime">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    Real-time Camera Analysis
                  </CardTitle>
                  <Switch 
                    checked={realtimeMode} 
                    onCheckedChange={setRealtimeMode}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Live Camera Verification</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Monitor live camera feeds for real-time deepfake detection and verification.
                  </p>
                  <Button disabled={!realtimeMode}>
                    {realtimeMode ? 'Start Live Monitoring' : 'Enable Real-time Mode'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="forensics">
            <Card>
              <CardHeader>
                <CardTitle>Forensic Reports & Legal Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <Shield className="h-8 w-8 text-green-500 mb-3" />
                    <h4 className="font-semibold mb-2">Court-Ready Reports</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Generate legally admissible forensic analysis reports.
                    </p>
                    <Button variant="outline">Generate Report</Button>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <Link2 className="h-8 w-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold mb-2">Evidence Preservation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Blockchain-secured evidence storage for legal proceedings.
                    </p>
                    <Button variant="outline">View Evidence</Button>
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

export default Verification;
