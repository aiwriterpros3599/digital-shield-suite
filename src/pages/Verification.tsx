
import React, { useState } from 'react';
import { Image, Upload, AlertTriangle, CheckCircle, FileImage } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';

const Verification = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

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
    // Simulate analysis
    setTimeout(() => {
      setAnalysisResult({
        aiProbability: 15,
        isAiGenerated: false,
        confidence: 92,
        metadata: {
          format: 'JPEG',
          dimensions: '1920x1080',
          fileSize: '2.4 MB',
          camera: 'Canon EOS R5',
          timestamp: '2024-01-15 14:30:22'
        }
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Image className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              AI Image Verification
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Detect AI-generated images, deepfakes, and digital manipulation using forensic-grade analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upload Image</h3>
            
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-purple-400 dark:hover:border-purple-500 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                    <Upload className="h-8 w-8 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Drop your image here or click to browse
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Supports JPG, PNG, GIF, WebP (Max 10MB)
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
                  <button
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 transition-all"
                  >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Analysis Results</h3>
            
            {isAnalyzing && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Analyzing image...</p>
                </div>
              </div>
            )}

            {analysisResult && (
              <div className="space-y-6">
                {/* AI Detection Score */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Generation Probability</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {analysisResult.aiProbability}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${100 - analysisResult.aiProbability}%` }}
                    ></div>
                  </div>
                </div>

                {/* Verdict */}
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
                        {analysisResult.isAiGenerated ? 'AI-Generated Content Detected' : 'Human-Generated Content'}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Confidence: {analysisResult.confidence}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Image Metadata</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Format:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">{analysisResult.metadata.format}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Size:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">{analysisResult.metadata.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Dimensions:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">{analysisResult.metadata.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Camera:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">{analysisResult.metadata.camera}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!selectedFile && !isAnalyzing && !analysisResult && (
              <div className="flex items-center justify-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Upload an image to start the verification process
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verification;
