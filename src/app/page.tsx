import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero-section";
import IntelligenceFlow from "@/components/sections/intelligence-flow";
import DashboardPreview from "@/components/sections/dashboard-preview";
import SphereSection from "@/components/sections/sphere-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntelligenceFlow />
      <DashboardPreview />
      <SphereSection />
      <Footer />
    </main>
  );
}
