
import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Last Updated:</strong> December 2024<br />
            <strong>Effective Date:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By accessing or using Brand Protection Toolkit ("Service"), operated by JLawrence Marketing ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Service.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our Service provides a comprehensive 3-in-1 SaaS suite including AI Content Humanizer, AI Image Verification Tool, and Content Theft Scanner at https://brandprotectiontoolkit.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. User Eligibility</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To use our Service, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Be at least 18 years old</li>
              <li>Have the legal capacity to enter into contracts</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Service Description</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Brand Protection Toolkit provides the following services:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Content Humanizer</h3>
                <p className="text-gray-700 dark:text-gray-300">Transform AI-generated text to appear more human-like and bypass AI detection tools.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Image Verification Tool</h3>
                <p className="text-gray-700 dark:text-gray-300">Detect AI-generated images, deepfakes, and digital manipulation using forensic-grade analysis.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Theft Scanner</h3>
                <p className="text-gray-700 dark:text-gray-300">Monitor the web for unauthorized use of your content and generate DMCA takedown notices.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Subscription Plans and Pricing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We offer three subscription tiers:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Basic Plan ($67/month):</strong> Standard access to all tools with usage limits</li>
              <li><strong>Pro Plan ($97/month):</strong> Enhanced features and higher usage limits</li>
              <li><strong>Business Plan ($197/month):</strong> Premium features, priority support, and commercial usage rights</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              Pricing is subject to change with 30 days' notice. All fees are non-refundable except as required by law or as specified in our refund policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Usage Limits and Fair Use</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Each subscription tier includes specific usage limits. Fair use policies apply to prevent abuse:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Automated or excessive usage may result in service limitations</li>
              <li>Commercial usage is permitted only with appropriate subscription tiers</li>
              <li>Reselling or redistributing our services is prohibited</li>
              <li>Account sharing is limited to authorized users within your organization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Prohibited Uses</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">You agree not to use our Service for:</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Illegal activities or content that violates laws or regulations</li>
              <li>Harassment, hate speech, or discriminatory content</li>
              <li>Spam, phishing, or fraudulent activities</li>
              <li>Creating deepfakes or manipulated content for malicious purposes</li>
              <li>Bypassing academic integrity policies inappropriately</li>
              <li>Infringing on intellectual property rights of others</li>
              <li>Attempting to reverse engineer or compromise our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Service and its original content, features, and functionality are owned by JLawrence Marketing and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              You retain ownership of content you upload to our Service. By uploading content, you grant us a limited license to process and analyze it solely to provide our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Payment Terms</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Subscriptions are billed monthly or annually in advance</li>
              <li>Payment processing is handled by Stripe and PayPal</li>
              <li>Failed payments may result in service suspension</li>
              <li>Refunds are provided within 30 days of initial subscription</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Service Availability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance. We are not liable for service interruptions beyond our reasonable control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To the maximum extent permitted by law, JLawrence Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Termination</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Either party may terminate your account and access to the Service:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>You may cancel your subscription at any time</li>
              <li>We may suspend or terminate accounts for Terms violations</li>
              <li>Upon termination, your access to the Service will cease immediately</li>
              <li>Data associated with terminated accounts may be deleted</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Dispute Resolution</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Any disputes arising from these Terms or use of the Service will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will take place in the United States, and the laws of the State of Delaware will govern.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13. Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For questions about these Terms of Service, contact us:
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">14. Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. Material changes will be communicated via email or service notifications. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
