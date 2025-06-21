
import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Cookie Policy</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Last Updated:</strong> December 2024<br />
            <strong>Effective Date:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. What Are Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Cookies are small text files that are stored on your device when you visit our website https://brandprotectiontoolkit.com. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.1 Essential Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies are necessary for the website to function properly:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Authentication cookies:</strong> Keep you logged in to your account</li>
              <li><strong>Security cookies:</strong> Protect against cross-site request forgery</li>
              <li><strong>Session cookies:</strong> Maintain your session state</li>
              <li><strong>Load balancing cookies:</strong> Ensure optimal service delivery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.2 Functional Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies enhance your experience on our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Theme preferences:</strong> Remember your light/dark mode selection</li>
              <li><strong>Language settings:</strong> Store your preferred language</li>
              <li><strong>Tool preferences:</strong> Remember your tool settings and usage history</li>
              <li><strong>Form data:</strong> Temporarily store form information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2.3 Performance Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies help us understand how you use our website:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Analytics cookies:</strong> Track usage patterns and popular features</li>
              <li><strong>Performance monitoring:</strong> Monitor website speed and functionality</li>
              <li><strong>Error tracking:</strong> Help us identify and fix issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use trusted third-party services that may set cookies:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Payment processors (Stripe, PayPal):</strong> Secure payment processing</li>
              <li><strong>AI service providers:</strong> Content analysis and verification</li>
              <li><strong>Analytics services:</strong> Website usage analysis</li>
              <li><strong>Support services:</strong> Customer service and chat functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Cookie Duration</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Session Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300">Deleted when you close your browser</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Persistent Cookies</h3>
                <p className="text-gray-700 dark:text-gray-300">Remain on your device for a set period:</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                  <li>Authentication cookies: 30 days</li>
                  <li>Preference cookies: 1 year</li>
                  <li>Analytics cookies: 2 years</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.1 Browser Settings</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
              <li><strong>Chrome:</strong> Settings > Privacy and Security > Cookies</li>
              <li><strong>Firefox:</strong> Options > Privacy & Security > Cookies</li>
              <li><strong>Safari:</strong> Preferences > Privacy > Cookies</li>
              <li><strong>Edge:</strong> Settings > Cookies and site permissions</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5.2 Cookie Consent</h3>
            <p className="text-gray-700 dark:text-gray-300">
              When you first visit our website, you'll see a cookie consent banner allowing you to choose which types of cookies to accept. You can change your preferences at any time through the cookie settings link in our website footer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Impact of Disabling Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Disabling certain cookies may affect your experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Essential cookies: Website may not function properly</li>
              <li>Functional cookies: Loss of personalized settings</li>
              <li>Performance cookies: Reduced ability to improve our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Updates to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Cookie Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have questions about our Cookie Policy, contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>JLawrence Marketing</strong><br />
                Email: support@brandprotectiontoolkit.com<br />
                Website: https://brandprotectiontoolkit.com
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cookies;
