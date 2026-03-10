import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Review the terms that govern access to and use of the Tinty AI virtual try-on service.',
  alternates: {
    canonical: '/terms/',
  },
  openGraph: {
    title: 'Tinty Terms of Use',
    description:
      'Review the terms that govern access to and use of the Tinty AI virtual try-on service.',
    url: '/terms/',
  },
  twitter: {
    title: 'Tinty Terms of Use',
    description:
      'Review the terms that govern access to and use of the Tinty AI virtual try-on service.',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="Tinty"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl"
                unoptimized
              />
              <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">
                Tinty
              </span>
            </Link>

            <Link href="/" className="text-sm font-medium text-[var(--color-primary-purple)]">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12 md:px-12">
        <h1 className="mb-8 text-4xl font-display font-bold text-[var(--color-charcoal)]">
          Terms of Use
        </h1>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-6 text-sm text-[var(--color-darkmuted)]">
            Last updated: March 4, 2026
          </p>

          <div className="space-y-6 leading-relaxed text-[var(--color-charcoal)]/85">
            <p>
              These Terms of Use govern your access to and use of Tinty. By using the service,
              you agree to these terms. This document is for product communication and is not
              legal advice.
            </p>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                1) Eligibility and account
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>You must provide accurate account information and keep it up to date.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You are responsible for activity that occurs under your account.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                2) Acceptable use
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>Use Tinty only for lawful purposes and in accordance with applicable laws.</li>
                <li>Do not attempt to abuse, disrupt, reverse-engineer, or compromise the service.</li>
                <li>Do not upload content that infringes rights, is harmful, or violates others' privacy.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                3) Content and ownership
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>You retain ownership of content you upload.</li>
                <li>You grant us permission to process uploaded content only to provide the try-on features.</li>
                <li>Any trademarks, branding, and software in Tinty remain the property of their respective owners.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                4) Service availability
              </h2>
              <p>
                We aim to provide reliable service, but availability and features may change
                over time. We may modify, suspend, or discontinue parts of the service with or
                without notice.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                5) Disclaimer and limitation
              </h2>
              <p>
                Tinty is provided on an "as is" and "as available" basis. To the fullest extent
                permitted by law, we disclaim warranties and limit liability for indirect,
                incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                6) Contact
              </h2>
              <p>
                Terms questions:{' '}
                <a
                  className="font-semibold text-[var(--color-primary-purple)] hover:underline"
                  href="mailto:legal@tinty.app"
                >
                  legal@tinty.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
