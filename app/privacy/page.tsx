'use client';

import Link from 'next/link';

export default function PrivacyPage() {
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
                    Privacy Policy
                </h1>

                <div className="prose prose-lg max-w-none text-[var(--color-charcoal)]">
                    <p className="text-[var(--color-darkmuted)] mb-6">
                        Last updated: January 10, 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We collect information you provide directly:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li><strong>Account information:</strong> Email address, name, and profile picture when you sign in</li>
                            <li><strong>Uploaded images:</strong> Photos you upload for virtual try-on processing</li>
                            <li><strong>Usage data:</strong> How you interact with our Service</li>
                            <li><strong>Payment information:</strong> Processed securely by our payment providers</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We use your information to:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>Provide and improve the virtual try-on Service</li>
                            <li>Process your transactions and send related information</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Analyze usage patterns to improve our Service</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Image Processing & Storage</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            <strong>Your privacy is our priority:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>Images are processed in real-time and are <strong>not stored permanently</strong></li>
                            <li>Generated try-on results are cached temporarily (up to 24 hours) for your convenience</li>
                            <li>We do not use your images to train AI models without explicit consent</li>
                            <li>You can request deletion of any cached data at any time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We do not sell your personal information. We may share data with:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li><strong>Service providers:</strong> Who help us operate the Service (hosting, payment processing)</li>
                            <li><strong>AI processing partners:</strong> To generate try-on results (images are processed, not stored)</li>
                            <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We implement industry-standard security measures including:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>HTTPS encryption for all data transmission</li>
                            <li>Secure cloud infrastructure</li>
                            <li>Regular security audits</li>
                            <li>Access controls and authentication</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            Depending on your location, you may have rights to:
                        </p>
                        <ul className="list-disc pl-6 text-[var(--color-darkmuted)] space-y-2">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate data</li>
                            <li>Delete your data</li>
                            <li>Export your data</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We use cookies and similar technologies for authentication, preferences, and analytics.
                            You can manage cookie preferences through your browser settings.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            The Service is not intended for children under 13. We do not knowingly collect information
                            from children under 13.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                        <p className="text-[var(--color-darkmuted)] mb-4">
                            We may update this Privacy Policy from time to time. We will notify you of significant
                            changes via email or through the Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                        <p className="text-[var(--color-darkmuted)]">
                            For privacy-related questions, contact us at{' '}
                            <a href="mailto:privacy@tinty.app" className="text-[var(--color-primary-purple)] hover:underline">
                                privacy@tinty.app
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
