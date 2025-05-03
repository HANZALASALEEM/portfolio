import Navbar from "@/app/src/components/common/Navbar";
import HeroSection from "./src/components/homePageSections/HeroSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
