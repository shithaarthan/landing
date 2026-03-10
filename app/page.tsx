import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanvasStage from '@/components/CanvasStage';
import SceneIntro from '@/components/SceneIntro';
import SceneSolution from '@/components/SceneSolution';
import SceneFeatures from '@/components/SceneFeatures';
import ScenePricing from '@/components/ScenePricing';
import SceneHowItWorks from '@/components/SceneHowItWorks';
import SceneTestimonials from '@/components/SceneTestimonials';
import SceneFAQ from '@/components/SceneFAQ';
import SceneCTA from '@/components/SceneCTA';

export const metadata: Metadata = {
  title: 'AI Virtual Try-On App | See Clothes On You Instantly',
  description:
    'Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying. Reduce fashion returns with our realistic virtual dressing room.',
  keywords: [
    'AI virtual try-on app',
    'virtual dressing room',
    'try clothes on virtually',
    'AI fashion technology',
    'see how clothes look on me',
    'best app to try on clothes before buying',
    'AI clothing try-on for online shopping',
    'reduce fashion returns with AI',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tinty AI Virtual Try-On App | See Clothes On You Instantly',
    description:
      'Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying. Reduce fashion returns with our realistic virtual dressing room.',
    url: '/',
  },
  twitter: {
    title: 'Tinty AI Virtual Try-On App | See Clothes On You Instantly',
    description:
      'Try clothes on virtually with the Tinty AI virtual try-on app. See exactly how outfits look on you before buying.',
  },
};

export default function Home() {
  return (
    <div className="story-root">
      <Header />
      <CanvasStage>
        <section id="hero">
          <SceneIntro />
        </section>

        <SceneSolution />

        <section id="features">
          <SceneFeatures />
        </section>

        <section id="pricing">
          <ScenePricing />
        </section>

        <section id="how-it-works">
          <SceneHowItWorks />
        </section>

        <section id="testimonials">
          <SceneTestimonials />
        </section>

        <section id="faq">
          <SceneFAQ />
        </section>

        <section id="cta">
          <SceneCTA />
        </section>
      </CanvasStage>
      <Footer />
    </div>
  );
}
