import React from 'react';
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
  Clock,
  Upload,
  Gavel,
  MessageSquare,
  BarChart3,
  Zap
} from 'lucide-react';

const ContentTheftDetectionSales = () => {
  const [roiCalculation, setRoiCalculation] = useState({
    contentValue: 1000,
    theftInstances: 5,
    potentialSavings: 5000
  });

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Language Detection",
      description: "Catch global content theft across 40+ languages with advanced translation detection"
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Automated DMCA Filing",
      description: "Save 10+ hours per case with one-click DMCA generation and automated sending"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Legal Case Management",
      description: "Complete case tracking from detection to resolution with evidence preservation"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Brand Monitoring",
      description: "Track brand mentions across all major social platforms with sentiment analysis"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Evidence Blockchain",
      description: "Immutable proof preservation for legal proceedings with timestamp verification"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Domain Authority Assessment",
      description: "Evaluate infringing sites and prioritize enforcement based on impact scores"
    }
  ];

  const monitoringCapabilities = [
    {
      platform: "Social Media Monitoring",
      scope: "Facebook, Twitter, LinkedIn, Instagram, TikTok, YouTube",
      features: ["Real-time content scanning", "Sentiment analysis", "Viral detection alerts", "Brand mention tracking"]
    },
    {
      platform: "Web Content Scanning",
      scope: "Blogs, news sites, e-commerce platforms, forums",
      features: ["Paraphrasing detection", "Translation theft identification", "Image content matching", "SEO impact analysis"]
    },
    {
      platform: "Professional Networks",
      scope: "Academia, business publications, industry forums",
      features: ["Citation analysis", "Plagiarism scoring", "Professional reputation monitoring", "Authority source tracking"]
    }
  ];

  const targetAudiences = [
    {
      title: "Content Creators & Influencers",
      subtitle: "Bloggers, YouTubers, Course Creators",
      challenges: ["Content scraping and republishing", "Revenue loss from stolen content", "Brand reputation damage"],
      benefits: ["Protect income streams", "Maintain content exclusivity", "Build stronger brand authority"],
      results: "85% reduction in content theft incidents"
    },
    {
      title: "Marketing Agencies",
      subtitle: "Digital Marketing, Content Marketing, SEO Agencies",
      challenges: ["Client content being stolen", "Competitor content theft", "Brand messaging theft"],
      benefits: ["Client IP protection", "Competitive advantage maintenance", "Brand consistency enforcement"],
      results: "10+ hours saved per case with automated DMCA"
    },
    {
      title: "Publishers & Media",
      subtitle: "News Sites, Magazines, Online Publications",
      challenges: ["Article syndication without permission", "Image and content theft", "Attribution issues"],
      benefits: ["Editorial integrity protection", "Revenue stream security", "Copyright enforcement automation"],
      results: "95% success rate in content takedowns"
    },
    {
      title: "Legal Professionals",
      subtitle: "IP Lawyers, Compliance Teams, Corporate Legal",
      challenges: ["Manual monitoring inefficiency", "Evidence collection difficulties", "Complex IP enforcement"],
      benefits: ["Automated evidence gathering", "Streamlined case management", "Blockchain proof preservation"],
      results: "60% faster case resolution time"
    }
  ];

  const legalTools = [
    {
      name: "Automated DMCA Filing",
      description: "One-click generation and sending of legally compliant DMCA takedown notices",
      timesSaved: "10+ hours per case",
      successRate: "94%"
    },
    {
      name: "Legal Case Management",
      description: "Complete tracking from detection to resolution with evidence timeline",
      timesSaved: "15+ hours per case",
      successRate: "89%"
    },
    {
      name: "Evidence Blockchain Preservation",
      description: "Immutable proof storage with legal-grade timestamp verification",
      timesSaved: "5+ hours per case",
      successRate: "100%"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Thompson",
      role: "IP Attorney",
      company: "Thompson & Associates",
      content: "The automated DMCA filing saves us 10+ hours per case while maintaining 94% success rate. The blockchain evidence storage is revolutionary for IP litigation.",
      rating: 5,
      results: "94% DMCA success rate, 10+ hours saved per case"
    },
    {
      name: "Elena Rodriguez",
      role: "Content Strategy Director", 
      company: "Creative Digital Agency",
      content: "Multi-language detection caught content theft we never would have found manually. Our client's content is now protected globally across 40+ languages.",
      rating: 5,
      results: "Global content protection across 40+ languages"
    },
    {
      name: "James Wilson", 
      role: "Chief Marketing Officer",
      company: "SaaS Growth Partners",
      content: "The brand monitoring across social platforms gives us complete visibility. We catch competitor theft attempts before they damage our reputation.",
      rating: 5,
      results: "Complete brand protection across all platforms"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "For agencies, publishers, and growing businesses",
      features: [
        "Monitor up to 500 pieces of content",
        "Daily scans across all platforms",
        "Multi-language detection (40+ languages)",
        "Basic DMCA templates",
        "Social media monitoring",
        "Email alerts and reporting",
        "API access (5K requests/month)",
        "Evidence preservation (1 year)",
        "Standard support (24h response)"
      ],
      popular: true,
      highlight: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month", 
      description: "Complete IP protection for organizations",
      features: [
        "Unlimited content monitoring",
        "Real-time scanning and alerts",
        "Advanced multi-language detection",
        "Automated DMCA filing system",
        "Complete legal case management",
        "Brand mention sentiment analysis",
        "Evidence blockchain preservation",
        "Domain authority assessment",
        "Custom legal document generation",
        "Full API access + webhooks",
        "Priority phone support (2h response)",
        "Dedicated account manager",
        "Legal consultation included"
      ],
      popular: false,
      highlight: "Enterprise Ready"
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
          <span className="text-green-600 dark:text-green-400">Content Theft Detection & IP Protection</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              #1 IP Protection Platform
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Automated DMCA Filing Saves 10+ Hours Per Case
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Multi-language detection catches global content theft. Legal case management from detection to resolution. Brand monitoring across all major social platforms. Complete IP protection with blockchain evidence preservation.
            </p>
            
            {/* Enhanced Monitoring Dashboard Preview */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Comprehensive Protection Dashboard
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Protected Content</span>
                    <Shield className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">2,847</p>
                  <p className="text-xs text-gray-500">Across 40+ languages</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Theft Detected</span>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">47</p>
                  <p className="text-xs text-gray-500">This month</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">DMCA Filed</span>
                    <FileText className="h-4 w-4 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">44</p>
                  <p className="text-xs text-gray-500">94% success rate</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cases Resolved</span>
                    <Gavel className="h-4 w-4 text-purple-500" />
                  </div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">38</p>
                  <p className="text-xs text-gray-500">60% faster resolution</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg">
              Start Protecting Your IP Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Content Theft Impact */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Content Theft Costs More Than You Think
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every day, your valuable content is being stolen, republished, and monetized by others. This impacts your revenue, search rankings, and brand reputation across global markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Revenue Loss", value: "$75K+", description: "Average annual loss from global content theft", color: "red" },
              { title: "SEO Impact", value: "45%", description: "Drop in search rankings from duplicate content", color: "orange" },
              { title: "Brand Damage", value: "68%", description: "Of consumers lose trust due to content inconsistency", color: "yellow" },
              { title: "Legal Costs", value: "$25K+", description: "Average cost per IP litigation case", color: "purple" }
            ].map((stat, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center">
                <CardHeader>
                  <CardTitle className={`text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>{stat.value}</CardTitle>
                  <CardDescription className="font-semibold text-gray-900 dark:text-white">{stat.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Complete IP Protection Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced technology to detect, monitor, enforce, and resolve content theft globally
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Monitoring Capabilities */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Monitoring Scope
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Track your content across every major platform and detect theft before it impacts your business
            </p>
          </div>
          
          <div className="space-y-6">
            {monitoringCapabilities.map((capability, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    {capability.platform}
                  </CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400 font-medium">
                    {capability.scope}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {capability.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Legal Tools Showcase */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Legal Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Streamline IP enforcement with automated legal processes and case management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {legalTools.map((tool, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="h-5 w-5 text-blue-600" />
                    {tool.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Time Saved:</span>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {tool.timesSaved}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Success Rate:</span>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {tool.successRate}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Audience Sections */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tailored solutions delivering measurable results across different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    {audience.title}
                  </CardTitle>
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
                    <div className="pt-2 border-t">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        Result: {audience.results}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced ROI Calculator */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your IP Protection ROI
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how much you could save with automated DMCA filing and legal case management
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center">IP Protection ROI Calculator</CardTitle>
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
                  <div className="text-center space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Potential Monthly Savings</p>
                      <p className="text-4xl font-bold text-green-600 dark:text-green-400">
                        ${(roiCalculation.contentValue * roiCalculation.theftInstances * 0.4).toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Based on 40% revenue recovery from automated IP protection
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-200 dark:border-green-800">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Time Saved</p>
                        <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                          {roiCalculation.theftInstances * 10}+ hours/month
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Legal Cost Reduction</p>
                        <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                          ${(roiCalculation.theftInstances * 2500).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Results from Legal Professionals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real case studies showing measurable improvement in IP protection and enforcement
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
                    <p className="text-sm text-green-600 dark:text-green-400">{testimonial.company}</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Complete IP Protection Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choose the right level of protection for your content and intellectual property
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500 scale-105' : ''} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-600">
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
                    Start Protection Trial
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
              Stop Losing Money to Content Thieves Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of creators, agencies, and legal professionals protecting their valuable intellectual property with automated enforcement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg">
                Start Free Trial - Protect Your First 10 Items Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Schedule Legal Consultation
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free trial includes 10 content monitoring • Legal consultation available • No long-term contracts
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContentTheftDetectionSales;
