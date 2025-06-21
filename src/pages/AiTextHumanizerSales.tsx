
import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Award
} from 'lucide-react';

const AiTextHumanizerSales = () => {
  const [activeDemo, setActiveDemo] = useState('before');

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Bypass AI Detection",
      description: "Advanced algorithms that make AI content undetectable by all major AI detectors"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Multiple Writing Styles",
      description: "Academic, Creative, Professional, Casual, and Marketing tone options"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Analysis",
      description: "Instant AI detection scoring with side-by-side comparison"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Maintains keyword density and SEO value while humanizing content"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Manager",
      company: "TechCorp",
      content: "This tool saved us hours of manual editing. Our AI-generated content now passes all detection tests.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Digital Marketing Specialist",
      company: "GrowthLab",
      content: "Game-changer for our content strategy. We can scale content production without sacrificing quality.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["10,000 words/month", "Basic humanization", "3 writing styles", "Email support"],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: ["50,000 words/month", "Advanced humanization", "All writing styles", "Priority support", "API access"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: ["Unlimited words", "Custom training", "White-label option", "Dedicated support", "Custom integrations"],
      popular: false
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
          <span className="text-blue-600 dark:text-blue-400">AI Text Humanizer</span>
        </div>
      </div>

      <main className="container mx-auto px-6 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              #1 AI Text Humanizer
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Text Humanizer - Make AI Content Undetectable
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Transform AI-generated text to bypass detection tools. Our advanced humanization technology makes ChatGPT, Claude & other AI content undetectable while maintaining quality and meaning.
            </p>
            
            {/* Demo Section */}
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
                    <p className="text-gray-700 dark:text-gray-300">
                      Artificial intelligence has revolutionized numerous industries by providing innovative solutions that enhance efficiency and productivity. This technology enables organizations to process vast amounts of data and derive meaningful insights.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">AI Detection Score:</span>
                      <Badge variant="secondary">12% AI Generated</Badge>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      AI has completely transformed how we work across countless industries, offering fresh approaches that boost both efficiency and results. Companies now harness this powerful technology to sift through enormous data sets and uncover valuable insights.
                    </p>
                  </>
                )}
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
              Try AI Humanizer Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The AI Detection Problem
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p>AI detectors are becoming more sophisticated, flagging legitimate AI-assisted content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p>Academic institutions and platforms penalize AI-generated content</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p>Content authenticity concerns affect brand credibility</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Solution
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <p>Advanced humanization algorithms that preserve meaning and quality</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <p>Multiple writing styles to match your content needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <p>Real-time detection scoring to ensure effectiveness</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Humanization Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create undetectable, high-quality content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* How It Works */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple 3-step process to humanize your AI content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Paste Your Content", description: "Copy and paste your AI-generated text into our editor" },
              { step: "2", title: "Choose Style", description: "Select from Academic, Creative, Professional, Casual, or Marketing styles" },
              { step: "3", title: "Get Humanized Text", description: "Receive undetectable, high-quality humanized content instantly" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Flexible pricing for individuals and teams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-600">
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

        {/* Testimonials */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied content creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How accurate is the AI detection bypass?",
                answer: "Our humanization technology achieves a 95%+ success rate in bypassing major AI detectors including GPTZero, Originality.ai, and Turnitin."
              },
              {
                question: "Does humanization affect content quality?",
                answer: "No, our advanced algorithms preserve the original meaning and quality while making the text sound more natural and human-written."
              },
              {
                question: "What types of content can be humanized?",
                answer: "Our tool works with all types of text content including articles, essays, marketing copy, academic papers, and social media posts."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a free trial with 1,000 words to test our humanization capabilities before choosing a paid plan."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Make Your AI Content Undetectable?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of content creators who trust our AI humanization technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                View Live Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AiTextHumanizerSales;
