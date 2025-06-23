import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/landing/Footer';
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Target,
  Star,
  Users,
  TrendingUp,
  Award,
  Palette,
  Settings,
  Search,
  BookOpen,
  MessageSquare,
  Globe
} from 'lucide-react';

const AiTextHumanizerSales = () => {
  const [activeDemo, setActiveDemo] = useState('before');
  const [activeStyle, setActiveStyle] = useState('professional');

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Multiple Writing Styles",
      description: "Academic, Creative, Professional, and Casual modes with infinite tone adjustments"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization Mode",
      description: "Preserves target keywords while humanizing content for better search rankings"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Built-in Plagiarism Detection",
      description: "Real-time originality checking ensures your content is unique and authentic"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Grammar & Readability Scoring",
      description: "Professional scoring with actionable improvements for better content quality"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Version control, history tracking, and seamless team workflow management"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Batch Processing",
      description: "Process multiple documents simultaneously with API integration capabilities"
    }
  ];

  const writingStyles = [
    {
      name: 'Academic',
      description: 'Formal, research-focused tone with precise terminology',
      example: 'The empirical evidence substantiates the hypothesis that artificial intelligence significantly enhances operational efficiency across diverse industrial sectors.'
    },
    {
      name: 'Creative',
      description: 'Engaging, imaginative language with vivid expressions',
      example: 'AI has burst onto the scene like a digital renaissance, painting new possibilities across every industry canvas with bold, innovative strokes.'
    },
    {
      name: 'Professional',
      description: 'Clear, business-appropriate communication',
      example: 'Artificial intelligence delivers measurable improvements in operational efficiency, helping businesses streamline processes and achieve better results.'
    },
    {
      name: 'Casual',
      description: 'Conversational, friendly tone for broad audiences',
      example: 'AI is pretty amazing at making work easier and more efficient. Companies everywhere are seeing real benefits from using these smart tools.'
    }
  ];

  const useCases = [
    {
      title: "Content Marketing Agencies",
      subtitle: "Scale content production while maintaining quality",
      challenges: ["High content volume demands", "Maintaining brand voice consistency", "Meeting tight deadlines"],
      benefits: ["10x faster content production", "Consistent brand voice across all content", "Reduced revision cycles"]
    },
    {
      title: "SEO Professionals",
      subtitle: "Create search-optimized content at scale",
      challenges: ["Keyword density optimization", "Content freshness requirements", "Avoiding AI detection penalties"],
      benefits: ["Keyword preservation technology", "Fresh content variations", "100% undetectable humanization"]
    },
    {
      title: "Academic Writers",
      subtitle: "Enhance research communication",
      challenges: ["Complex concept simplification", "Citation integration", "Academic tone consistency"],
      benefits: ["Academic style optimization", "Citation-friendly formatting", "Scholarly tone enhancement"]
    },
    {
      title: "Business Communications",
      subtitle: "Professional internal and external communications",
      challenges: ["Tone appropriateness", "Message clarity", "Brand consistency"],
      benefits: ["Professional tone adjustment", "Clear message optimization", "Brand voice maintenance"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Marketing Director",
      company: "TechCorp Solutions",
      content: "The multiple writing styles feature is a game-changer. We can match any client's brand voice perfectly while scaling our content production 5x.",
      rating: 5,
      results: "5x content production increase"
    },
    {
      name: "Dr. Michael Chen",
      role: "Research Communications Lead",
      company: "Stanford Research Institute",
      content: "The academic writing mode produces publication-ready content that maintains scientific accuracy while improving readability for broader audiences.",
      rating: 5,
      results: "40% improvement in research accessibility"
    },
    {
      name: "Lisa Rodriguez",
      role: "SEO Strategy Manager",
      company: "Digital Growth Agency",
      content: "SEO optimization mode is incredible - it preserves our target keywords while making AI content completely undetectable. Our rankings improved 30%.",
      rating: 5,
      results: "30% search ranking improvement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      <BlogHeader />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Home</span>
          <ArrowRight className="h-3 w-3" />
          <span>Tools</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-blue-600 dark:text-blue-400">AI Text Humanizer Pro</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              #1 AI Text Humanizer Pro
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Transform AI Content into Authentic, Human-Like Text
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Advanced style control with 4 writing modes and infinite tone adjustments. Built-in SEO optimization preserves your target keywords while real-time plagiarism detection ensures originality.
            </p>
            
            {/* Enhanced Demo Section */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <Button 
                  variant={activeDemo === 'before' ? 'default' : 'outline'}
                  onClick={() => setActiveDemo('before')}
                >
                  Before Humanization
                </Button>
                <Button 
                  variant={activeDemo === 'after' ? 'default' : 'outline'}
                  onClick={() => setActiveDemo('after')}
                >
                  After Humanization
                </Button>
              </div>
              
              <div className="text-left bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                {activeDemo === 'before' ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">AI Detection Score:</span>
                      <Badge variant="destructive">89% AI Generated</Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Artificial intelligence has revolutionized numerous industries by providing innovative solutions that enhance efficiency and productivity. This technology enables organizations to process vast amounts of data and derive meaningful insights.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Grammar Score: 85%</span>
                      <span>Readability: Basic</span>
                      <span>SEO: Not optimized</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">AI Detection Score:</span>
                      <Badge variant="secondary">12% AI Generated</Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      AI has completely transformed how we work across countless industries, offering fresh approaches that boost both efficiency and results. Companies now harness this powerful technology to sift through enormous data sets and uncover valuable insights that drive strategic decisions.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-green-600">
                      <span>Grammar Score: 96%</span>
                      <span>Readability: Excellent</span>
                      <span>SEO: Optimized</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
              Start Free Trial - No Credit Card Required
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Writing Styles Showcase */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Style Control with 4 Writing Modes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Each style adapts your content perfectly for different audiences and purposes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {writingStyles.map((style) => (
                <Button
                  key={style.name}
                  variant={activeStyle === style.name.toLowerCase() ? 'default' : 'outline'}
                  onClick={() => setActiveStyle(style.name.toLowerCase())}
                  className="mb-2"
                >
                  {style.name}
                </Button>
              ))}
            </div>
            
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  {writingStyles.find(s => s.name.toLowerCase() === activeStyle)?.name} Style
                </CardTitle>
                <CardDescription>
                  {writingStyles.find(s => s.name.toLowerCase() === activeStyle)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{writingStyles.find(s => s.name.toLowerCase() === activeStyle)?.example}"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Grammar Scoring with Actionable Improvements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Advanced features that ensure your content meets the highest standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
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
              Trusted by Professionals Across Industries
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how different industries leverage our advanced humanization technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
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
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
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
              Real Results from Real Professionals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the measurable impact our tool has on content quality and productivity
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
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                    <Badge className="mt-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your AI Content?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of professionals who trust our advanced humanization technology for authentic, high-quality content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                Start Free Trial - No Credit Card Required
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              14-day free trial • No setup fees • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiTextHumanizerSales;
