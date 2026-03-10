import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how Tinty collects, uses, and protects your information when you use the AI virtual try-on service.',
  alternates: {
    canonical: '/privacy/',
  },
  openGraph: {
    title: 'Tinty Privacy Policy',
    description:
      'Read how Tinty collects, uses, and protects your information when you use the AI virtual try-on service.',
    url: '/privacy/',
  },
  twitter: {
    title: 'Tinty Privacy Policy',
    description:
      'Read how Tinty collects, uses, and protects your information when you use the AI virtual try-on service.',
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-6 text-sm text-[var(--color-darkmuted)]">
            Last updated: March 3, 2026
          </p>

          <div className="space-y-6 leading-relaxed text-[var(--color-charcoal)]/85">
            <p>
              This policy explains how Tinty collects, uses, and protects information when you
              use our service. This document is for transparency and product communication;
              it is not legal advice.
            </p>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                1) What we collect
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>Account details you provide, such as email.</li>
                <li>Photos you upload are used only to generate virtual try-on results in real time.</li>
                <li>Technical and usage information, including device, browser, interactions, and diagnostics.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                2) How we use information
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>To run and improve virtual try-on features.</li>
                <li>To secure the service and prevent abuse.</li>
                <li>To support billing and account operations when applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                3) Image processing and storage
              </h2>
              <ul className="list-disc space-y-1 pl-6">
                <li>Uploaded images are processed to generate outputs for your use.</li>
                <li>
                  We do <strong>not</strong> store uploaded source images or generated try-on
                  images on our servers after processing.
                </li>
                <li>If you choose to save an image, it is saved only on your own device.</li>
                <li>You retain ownership of your uploaded content.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                4) Sharing
              </h2>
              <p>
                We do not sell personal information. Since images are not stored server-side,
                we do not sell or publish your uploaded images. Limited technical data may be
                shared with trusted vendors, such as hosting or analytics providers, only to
                operate the service or when required by law.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                5) Your choices
              </h2>
              <p>
                You can request access or deletion of account-related personal data by
                contacting us. Saved images under your control remain on your own device and
                can be deleted by you at any time.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-semibold text-[var(--color-charcoal)]">
                6) Contact
              </h2>
              <p>
                Privacy requests:{' '}
                <a
                  className="font-semibold text-[var(--color-primary-purple)] hover:underline"
                  href="mailto:privacy@tinty.app"
                >
                  privacy@tinty.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
