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

export default function Home() {
  return (
    <div className="story-root">
      <Header />
      <CanvasStage>
        {/* Hero Section */}
        <section id="hero">
          <SceneIntro />
        </section>

        {/* Solution - What Tinty Does */}
        <SceneSolution />

        {/* Features Section */}
        <section id="features">
          <SceneFeatures />
        </section>

        {/* Pricing Section */}
        <section id="pricing">
          <ScenePricing />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <SceneHowItWorks />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <SceneTestimonials />
        </section>

        {/* FAQ Section */}
        <section id="faq">
          <SceneFAQ />
        </section>

        {/* CTA Section */}
        <section id="cta">
          <SceneCTA />
        </section>
      </CanvasStage>
      <Footer />
    </div>
  );
}

