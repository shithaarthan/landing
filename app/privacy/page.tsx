'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50">
      <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/icon.png" alt="Tinty" width={40} height={40} className="w-10 h-10 rounded-xl" unoptimized />
              <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">Tinty</span>
            </Link>

            <Link href="/" className="text-[var(--color-primary-purple)] font-medium text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-display font-bold text-[var(--color-charcoal)] mb-8">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <p className="text-sm text-[var(--color-darkmuted)] mb-6">Last updated: March 3, 2026</p>

          <div className="space-y-6 text-[var(--color-charcoal)]/85 leading-relaxed">
            <p>
              This policy explains how Tinty collects, uses, and protects information when you use our service.
              This document is for transparency and product communication; it is not legal advice.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">1) What we collect</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account details you provide (such as email).</li>
                <li>Photos you upload are used only to generate virtual try-on results in real time.</li>
                <li>Technical and usage information (device/browser, interactions, and diagnostics).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">2) How we use information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To run and improve virtual try-on features.</li>
                <li>To secure the service and prevent abuse.</li>
                <li>To support billing and account operations when applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">3) Image processing and storage</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Uploaded images are processed to generate outputs for your use.</li>
                <li>We do <strong>not</strong> store uploaded source images or generated try-on images on our servers after processing.</li>
                <li>If you choose to save an image, it is saved only on your own device.</li>
                <li>You retain ownership of your uploaded content.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">4) Sharing</h2>
              <p>
                We do not sell personal information. Since images are not stored server-side, we do not sell or publish your uploaded images.
                Limited technical data may be shared with trusted vendors (such as hosting or analytics providers) only to operate the service,
                or when required by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">5) Your choices</h2>
              <p>
                You can request access or deletion of account-related personal data by contacting us. Saved images under your control remain
                on your own device and can be deleted by you at any time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">6) Contact</h2>
              <p>
                Privacy requests: <a className="text-[var(--color-primary-purple)] font-semibold hover:underline" href="mailto:privacy@tinty.app">privacy@tinty.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
