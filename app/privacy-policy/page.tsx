import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(to bottom, rgba(43, 43, 43, 1) 0%, rgba(42, 42, 42, 0.95) 50%, rgba(41, 41, 41, 0.9) 100%)',
      paddingTop: '100px'
    }}>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4de95]">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              At Keystone, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Information We Collect</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Personal information (name, email address)</li>
                <li>User-generated content (values, goals, identity traits)</li>
                <li>Usage data and preferences</li>
                <li>Communication data when you contact us</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">How We Use Your Information</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and maintain our service</li>
                <li>Send you personalized reminders and updates</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our service</li>
                <li>Analyze usage patterns to improve our application</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Your Rights</h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-[#d4de95]">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
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