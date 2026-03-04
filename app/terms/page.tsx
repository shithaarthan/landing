'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
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
          Terms of Use
        </h1>

        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <p className="text-sm text-[var(--color-darkmuted)] mb-6">Last updated: March 4, 2026</p>

          <div className="space-y-6 text-[var(--color-charcoal)]/85 leading-relaxed">
            <p>
              These Terms of Use govern your access to and use of Tinty. By using the service, you agree to these terms.
              This document is for product communication and is not legal advice.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">1) Eligibility and account</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You must provide accurate account information and keep it up to date.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You are responsible for activity that occurs under your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">2) Acceptable use</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use Tinty only for lawful purposes and in accordance with applicable laws.</li>
                <li>Do not attempt to abuse, disrupt, reverse-engineer, or compromise the service.</li>
                <li>Do not upload content that infringes rights, is harmful, or violates others’ privacy.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">3) Content and ownership</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>You retain ownership of content you upload.</li>
                <li>You grant us permission to process uploaded content only to provide the try-on features.</li>
                <li>Any trademarks, branding, and software in Tinty remain the property of their respective owners.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">4) Service availability</h2>
              <p>
                We aim to provide reliable service, but availability and features may change over time. We may modify,
                suspend, or discontinue parts of the service with or without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">5) Disclaimer and limitation</h2>
              <p>
                Tinty is provided on an “as is” and “as available” basis. To the fullest extent permitted by law,
                we disclaim warranties and limit liability for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">6) Contact</h2>
              <p>
                Terms questions: <a className="text-[var(--color-primary-purple)] font-semibold hover:underline" href="mailto:legal@tinty.app">legal@tinty.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}