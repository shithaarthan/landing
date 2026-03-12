import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Deleting Instructions',
  description:
    'Instructions for deleting your Tinty account and associated data.',
  alternates: {
    canonical: '/data-deletion/',
  },
  openGraph: {
    title: 'Data Deleting Instructions',
    description:
      'Instructions for deleting your Tinty account and associated data.',
    url: '/data-deletion/',
  },
  twitter: {
    title: 'Data Deleting Instructions',
    description:
      'Instructions for deleting your Tinty account and associated data.',
  },
};

export default function DataDeletionPage() {
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
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          <h1 className="mb-4 text-3xl font-display font-bold text-[var(--color-primary-purple)] md:text-4xl">
            Data Deleting Instructions
          </h1>

          <p className="mb-8 text-[var(--color-charcoal)]/85">
            We respect your right to control your data. If you wish to delete your Tinty account
            and all associated data, please follow the steps below.
          </p>

          <div className="space-y-8 leading-relaxed text-[var(--color-charcoal)]/85">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-[var(--color-primary-purple)]">
                How to Delete Your Account
              </h2>
              <p>
                You can request account deletion by emailing us directly at{' '}
                <a
                  className="font-semibold text-[var(--color-primary-purple)] hover:underline"
                  href="mailto:support@tinty.app"
                >
                  support@tinty.app
                </a>{' '}
                from the email address associated with your Tinty account.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-semibold text-[var(--color-primary-purple)]">
                What Data is Deleted?
              </h2>
              <p>Upon receiving your request, we will permanently delete:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Your user profile and email address.</li>
                <li>Your subscription link and credit balance.</li>
              </ul>
              <p className="mt-4">
                Please note that active Google Play subscriptions must be cancelled via the
                Google Play Store directly to avoid future charges.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
