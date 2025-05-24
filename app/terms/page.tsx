import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)',
      paddingTop: '100px'
    }}>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4de95]">Terms & Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Keystone, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">2. Use License</h2>
            <p className="text-gray-300 leading-relaxed">
              Permission is granted to temporarily use Keystone for personal, non-commercial purposes. This license does not include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software contained in Keystone</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">3. User Account</h2>
            <p className="text-gray-300 leading-relaxed">
              To use certain features of Keystone, you must register for an account. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">4. User Content</h2>
            <p className="text-gray-300 leading-relaxed">
              You retain all rights to the content you create within Keystone. By using our service, you grant us a license to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>Store and process your content</li>
              <li>Use your content to provide and improve our services</li>
              <li>Generate personalized reminders and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">5. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              Keystone is provided "as is" without any warranties, expressed or implied. We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
              <li>The service will be uninterrupted or error-free</li>
              <li>The results obtained will be accurate or reliable</li>
              <li>The quality of the service will meet your expectations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">6. Limitations</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Keystone or its suppliers be liable for any damages arising out of the use or inability to use our service, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">7. Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify or discontinue, temporarily or permanently, Keystone or any features or portions thereof without prior notice. We shall not be liable for any modification, suspension, or discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">8. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">9. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about the Terms should be sent to us at:
              <br />
              <a href="mailto:zach@thekeystoneapp.com" className="text-[#d4de95] hover:underline">
                zach@thekeystoneapp.com
              </a>
            </p>
          </section>

          <p className="text-gray-400 text-sm mt-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 