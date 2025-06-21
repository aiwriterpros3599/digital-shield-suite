
import React from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Footer } from '@/components/landing/Footer';

const Dmca = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">DMCA Policy</h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            <strong>Last Updated:</strong> December 2024<br />
            <strong>Effective Date:</strong> December 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. DMCA Compliance Statement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Brand Protection Toolkit ("we," "us," or "our") respects the intellectual property rights of others and expects our users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), we will respond expeditiously to claims of copyright infringement committed using our service at https://brandprotectiontoolkit.com.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our service, which includes AI Content Humanizer, AI Image Verification Tool, and Content Theft Scanner, is designed to help users protect their own intellectual property and respect the rights of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Reporting Copyright Infringement</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible through our service, please notify our DMCA agent with the following information:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Required Information:</h3>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>A physical or electronic signature of the copyright owner or authorized agent</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing, including its location on our service</li>
              <li>Your contact information (address, telephone number, and email address)</li>
              <li>A statement that you have a good faith belief that the disputed use is not authorized</li>
              <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. DMCA Agent Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>DMCA Agent</strong><br />
                JLawrence Marketing<br />
                Email: support@brandprotectiontoolkit.com<br />
                Subject Line: "DMCA Takedown Notice"<br />
                Website: https://brandprotectiontoolkit.com
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Counter-Notification Procedure</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you believe that material you posted was removed or disabled by mistake or misidentification, you may file a counter-notification with our DMCA agent. Your counter-notification must include:
            </p>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that was removed and its original location</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed by mistake or misidentification</li>
              <li>Your name, address, and telephone number</li>
              <li>A statement that you consent to the jurisdiction of Federal District Court for your judicial district</li>
              <li>A statement that you will accept service of process from the person who provided the takedown notification</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Response Process</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Upon Receipt of Valid DMCA Notice:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                  <li>We will promptly investigate the claim</li>
                  <li>Remove or disable access to the allegedly infringing material</li>
                  <li>Notify the user who posted the material</li>
                  <li>Document the complaint for our records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Response Timeframe:</h3>
                <p className="text-gray-700 dark:text-gray-300">We will respond to valid DMCA notices within 2-5 business days.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Repeat Infringer Policy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In accordance with the DMCA and other applicable laws, we have adopted a policy of terminating accounts of users who are deemed to be repeat infringers. We may also, at our sole discretion, limit access to our service and/or terminate the accounts of any users who infringe intellectual property rights, regardless of whether there is any repeat infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Good Faith Statement</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents that material is infringing may be subject to liability. We reserve the right to seek damages from any party that submits a notification or counter-notification in bad faith.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Our Platform's Content Protection Features</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Brand Protection Toolkit is designed to help users protect their intellectual property:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li><strong>Content Theft Scanner:</strong> Helps identify unauthorized use of your content</li>
              <li><strong>DMCA Notice Generator:</strong> Assists in creating properly formatted takedown notices</li>
              <li><strong>Temporary Processing:</strong> Content uploaded for analysis is not permanently stored</li>
              <li><strong>User Education:</strong> We provide resources on intellectual property protection</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Limitations</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Please note the following limitations:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>We cannot provide legal advice regarding copyright matters</li>
              <li>This policy applies only to copyright infringement claims under the DMCA</li>
              <li>For other intellectual property concerns, please contact us directly</li>
              <li>We are not responsible for content on third-party websites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this DMCA Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our service after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Additional Resources</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For more information about copyright law and the DMCA:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>U.S. Copyright Office: <a href="https://www.copyright.gov" className="text-blue-600 underline">www.copyright.gov</a></li>
              <li>DMCA.org: Information about the Digital Millennium Copyright Act</li>
              <li>Our blog section contains articles about content protection and intellectual property</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dmca;
