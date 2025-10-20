import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Tinty',
  description: 'Learn how Tinty handles your privacy and personal information in our Privacy Policy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <header className="mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 gradient-text">
              Privacy Policy
            </h1>
            <p className="text-gray-600 font-body leading-relaxed">
              Effective Date: October 12, 2025<br />
              Last Updated: October 12, 2025
            </p>
          </header>

          <div className="space-y-8">
            <section className="prose prose-lg max-w-none">
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                1. INTRODUCTION
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Tinty ("we", "our", or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect information when you use the Tinty mobile application (the "App").
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                By using Tinty, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                2. INFORMATION WE COLLECT
              </h2>
              
              <h3 className="font-display font-semibold text-xl mb-3 text-[var(--color-charcoal)] mt-6">
                2.1 Information You Provide
              </h3>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                When you use the App, we may collect:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li>Content and inputs you create within the App</li>
                <li>Account information if you create an account (such as email address)</li>
                <li>Settings and preferences you configure</li>
              </ul>

              <h3 className="font-display font-semibold text-xl mb-3 text-[var(--color-charcoal)] mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                We automatically collect certain information to help us improve the App:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li>Basic device information (device type, operating system version)</li>
                <li>App usage patterns and performance data</li>
                <li>Crash reports and diagnostic information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                3. HOW WE STORE AND PROTECT YOUR DATA
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                We use trusted, industry-standard cloud infrastructure to store and process your data securely. Your information is protected using:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li>Encryption during transmission and at rest</li>
                <li>Secure authentication systems</li>
                <li>Regular security updates and monitoring</li>
                <li>Access controls to limit data access</li>
              </ul>

              <p className="font-body text-gray-700 leading-relaxed mt-6">
                <strong>Data Retention:</strong> We retain your data only as long as necessary to provide App features and services. You may request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                4. THIRD-PARTY SERVICES
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                Tinty uses select third-party services to provide functionality:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-body text-gray-700 leading-relaxed">
                    <strong className="text-lg">Authentication and Cloud Services</strong><br />
                    <span className="text-sm text-gray-600">Purpose:</span> Secure user authentication, data storage, app analytics, and performance monitoring<br />
                    <span className="text-sm text-gray-600">Provider:</span> Google LLC<br />
                    <span className="text-sm text-gray-600">Privacy Policy:</span>{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary-purple)] hover:text-[var(--color-accent-purple)] underline"
                    >
                      https://policies.google.com/privacy
                    </a>
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-body text-gray-700 leading-relaxed">
                    <strong className="text-lg">Payment Processing</strong><br />
                    <span className="text-sm text-gray-600">Purpose:</span> In-app purchases and subscription billing<br />
                    <span className="text-sm text-gray-600">Provider:</span> Google Play Store / Apple App Store<br />
                    <span className="text-sm text-gray-600">Note:</span> Payment information is handled directly by the app stores and not stored by Tinty
                  </p>
                </div>
              </div>

              <p className="font-body text-gray-700 leading-relaxed mt-6">
                These services operate under their own privacy policies. We do not control their practices and recommend reviewing their policies.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                5. HOW WE USE YOUR INFORMATION
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li>Provide and improve App functionality</li>
                <li>Manage user accounts and subscriptions</li>
                <li>Analyze usage to enhance user experience</li>
                <li>Detect and fix technical issues</li>
                <li>Send important service updates</li>
                <li>Provide customer support</li>
              </ul>

              <p className="font-body text-gray-700 leading-relaxed mt-6">
                <strong>We do NOT:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li>Sell your personal information to third parties</li>
                <li>Share your data for advertising purposes</li>
                <li>Use your data for unrelated purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                6. YOUR PRIVACY RIGHTS
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-6">
                You have rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-gray-700 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>
              <p className="font-body text-gray-700 leading-relaxed mt-6">
                To exercise these rights, contact us at support@tinty.app. We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                7. DATA TRANSFERS
              </h2>
              <p className="font-body text-gray-700 leading-relaxed">
                Your information may be processed and stored in locations outside your country of residence. These locations may have different data protection laws. By using the App, you consent to such transfers. We ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                8. CHILDREN'S PRIVACY
              </h2>
              <p className="font-body text-gray-700 leading-relaxed">
                Tinty is not intended for children under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect information from children. If we discover we have collected data from a child, we will delete it promptly. Parents who believe their child has provided information should contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                9. CALIFORNIA PRIVACY RIGHTS
              </h2>
              <p className="font-body text-gray-700 leading-relaxed">
                California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what information we collect, the right to request deletion, and the right to opt-out of data sales. We do not sell personal information. To exercise your rights, contact support@tinty.app.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                10. CHANGES TO THIS POLICY
              </h2>
              <p className="font-body text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will be communicated through the App or via email. The "Last Updated" date at the top reflects the most recent revision. Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-2xl mb-4 text-[var(--color-charcoal)]">
                11. CONTACT US
              </h2>
              <p className="font-body text-gray-700 leading-relaxed mb-4">
                For questions or requests regarding this Privacy Policy, please contact:
              </p>
              <div className="bg-[var(--color-warm-gray)] p-6 rounded-lg">
                <p className="font-body text-gray-700 leading-relaxed">
                  <strong>Developer:</strong> Shithaarthan<br />
                  <strong>Email:</strong> support@tinty.app<br />
                  <strong>Alternate Contact:</strong> shithaarthan21@gmail.com<br />
                  <strong>Response Time:</strong> Within 48-72 hours
                </p>
              </div>
            </section>

            <section className="border-t pt-8">
              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl mb-2 text-[var(--color-charcoal)]">
                  Privacy at a Glance
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-body text-gray-700"><strong>✓ Secure Storage:</strong> Industry-standard encryption and protection</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-body text-gray-700"><strong>✓ No Data Sales:</strong> We never sell your information</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-body text-gray-700"><strong>✓ Your Control:</strong> Access, delete, or export your data anytime</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-body text-gray-700"><strong>✓ Transparency:</strong> Clear about what we collect and why</p>
                </div>
              </div>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="font-body text-gray-600">
              © 2025 Tinty. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}