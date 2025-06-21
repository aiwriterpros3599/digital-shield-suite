
import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Last Updated:</strong> December 2024<br />
            <strong>Effective Date:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Brand Protection Toolkit ("we," "us," or "our") operates the website https://brandprotectiontoolkit.com and provides a comprehensive 3-in-1 SaaS suite for digital asset protection and content authenticity verification.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, which include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
              <li>AI Content Humanizer - Transform AI-generated text to bypass AI detection</li>
              <li>AI Image Verification Tool - Detect AI-generated images and deepfakes</li>
              <li>Content Theft Scanner - Find stolen/plagiarized content across the web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Personal Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We collect the following personal information:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>Account registration data (email address, password, name)</li>
              <li>Payment information (processed securely via Stripe/PayPal)</li>
              <li>Contact information for customer support</li>
              <li>Subscription and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Usage Data</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li>Tool interaction data and usage analytics</li>
              <li>Content uploaded for analysis (temporarily processed and deleted)</li>
              <li>IP addresses and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 File Uploads</h3>
            <p className="text-gray-700 dark:text-gray-300">
              When you use our services, you may upload text content or images for analysis. This content is processed temporarily and is not permanently stored on our servers beyond the time necessary to provide the requested service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">We use collected information for:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Providing and maintaining our services</li>
              <li>Processing your transactions and managing subscriptions</li>
              <li>Improving our services and user experience</li>
              <li>Sending service-related communications</li>
              <li>Providing customer support</li>
              <li>Preventing fraud and ensuring security</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>End-to-end encryption for data transmission</li>
              <li>Secure cloud hosting with enterprise-grade security</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Data backup and recovery procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We work with trusted third-party services that may have access to your information:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Payment Processors:</strong> Stripe and PayPal for secure payment processing</li>
              <li><strong>AI Detection APIs:</strong> For content analysis and verification services</li>
              <li><strong>Cloud Hosting:</strong> For reliable service delivery and data storage</li>
              <li><strong>Analytics:</strong> For service improvement and usage insights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Your Rights (GDPR Compliance)</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you are located in the European Union, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Access:</strong> Request access to your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
              <li><strong>Restriction:</strong> Request restriction of data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Data Retention</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We retain your personal information only as long as necessary to provide our services and comply with legal obligations. Content uploaded for analysis is deleted immediately after processing. Account information is retained while your account is active and for a reasonable period after account closure for legal and business purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our services are not intended for users under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For questions about this Privacy Policy or to exercise your rights, contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>JLawrence Marketing</strong><br />
                Email: support@brandprotectiontoolkit.com<br />
                Website: https://brandprotectiontoolkit.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
