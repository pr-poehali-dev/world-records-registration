import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
};

export default Index;
