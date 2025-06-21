
import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Image, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Search, 
  AlertTriangle,
  Star,
  Upload,
  Eye,
  Award,
  Users
} from 'lucide-react';

const ImageVerificationSales = () => {
  const [uploadedImage, setUploadedImage] = useState(false);

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Multi-layered Analysis",
      description: "Advanced AI algorithms analyze visual patterns, metadata, and compression artifacts"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Visual Anomaly Detection",
      description: "Detect subtle inconsistencies that indicate AI generation or manipulation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "95%+ Accuracy Rate",
      description: "Industry-leading accuracy in detecting AI-generated and manipulated images"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Deepfake Detection",
      description: "Specialized algorithms to identify sophisticated deepfake technology"
    }
  ];

  const useCases = [
    {
      title: "Journalism & Media",
      description: "Verify image authenticity for news reporting and fact-checking",
      icon: "📰"
    },
    {
      title: "Legal Evidence",
      description: "Authenticate visual evidence for legal proceedings and investigations",
      icon: "⚖️"
    },
    {
      title: "Academic Integrity",
      description: "Ensure image authenticity in academic research and publications",
      icon: "🎓"
    },
    {
      title: "Social Media Verification",
      description: "Combat misinformation by verifying viral images and content",
      icon: "📱"
    },
    {
      title: "E-commerce Fraud",
      description: "Detect fake product images and prevent marketplace fraud",
      icon: "🛒"
    },
    {
      title: "Digital Forensics",
      description: "Professional-grade analysis for law enforcement and security",
      icon: "🔍"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$39",
      period: "/month",
      features: ["100 image verifications/month", "Basic analysis report", "Standard support", "API access"],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      features: ["500 image verifications/month", "Detailed forensic reports", "Priority support", "Batch processing", "Custom integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      features: ["Unlimited verifications", "White-label solution", "Dedicated support", "Custom training", "Advanced analytics"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Home</span>
          <ArrowRight className="h-3 w-3" />
          <span>Tools</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-purple-600 dark:text-purple-400">Image Verification</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              Advanced AI Detection
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Image Detector - Verify Image Authenticity Instantly
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Advanced AI image verification tool. Detect AI-generated images, deepfakes & digital manipulation with 95%+ accuracy. Upload & analyze images instantly!
            </p>
            
            {/* Demo Upload Interface */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Upload Image to Detect AI Generation
              </h3>
              <div className="border-2 border-dashed border-purple-300 dark:border-purple-600 rounded-lg p-8 hover:border-purple-400 transition-colors">
                <div className="flex flex-col items-center gap-4">
                  <Upload className="h-12 w-12 text-purple-500" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Drag and drop an image here, or click to browse
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Choose Image
                  </Button>
                </div>
              </div>
              {uploadedImage && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <span>Analysis complete: 12% probability of AI generation</span>
                  </div>
                </div>
              )}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
              Try Free Analysis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Problem Awareness */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              The Rise of AI-Generated Imagery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With advanced AI tools like DALL-E, Midjourney, and Stable Diffusion, creating realistic fake images has never been easier. This poses serious challenges for verification and trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deepfake Concerns",
                description: "Sophisticated deepfakes can damage reputations and spread misinformation",
                icon: <AlertTriangle className="h-8 w-8 text-red-500" />
              },
              {
                title: "Media Verification",
                description: "Journalists need reliable tools to verify image authenticity",
                icon: <Search className="h-8 w-8 text-blue-500" />
              },
              {
                title: "Legal Evidence",
                description: "Courts require authenticated visual evidence for proceedings",
                icon: <Shield className="h-8 w-8 text-green-500" />
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Detection Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive analysis using multiple detection methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Use Cases Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Trusted by professionals who need reliable image verification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Breakdown */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How Our Technology Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Metadata Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Extract and analyze EXIF data, compression patterns, and file structure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visual Pattern Detection</h3>
                    <p className="text-gray-600 dark:text-gray-300">Identify AI-generated artifacts and inconsistencies in visual elements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Neural Network Analysis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Deep learning models trained on millions of AI and human-generated images</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Sample Analysis Report</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">AI Generation Probability</span>
                  <Badge variant="secondary">12%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Confidence Score</span>
                  <Badge>92%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Deepfake Detection</span>
                  <Badge variant="secondary">Not Detected</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Metadata Integrity</span>
                  <Badge>Verified</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional-Grade Verification
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the plan that fits your verification needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Start Verifying Images Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join professionals who trust our image verification technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Try Free Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ImageVerificationSales;
