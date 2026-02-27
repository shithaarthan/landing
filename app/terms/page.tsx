'use client';

import Link from 'next/link';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg)] via-slate-50 to-violet-50">
            {/* Header */}
            <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <img src="/icon.png" alt="Tinty" className="w-10 h-10 rounded-xl" />
                            <span className="text-xl font-display font-bold text-[var(--color-charcoal)]">
                                Tinty
                            </span>
                        </Link>
                        <Link href="/" className="text-[var(--color-primary-purple)] font-medium text-sm">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                <h1 className="text-4xl font-display font-bold text-[var(--color-charcoal)] mb-8">
                    Terms of Service
                </h1>

                <div className="prose prose-lg max-w-none text-[var(--color-charcoal)]">
                    <p className="text-[var(--color-darkmuted)] mb-6">
                        Last updated: January 10, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            By accessing or using Tinty ("the Service"), you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            Tinty provides AI-powered virtual try-on services that allow users to visualize how clothing
                            items would look on them. The Service includes web and mobile applications, as well as API
                            access for businesses.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            To use certain features, you must create an account. You are responsible for:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>Maintaining the confidentiality of your account credentials</li>
                            <li>All activities that occur under your account</li>
                            <li>Notifying us immediately of any unauthorized use</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Usage Credits</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            The Service operates on a credit-based system. Credits are consumed when you use try-on features.
                            Credits reset monthly on your billing date. Unused credits do not roll over to the next billing period.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Acceptable Use</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            You agree not to:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>Upload inappropriate, offensive, or illegal content</li>
                            <li>Use the Service to infringe on intellectual property rights</li>
                            <li>Attempt to reverse engineer or exploit the Service</li>
                            <li>Share your API keys or account access with unauthorized parties</li>
                            <li>Exceed rate limits or abuse the Service</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            You retain ownership of images you upload. By uploading content, you grant Tinty a limited
                            license to process that content to provide the Service. Generated try-on images are licensed
                            to you according to your subscription plan.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Cancellation and Refunds</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            You may cancel your subscription at any time. Upon cancellation, you retain access until the
                            end of your current billing period. Refunds are handled on a case-by-case basis.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            The Service is provided "as is" without warranties. Tinty is not liable for any indirect,
                            incidental, or consequential damages arising from your use of the Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We may update these terms from time to time. We will notify you of significant changes via
                            email or through the Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
                        <p className="text-[var(--color-darkmuted)]">
                            For questions about these Terms, contact us at{' '}
                            <a href="mailto:hello@tinty.app" className="text-[var(--color-primary-purple)] hover:underline">
                                hello@tinty.app
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
