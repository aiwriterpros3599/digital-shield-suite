
import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';
import { Shield, Bot, Image as ImageIcon, Search, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Brand Protection Toolkit
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to protect digital assets and ensure content authenticity in the age of AI-generated content and digital manipulation.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To empower businesses, content creators, and professionals with cutting-edge tools that protect their intellectual property and verify content authenticity in an increasingly complex digital landscape.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We believe everyone deserves protection from content theft, AI manipulation, and digital fraud while maintaining the ability to create authentic, engaging content.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A digital world where authenticity and creativity are protected, where creators can confidently share their work, and where businesses can maintain their brand integrity without fear of theft or manipulation.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We envision a future where advanced AI protection tools are accessible to everyone, not just large corporations.
              </p>
            </div>
          </div>
        </section>

        {/* Our Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Comprehensive Protection Suite
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI Content Humanizer
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transform AI-generated text to appear naturally written while maintaining quality and meaning. Perfect for content creators who use AI assistance but need human-like output.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI Image Verification Tool
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detect AI-generated images, deepfakes, and digital manipulation using forensic-grade analysis. Essential for media professionals, legal teams, and anyone verifying image authenticity.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Content Theft Scanner
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor the web for unauthorized use of your content and automatically generate DMCA takedown notices. Protect your intellectual property 24/7 with advanced similarity detection.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Who We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Content Creators",
                description: "Bloggers, YouTubers, course creators, and influencers protecting their original content",
                icon: <Users className="h-6 w-6" />
              },
              {
                title: "Digital Agencies",
                description: "Marketing agencies serving clients who need brand protection and content verification",
                icon: <TrendingUp className="h-6 w-6" />
              },
              {
                title: "Publishers & Media",
                description: "News sites, magazines, and media companies ensuring content authenticity",
                icon: <Shield className="h-6 w-6" />
              },
              {
                title: "Legal Professionals",
                description: "IP lawyers, compliance teams, and legal professionals handling digital evidence",
                icon: <Award className="h-6 w-6" />
              }
            ].map((audience, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 dark:text-blue-400">{audience.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Asset Protection",
                description: "We believe everyone's creative work deserves protection from theft and unauthorized use."
              },
              {
                title: "Content Authenticity",
                description: "In an age of AI and deepfakes, verifying content authenticity is more important than ever."
              },
              {
                title: "Privacy & Security",
                description: "Your data and content are protected with enterprise-grade security and privacy measures."
              },
              {
                title: "Accessible Technology",
                description: "Professional-grade tools should be accessible to creators and businesses of all sizes."
              },
              {
                title: "Continuous Innovation",
                description: "We stay ahead of emerging threats with cutting-edge AI and forensic technologies."
              },
              {
                title: "User Empowerment",
                description: "We provide the tools and knowledge you need to protect yourself in the digital world."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Stats */}
        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Trusted by Thousands Worldwide
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50M+</div>
                <div className="text-gray-600 dark:text-gray-300">Content Scans</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.5%</div>
                <div className="text-gray-600 dark:text-gray-300">Detection Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Protection</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Have questions about our mission or want to learn more about how we can help protect your digital assets?
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              JLawrence Marketing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Email: support@brandprotectiontoolkit.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Website: https://brandprotectiontoolkit.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
