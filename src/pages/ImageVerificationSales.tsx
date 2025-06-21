
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
  Eye, 
  AlertTriangle,
  Star,
  Users,
  Award,
  Camera,
  Video,
  Blockchain,
  FileText,
  Clock,
  Globe,
  Zap
} from 'lucide-react';

const ImageVerificationSales = () => {
  const [activeFeature, setActiveFeature] = useState('deepfake');

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Advanced Deepfake Detection",
      description: "99.7% accuracy in identifying AI-generated faces and synthetic media content"
    },
    {
      icon: <Blockchain className="h-6 w-6" />,
      title: "Blockchain Verification",
      description: "Immutable proof of authenticity with legal-grade evidence preservation"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "Real-time Video Analysis",
      description: "Frame-by-frame analysis of moving image content with timeline scrubbing"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Court-Ready Forensic Reports",
      description: "Professional legal documentation for litigation and evidence presentation"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Social Media Verification",
      description: "Direct integration with major platforms for real-time content authentication"
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Real-time Camera Analysis",
      description: "Live detection of manipulation attempts during video calls and streaming"
    }
  ];

  const detectionTypes = [
    {
      id: 'deepfake',
      name: 'Deepfake Detection',
      accuracy: '99.7%',
      description: 'Advanced neural network analysis to detect AI-generated faces and synthetic media',
      techniques: ['Facial landmark analysis', 'Temporal consistency checking', 'Artifact detection', 'Blinking pattern analysis']
    },
    {
      id: 'manipulation',
      name: 'Image Manipulation',
      accuracy: '96.4%',
      description: 'Comprehensive detection of digital alterations, splicing, and copy-move forgeries',
      techniques: ['Copy-move detection', 'Splicing analysis', 'Noise inconsistency', 'Compression artifacts']
    },
    {
      id: 'style-transfer',
      name: 'Style Transfer',
      accuracy: '94.8%',
      description: 'Identification of AI-generated artistic filters and neural style transfer applications',
      techniques: ['Style signature analysis', 'Color palette detection', 'Texture consistency', 'Artistic pattern recognition']
    }
  ];

  const useCases = [
    {
      title: "News Organizations",
      subtitle: "Verify breaking news images and videos",
      challenges: ["Fake news proliferation", "Urgent verification needs", "Source credibility issues"],
      benefits: ["Instant verification results", "Blockchain proof of authenticity", "Legal-grade evidence reports"],
      results: "95% reduction in false news publication"
    },
    {
      title: "Legal Professionals",
      subtitle: "Evidence authentication for litigation",
      challenges: ["Digital evidence integrity", "Court admissibility requirements", "Expert testimony needs"],
      benefits: ["Court-ready forensic reports", "Expert witness support", "Chain of custody tracking"],
      results: "100% court acceptance rate"
    },
    {
      title: "Social Media Platforms",
      subtitle: "Content moderation at scale",
      challenges: ["High volume content screening", "Real-time processing needs", "False positive minimization"],
      benefits: ["API integration capabilities", "Batch processing efficiency", "High accuracy detection"],
      results: "80% reduction in manual review time"
    },
    {
      title: "Insurance Companies",
      subtitle: "Fraud prevention and claims verification",
      challenges: ["Photo manipulation in claims", "Document forgery detection", "Evidence preservation"],
      benefits: ["Automated fraud detection", "Blockchain evidence storage", "Comprehensive audit trails"],
      results: "60% reduction in fraudulent claims"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      role: "Chief Technology Officer",
      company: "Global News Network",
      content: "The deepfake detection accuracy is incredible. We've prevented multiple fake news stories from going viral, protecting our reputation and reader trust.",
      rating: 5,
      results: "Prevented 15+ fake news incidents"
    },
    {
      name: "Robert Chen",
      role: "Digital Forensics Expert",
      company: "Metro Police Department",
      content: "The court-ready reports and blockchain verification have been game-changers for our digital evidence cases. 100% acceptance rate in court proceedings.",
      rating: 5,
      results: "100% court acceptance rate"
    },
    {
      name: "Dr. Amanda Foster",
      role: "Research Director",
      company: "AI Ethics Institute",
      content: "This tool sets the gold standard for image authentication. The technical accuracy combined with user-friendly interface makes it indispensable.",
      rating: 5,
      results: "Research integrity increased 40%"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For newsrooms, legal firms, and content creators",
      features: [
        "200 image verifications/month",
        "Advanced deepfake detection (99.7% accuracy)",
        "Basic blockchain verification",
        "Standard forensic reports",
        "Social media integration",
        "Email support (24h response)",
        "API access (1K requests/month)",
        "Batch processing (up to 10 images)"
      ],
      popular: true,
      highlight: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "Complete solution for organizations and institutions",
      features: [
        "Unlimited image verifications",
        "All detection types (deepfake, manipulation, style transfer)",
        "Advanced blockchain verification",
        "Court-ready forensic reports",
        "Real-time video analysis",
        "Live camera analysis",
        "Priority phone support (2h response)",
        "Full API access + webhooks",
        "Unlimited batch processing",
        "Custom integrations",
        "Dedicated account manager",
        "Legal consultation included"
      ],
      popular: false,
      highlight: "Enterprise Ready"
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
          <span className="text-purple-600 dark:text-purple-400">AI Image Verification & Forensics</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              #1 Image Forensics Platform
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced Deepfake Detection with 99.7% Accuracy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Blockchain-verified authenticity for legal evidence. Real-time video analysis for moving image content. Court-ready forensic reports for legal proceedings. Protect your organization from synthetic media threats.
            </p>
            
            {/* Detection Showcase */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Advanced Detection Capabilities
              </h3>
              
              <div className="flex justify-center gap-2 mb-6 flex-wrap">
                {detectionTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={activeFeature === type.id ? 'default' : 'outline'}
                    onClick={() => setActiveFeature(type.id)}
                    className="mb-2"
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
              
              <Card className="text-left">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple-600" />
                      {detectionTypes.find(t => t.id === activeFeature)?.name}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {detectionTypes.find(t => t.id === activeFeature)?.accuracy} Accuracy
                    </Badge>
                  </div>
                  <CardDescription>
                    {detectionTypes.find(t => t.id === activeFeature)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Detection Techniques:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {detectionTypes.find(t => t.id === activeFeature)?.techniques.map((technique, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{technique}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
              Start Free Trial - Verify First 10 Images Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Image Authentication Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Professional-grade tools for detecting synthetic media and ensuring content authenticity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how organizations protect themselves from synthetic media threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-purple-600 dark:text-purple-400 font-medium">
                    {useCase.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Common Challenges:</h4>
                      <ul className="space-y-1">
                        {useCase.challenges.map((challenge, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <AlertTriangle className="h-3 w-3 text-red-500 mt-1 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">How We Help:</h4>
                      <ul className="space-y-1">
                        {useCase.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Result: {useCase.results}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real organizations achieving measurable protection from synthetic media threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-purple-600 dark:text-purple-400">{testimonial.company}</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced algorithms and blockchain technology for uncompromising accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Neural Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Advanced deep learning models trained on millions of authentic and synthetic images</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Blockchain className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Blockchain Proof</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Immutable verification records stored on distributed ledger for legal authenticity</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">Lightning-fast analysis with results delivered in under 3 seconds</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Image Verification Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the right level of protection for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-purple-600">
                    {plan.highlight}
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-300">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Protect Your Organization from Synthetic Media Threats
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join industry leaders who trust our advanced deepfake detection and blockchain verification technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Start Free Trial - Verify First 10 Images Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Request Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free trial includes 10 image verifications • No credit card required • Enterprise consulting available
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ImageVerificationSales;
