
import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Globe, 
  AlertTriangle,
  Star,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  FileText,
  Eye,
  Clock
} from 'lucide-react';

const ContentTheftDetectionSales = () => {
  const [roiCalculation, setRoiCalculation] = useState({
    contentValue: 1000,
    theftInstances: 5,
    potentialSavings: 5000
  });

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Advanced Similarity Detection",
      description: "AI-powered algorithms detect exact matches, paraphrasing, and translation theft"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Automated Monitoring",
      description: "Continuous web scanning to catch content theft as it happens"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Web Coverage",
      description: "Monitors billions of web pages, social media, and content platforms"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "DMCA Automation",
      description: "Automatically generate and send DMCA takedown notices"
    }
  ];

  const targetAudiences = [
    {
      title: "Content Creators",
      subtitle: "Bloggers, YouTubers, Course Creators",
      challenges: ["Content scraping and republishing", "Revenue loss from stolen content", "Brand reputation damage"],
      benefits: ["Protect income streams", "Maintain content exclusivity", "Build stronger brand authority"]
    },
    {
      title: "Businesses",
      subtitle: "Marketing Agencies, E-commerce, SaaS",
      challenges: ["Competitors stealing marketing content", "Product descriptions being copied", "Brand messaging theft"],
      benefits: ["Competitive advantage protection", "Brand consistency", "Legal compliance"]
    },
    {
      title: "Publishers",
      subtitle: "News Sites, Magazines, Academic",
      challenges: ["Article syndication without permission", "Image and content theft", "Citation and attribution issues"],
      benefits: ["Editorial integrity", "Revenue protection", "Copyright enforcement"]
    },
    {
      title: "Legal Professionals",
      subtitle: "IP Lawyers, Compliance Teams",
      challenges: ["Manual monitoring inefficiency", "Evidence collection difficulties", "Complex IP enforcement"],
      benefits: ["Automated evidence gathering", "Streamlined enforcement", "Better client outcomes"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$49",
      period: "/month",
      features: ["Monitor up to 50 pieces of content", "Weekly scans", "Basic reporting", "Email alerts", "DMCA templates"],
      popular: false
    },
    {
      name: "Business",
      price: "$149",
      period: "/month",
      features: ["Monitor up to 500 pieces of content", "Daily scans", "Advanced analytics", "Real-time alerts", "Automated DMCA", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      features: ["Unlimited content monitoring", "Real-time scanning", "Custom reports", "Dedicated support", "Legal consultation", "White-label option"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-slate-900 dark:via-green-900 dark:to-emerald-900">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Home</span>
          <ArrowRight className="h-3 w-3" />
          <span>Tools</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-green-600 dark:text-green-400">Content Theft Detection</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              #1 Content Protection Platform
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Content Theft Detection - Protect Your Intellectual Property
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Comprehensive content protection tool. Detect plagiarism, monitor content theft & generate DMCA notices. Protect your intellectual property 24/7 with automated monitoring and enforcement.
            </p>
            
            {/* Monitoring Dashboard Preview */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Monitor & Protect Your Content 24/7
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Protected Content</span>
                    <Shield className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">1,247</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Theft Detected</span>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">23</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">DMCA Sent</span>
                    <FileText className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">18</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg">
              Start Protecting Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Content Protection Challenges */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Content Theft is Costing You Money
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every day, your valuable content is being stolen, republished, and monetized by others. This damages your brand, reduces your search rankings, and directly impacts your revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Revenue Loss", value: "$50K+", description: "Average annual loss from content theft" },
              { title: "SEO Impact", value: "40%", description: "Drop in search rankings from duplicate content" },
              { title: "Brand Damage", value: "73%", description: "Of consumers lose trust due to content inconsistency" },
              { title: "Time Wasted", value: "20hrs", description: "Weekly hours spent on manual monitoring" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-red-600 dark:text-red-400">{stat.value}</CardTitle>
                  <CardDescription className="font-semibold text-gray-900 dark:text-white">{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Protection Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced technology to detect, monitor, and stop content theft
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
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

        {/* Target Audience Sections */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Every Content Creator
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tailored solutions for different industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{audience.title}</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400 font-medium">
                    {audience.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Common Challenges:</h4>
                      <ul className="space-y-1">
                        {audience.challenges.map((challenge, idx) => (
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
                        {audience.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how much you could save by protecting your content
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">ROI Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Monthly Content Value
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        value={roiCalculation.contentValue}
                        onChange={(e) => setRoiCalculation({...roiCalculation, contentValue: parseInt(e.target.value) || 0})}
                        className="pl-10 w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Theft Instances/Month
                    </label>
                    <input
                      type="number"
                      value={roiCalculation.theftInstances}
                      onChange={(e) => setRoiCalculation({...roiCalculation, theftInstances: parseInt(e.target.value) || 0})}
                      className="w-full p-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Potential Monthly Savings</p>
                    <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                      ${(roiCalculation.contentValue * roiCalculation.theftInstances * 0.3).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      Based on 30% revenue recovery from stopped content theft
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Monitoring Process */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How Our Protection Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Automated 4-step process to protect your content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Content Registration", description: "Add your content URLs or upload files for monitoring", icon: <Upload className="h-6 w-6" /> },
              { step: "2", title: "Web Scanning", description: "Our AI scans billions of web pages for matches", icon: <Search className="h-6 w-6" /> },
              { step: "3", title: "Theft Detection", description: "Advanced algorithms identify exact and paraphrased copies", icon: <Eye className="h-6 w-6" /> },
              { step: "4", title: "Automated Enforcement", description: "Generate and send DMCA notices automatically", icon: <FileText className="h-6 w-6" /> }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Protection Level
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive content protection for every budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
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
                    Start Protection
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
              Stop Losing Money to Content Thieves
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of creators and businesses protecting their valuable content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContentTheftDetectionSales;
