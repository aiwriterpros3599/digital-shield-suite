
import React, { useEffect, useState } from 'react';
import { CheckCircle, Download, Play, Shield, Bot, Search, Image as ImageIcon, Users, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogHeader } from '@/components/blog/BlogHeader';

const PDF_URL = '/brand-protection-checklist.pdf';

const ThankYou = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [timer, setTimer] = useState(180); // 3 days in minutes for demo

  const testimonials = [
    {
      text: "This checklist saved my business from content theft. I implemented every step and now I sleep better knowing my content is protected.",
      author: "Sarah Mitchell, Content Creator"
    },
    {
      text: "Finally, a comprehensive guide that actually works. The AI detection strategies alone are worth their weight in gold.",
      author: "Marcus Chen, Digital Marketer"
    },
    {
      text: "As a legal professional, I can confirm this checklist covers all the essential protection strategies businesses need.",
      author: "Jennifer Torres, IP Attorney"
    }
  ];

  const resources = [
    {
      title: "Complete AI Detection Guide",
      desc: "Learn advanced techniques to identify AI-generated content with 99% accuracy",
      link: "/blog/ai-detection-guide",
      thumb: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=64&h=64&fit=crop&crop=center"
    },
    {
      title: "Image Forensics Masterclass",
      desc: "Professional techniques for detecting manipulated images and deepfakes",
      link: "/blog/image-forensics-guide",
      thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=64&h=64&fit=crop&crop=center"
    },
    {
      title: "Content Theft Prevention",
      desc: "Step-by-step guide to protecting your intellectual property online",
      link: "/blog/content-theft-prevention",
      thumb: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=64&h=64&fit=crop&crop=center"
    },
    {
      title: "DMCA Takedown Guide",
      desc: "Complete walkthrough for filing effective DMCA takedown notices",
      link: "/blog/dmca-takedown-guide",
      thumb: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=64&h=64&fit=crop&crop=center"
    }
  ];

  const faqs = [
    {
      q: "How long does it take to implement the checklist?",
      a: "Most users complete the basic protection steps within 2-3 hours. Advanced strategies may take additional time depending on your content volume."
    },
    {
      q: "Do I need technical knowledge to use this checklist?",
      a: "No technical expertise required! The checklist includes step-by-step instructions for users of all skill levels."
    },
    {
      q: "How often should I review my protection strategy?",
      a: "We recommend reviewing and updating your protection measures monthly, as new threats and tools emerge regularly."
    },
    {
      q: "Can this checklist help with legal issues?",
      a: "While the checklist covers legal protection strategies, it's not a substitute for professional legal advice. Consult an IP attorney for complex cases."
    }
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setTestimonialIdx((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const countdown = setInterval(
      () => setTimer((t) => (t > 0 ? t - 1 : 0)),
      60000
    );
    return () => clearInterval(countdown);
  }, []);

  const hours = Math.floor(timer / 60);
  const minutes = timer % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="w-full max-w-2xl mx-auto text-center mb-10">
          <CheckCircle className="mx-auto text-green-500 w-16 h-16 animate-bounce mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            🎉 Success! Your Brand Protection Checklist is Ready
          </h1>
          <p className="text-lg mb-4">
            Your comprehensive 25-point brand protection checklist has been sent to your email
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow mb-4"
            onClick={() => window.open(PDF_URL, '_blank')}
          >
            <Download className="inline w-5 h-5 mr-2" /> Download PDF Again
          </Button>
          <div className="flex flex-col items-center gap-2 mt-6">
            <img
              src="/checklist-cover.png"
              alt="PDF Preview"
              className="w-40 h-56 rounded-lg shadow-lg border-2 border-blue-200 mx-auto"
              loading="lazy"
            />
            <span className="italic text-gray-500 text-sm mt-2">
              Your complete brand protection guide
            </span>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 mt-6 shadow flex items-center gap-3 justify-center max-w-md mx-auto">
            <Star className="text-yellow-400 w-6 h-6" />
            <span className="font-medium">
              "This saved my business thousands!"
            </span>
            <span className="text-gray-500">- Verified User</span>
          </div>
        </section>

        {/* Value Reinforcement */}
        <section className="w-full max-w-3xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">What You Just Received</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl">🛡️</span>
              <span className="font-medium mt-2">
                AI Content Protection Strategies
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">📸</span>
              <span className="font-medium mt-2">
                Image Authenticity Verification
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl">🔍</span>
              <span className="font-medium mt-2">
                Content Theft Prevention
              </span>
            </div>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-300 mb-2">
            Implementation time: 2-3 hours
          </div>
          <div className="text-center text-green-600 font-semibold mb-2">
            Potential savings: $10,000+ in prevented losses
          </div>
        </section>

        {/* Next Steps - Gentle Upsell */}
        <section className="w-full max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">
            Ready to Automate Your Protection?
          </h2>
          <div className="text-gray-600 dark:text-gray-300 mb-4">
            While the checklist provides excellent manual protection, our automated tools can monitor and protect your content 24/7
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
              <Bot className="w-10 h-10 text-blue-600 mb-2" />
              <div className="font-bold mb-1">AI Content Detector</div>
              <div className="text-sm text-gray-500">
                Scan unlimited content instantly
                <br />
                99.5% accuracy rate
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
              <ImageIcon className="w-10 h-10 text-blue-600 mb-2" />
              <div className="font-bold mb-1">Image Forensics Tool</div>
              <div className="text-sm text-gray-500">
                Detect manipulated images & deepfakes
                <br />
                Forensic-grade analysis
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center">
              <Shield className="w-10 h-10 text-blue-600 mb-2" />
              <div className="font-bold mb-1">Content Theft Scanner</div>
              <div className="text-sm text-gray-500">
                Monitor the web for stolen content
                <br />
                Instant DMCA generation
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow text-lg"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Play className="inline w-5 h-5 mr-2" /> Watch Demo
            </Button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              No credit card required
            </span>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">Customer Success Stories</h2>
          <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-4 flex flex-col items-center">
            <div className="italic text-lg text-blue-700 mb-2">
              "{testimonials[testimonialIdx].text}"
            </div>
            <div className="text-gray-500">
              - {testimonials[testimonialIdx].author}
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === testimonialIdx
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                  onClick={() => setTestimonialIdx(i)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center text-gray-600 dark:text-gray-300">
            <div>
              <div className="text-2xl font-bold text-blue-600">10,000+</div>
              <div className="text-sm">Brands Protected</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">50M+</div>
              <div className="text-sm">Content Scans Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm">Uptime Guarantee</div>
            </div>
          </div>
        </section>

        {/* Resource Hub */}
        <section className="w-full max-w-4xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">
            More Free Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex gap-4 items-center"
              >
                <img
                  src={r.thumb}
                  alt={r.title}
                  className="w-16 h-16 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold mb-1">{r.title}</div>
                  <div className="text-sm text-gray-500 mb-2">
                    {r.desc}
                  </div>
                  <a
                    href={r.link}
                    className="text-blue-600 underline font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full max-w-3xl mx-auto mb-10">
          <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {faqs.map((faq, i) => (
              <details key={i} className="py-4 group">
                <summary className="font-medium cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Email Sequence Teaser */}
        <section className="w-full max-w-2xl mx-auto mb-10 text-center">
          <h2 className="text-xl font-semibold mb-2">What's Coming Next</h2>
          <div className="text-gray-600 dark:text-gray-300 mb-2">
            Over the next week, you'll receive additional resources:
          </div>
          <ul className="text-left inline-block mx-auto list-disc list-inside text-gray-700 dark:text-gray-200 mb-2">
            <li>
              <b>Day 1:</b> Quick Start Implementation Guide
            </li>
            <li>
              <b>Day 3:</b> Advanced Protection Techniques
            </li>
            <li>
              <b>Day 5:</b> Real-World Case Studies
            </li>
            <li>
              <b>Day 7:</b> Exclusive Tool Access Offer
            </li>
          </ul>
        </section>

        {/* Engagement Features */}
        <section className="w-full max-w-2xl mx-auto mb-10 flex flex-col items-center gap-4">
          <div className="w-full bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 flex items-center gap-4 shadow">
            <div className="flex-1">
              <div className="font-semibold text-blue-700">
                You're One Step Closer to Complete Protection
              </div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">
                Free trial bonus expires in {hours}h {minutes}m
              </div>
            </div>
            <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-2 bg-blue-600"
                style={{ width: `${(timer / 180) * 100}%` }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ThankYou;
