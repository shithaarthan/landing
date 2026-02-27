import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanvasStage from '@/components/CanvasStage';
import SceneIntro from '@/components/SceneIntro';
import SceneSolution from '@/components/SceneSolution';
import InteractiveTryOnDemo from '@/components/InteractiveTryOnDemo';
import SceneFeatures from '@/components/SceneFeatures';
import SceneHowItWorks from '@/components/SceneHowItWorks';
import SceneTestimonials from '@/components/SceneTestimonials';
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


        {/* Interactive Demo */}
        <InteractiveTryOnDemo />

        {/* Features Section */}
        <section id="features">
          <SceneFeatures />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <SceneHowItWorks />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <SceneTestimonials />
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

