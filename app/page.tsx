import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CanvasStage from '@/components/CanvasStage';
import SceneIntro from '@/components/SceneIntro';
import SceneProblem from '@/components/SceneProblem';
import SceneSolution from '@/components/SceneSolution';
import SceneFeatures from '@/components/SceneFeatures';
import SceneHowItWorks from '@/components/SceneHowItWorks';
import SceneDemo from '@/components/SceneDemo';
import ScenePricing from '@/components/ScenePricing';
import SceneTestimonials from '@/components/SceneTestimonials';
import SceneCTA from '@/components/SceneCTA';

export default function Home() {
  return (
    <div className="story-root w-full box-border">
      <Header />
      <CanvasStage>
        {/* Hero Section */}
        <SceneIntro />

        {/* Problem Section */}
        <SceneProblem />

        {/* Solution Section */}
        <SceneSolution />

        {/* Features Section */}
        <SceneFeatures />

        {/* How It Works Section */}
        <SceneHowItWorks />

        {/* Demo Section */}
        <SceneDemo />

        {/* Pricing Section */}
        <ScenePricing />

        {/* Testimonials Section */}
        <SceneTestimonials />

        {/* CTA Section */}
        <SceneCTA />
      </CanvasStage>
      <Footer />
    </div>
  );
}
